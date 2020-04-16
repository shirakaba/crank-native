import {
	HostContext,
	Default,
	Environment,
	Intrinsic,
	Props,
	Raw,
	Renderer,
	Portal,
} from "@bikeshaving/crank/cjs/index";
import { setValueForProperty } from "./NativeScriptPropertyOperations";
import { Instance, HostContext as RNSHostContext } from "./HostConfigTypes";
import { StackLayout } from "@nativescript/core";

const rootHostContext: RNSHostContext = {
    isInAParentText: false,
    isInAParentSpan: false,
    isInAParentFormattedString: false,
    isInADockLayout: false,
    isInAGridLayout: false,
    isInAnAbsoluteLayout: false,
    isInAFlexboxLayout: false,
};

// declare module "./index" {
// 	interface EventMap extends GlobalEventHandlersEventMap {}
// }

// TODO: create an allowlist/blocklist of props
function updateProps(el: Instance, props: Props, newProps: Props): void {
    for (const name in {...props, ...newProps}) {
        const value = props[name];
		const newValue = newProps[name];
        setValueForProperty(
            el,
            name,
            newValue,
            false,
            rootHostContext, // TODO @shirakaba: implement correct RNS Host Context rather than default one.
        );
    }
}

// TODO: improve this algorithm
// https://stackoverflow.com/questions/59418120/what-is-the-most-efficient-way-to-update-the-childnodes-of-a-dom-node-with-an-ar
function updateChildren(el: Element, children: Array<Node | string>): void {
    // TODO @shirakaba: re-implement for NativeScript!

	if (el.childNodes.length === 0) {
		const fragment = document.createDocumentFragment();
		for (let child of children) {
			if (typeof child === "string") {
				child = document.createTextNode(child);
			}

			fragment.appendChild(child);
		}

		el.appendChild(fragment);
		return;
	}

	let oldChild = el.firstChild;
	for (const newChild of children) {
		if (oldChild === null) {
			el.appendChild(
				typeof newChild === "string"
					? document.createTextNode(newChild)
					: newChild,
			);
		} else if (typeof newChild === "string") {
			if (oldChild.nodeType === Node.TEXT_NODE) {
				if (oldChild.nodeValue !== newChild) {
					oldChild.nodeValue = newChild;
				}

				oldChild = oldChild.nextSibling;
			} else {
				el.insertBefore(document.createTextNode(newChild), oldChild);
			}
		} else if (oldChild !== newChild) {
			el.insertBefore(newChild, oldChild);
		} else {
			oldChild = oldChild.nextSibling;
		}
	}

	while (oldChild !== null) {
		const nextSibling = oldChild.nextSibling;
		el.removeChild(oldChild);
		oldChild = nextSibling;
	}
}

function createDocumentFragmentFromHTML(html: string): DocumentFragment {
    // TODO @shirakaba: determine what should be implemented, analogous to a document fragment.
	if (typeof document.createRange === "function") {
		return document.createRange().createContextualFragment(html);
	} else {
		const fragment = document.createDocumentFragment();
		const childNodes = new DOMParser().parseFromString(html, "text/html").body
			.childNodes;
		for (let i = 0; i < childNodes.length; i++) {
			fragment.appendChild(childNodes[i]);
		}

		return fragment;
	}
}

// TODO: Element should be ParentNode maybe?
export const env: Environment<Instance> = {
	[Default](tag: string): Intrinsic<Instance> {
		return function* defaultDOM(this: HostContext): Generator<Instance> {
            const node = new StackLayout();
			let props: Props = {};
			let nextProps: Props;
			let children: Array<Element | string> = [];
			let nextChildren: Array<Element | string>;
			for ({children: nextChildren, ...nextProps} of this) {
				updateProps(node, props, nextProps);
                props = nextProps;
				if (children.length > 0 || nextChildren.length > 0) {
                    // TODO @shirakaba: somehow map updateChildren to appendChild() (etc.) calls...
					// updateChildren(node, nextChildren);
					children = nextChildren;
				}

				yield node;
			}
		};
	},
	[Raw]({value}): Instance {
		if (typeof value === "string") {
            // TODO @shirakaba: determine what should be implemented, analogous to a document fragment.
			// TODO: figure out what the type of element should actually be
			return (createDocumentFragmentFromHTML(value) as unknown) as Instance;
		} else {
			return value;
		}
	},
	*[Portal](this: HostContext, {root}): Generator<Instance> {
		if (root == null) {
			throw new TypeError("Portal element is missing root node");
		}

		try {
			for (const {root: newRoot, children} of this) {
				if (newRoot == null) {
					throw new TypeError("Portal element is missing root node");
				}

				if (root !== newRoot) {
                    // TODO @shirakaba: somehow map updateChildren to appendChild() (etc.) calls...
					updateChildren(root, []);
					root = newRoot;
				}

                // TODO @shirakaba: somehow map updateChildren to appendChild() (etc.) calls...
				updateChildren(root, children);
				yield root;
			}
		} finally {
            // TODO @shirakaba: somehow map updateChildren to appendChild() (etc.) calls...
			updateChildren(root, []);
		}
	},
};

export class NativeScriptRenderer extends Renderer<Instance> {
	constructor() {
		super(env);
	}
}

export const renderer = new NativeScriptRenderer();