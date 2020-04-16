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
            rootHostContext, // TODO: implement correct RNS Host Context rather than default one.
        );
    }
}

// TODO: improve this algorithm
// https://stackoverflow.com/questions/59418120/what-is-the-most-efficient-way-to-update-the-childnodes-of-a-dom-node-with-an-ar
function updateChildren(el: Element, children: Array<Node | string>): void {
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
export const env: Environment<Element> = {
	[Default](tag: string): Intrinsic<Element> {
		return function* defaultDOM(this: HostContext): Generator<Element> {
			const node = document.createElement(tag);
			let props: Props = {};
			let nextProps: Props;
			let children: Array<Element | string> = [];
			let nextChildren: Array<Element | string>;
			for ({children: nextChildren, ...nextProps} of this) {
				updateProps(node, props, nextProps);
				props = nextProps;
				if (
					!("innerHTML" in nextProps) &&
					(children.length > 0 || nextChildren.length > 0)
				) {
					updateChildren(node, nextChildren);
					children = nextChildren;
				}

				yield node;
			}
		};
	},
	[Raw]({value}): Element {
		if (typeof value === "string") {
			// TODO: figure out what the type of element should actually be
			return (createDocumentFragmentFromHTML(value) as unknown) as Element;
		} else {
			return value;
		}
	},
	*[Portal](this: HostContext, {root}): Generator<Element> {
		if (root == null) {
			throw new TypeError("Portal element is missing root node");
		}

		try {
			for (const {root: newRoot, children} of this) {
				if (newRoot == null) {
					throw new TypeError("Portal element is missing root node");
				}

				if (root !== newRoot) {
					updateChildren(root, []);
					root = newRoot;
				}

				updateChildren(root, children);
				yield root;
			}
		} finally {
			updateChildren(root, []);
		}
	},
};

export class DOMRenderer extends Renderer<Element> {
	constructor() {
		super(env);
	}
}

export const renderer = new DOMRenderer();