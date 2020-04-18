import type { View } from "@nativescript/core";
import type { Element, Children, Key } from "@bikeshaving/crank/cjs";
import type { ActionBarProps, ActionItemProps, ActivityIndicatorProps, ButtonProps, ContentViewProps, DatePickerProps, FormattedStringProps, SpanProps, HtmlViewProps, ImageProps, LabelProps, AbsoluteLayoutProps, DockLayoutProps, FlexboxLayoutProps, GridLayoutProps, StackLayoutProps, WrapLayoutProps, ListPickerProps, ListViewProps, NavigationButtonProps, PlaceholderProps, ProgressProps, ScrollViewProps, SearchBarProps, SegmentedBarProps, SegmentedBarItemProps, SliderProps, SwitchProps, TabViewProps, TabViewItemProps, TextViewProps, TextFieldProps, TimePickerProps, WebViewProps, FrameProps, PageProps } from "./nativescriptInterface/NativeScriptComponentTypings";
import { renderer } from "./ns";
import { Application } from "@nativescript/core";
import * as console from "./Logger";

/**
 * Start up your Crank Native app, rendering a Crank component tree into a NativeScript host element.
 * 
 * Calls NativeScript Core's Application.run() API under the hood.
 * 
 * @param App The root Crank component for your app.
 * @param rootView The host root view for your Crank component tree.
 */
export function start(App: Element, rootView: View): void {
    const existingRootView: View | undefined = Application.getRootView();
    const _hasLaunched: boolean = Application.hasLaunched();
    console.log(
        `[CrankNativeScript.ts] start(). hasLaunched(): ${_hasLaunched} existing rootView was: ${existingRootView}`
    );
    if (_hasLaunched || existingRootView) {
        console.log(`[ReactNativeScript.ts] start() called again - hot reload, so shall no-op`);
        return;
    }

    Application.run({
        create: () => {
            renderer.render(App, rootView);

            return rootView;
        },
    });
}

/**
 * Based on the "Props" interface in Crank Native, but removing the index type.
 */
interface NativeScriptAttributes {
    "crank-key"?: Key;
    children?: Children;
}
type NativeScriptProps<T> = NativeScriptAttributes & T;
// type PropsWithChildren<P> = P & { children?: Children };

declare global {
	module JSX {
		interface IntrinsicElements {
            actionBar: NativeScriptProps<Partial<ActionBarProps>>,
            actionItem: NativeScriptProps<Partial<ActionItemProps>>,
            activityIndicator: NativeScriptProps<Partial<ActivityIndicatorProps>>,
            button: NativeScriptProps<Partial<ButtonProps>>,
            contentView: NativeScriptProps<Partial<ContentViewProps>>,
            datePicker: NativeScriptProps<Partial<DatePickerProps>>,
            formattedString: NativeScriptProps<Partial<FormattedStringProps>>,
            span: NativeScriptProps<Partial<SpanProps>>,
            htmlView: NativeScriptProps<Partial<HtmlViewProps>>,
            image: NativeScriptProps<Partial<ImageProps>>,
            label: NativeScriptProps<Partial<LabelProps>>,
            absoluteLayout: NativeScriptProps<Partial<AbsoluteLayoutProps>>,
            dockLayout: NativeScriptProps<Partial<DockLayoutProps>>,
            flexboxLayout: NativeScriptProps<Partial<FlexboxLayoutProps>>,
            gridLayout: NativeScriptProps<Partial<GridLayoutProps>>,
            stackLayout: NativeScriptProps<Partial<StackLayoutProps>>,
            wrapLayout: NativeScriptProps<Partial<WrapLayoutProps>>,
            listPicker: NativeScriptProps<Partial<ListPickerProps>>,
            listView: NativeScriptProps<Partial<ListViewProps>>,
            navigationButton: NativeScriptProps<Partial<NavigationButtonProps>>,
            placeholder: NativeScriptProps<Partial<PlaceholderProps>>,
            progress: NativeScriptProps<Partial<ProgressProps>>,
            scrollView: NativeScriptProps<Partial<ScrollViewProps>>,
            searchBar: NativeScriptProps<Partial<SearchBarProps>>,
            segmentedBar: NativeScriptProps<Partial<SegmentedBarProps>>,
            segmentedBarItem: NativeScriptProps<Partial<SegmentedBarItemProps>>,
            slider: NativeScriptProps<Partial<SliderProps>>,
            switch: NativeScriptProps<Partial<SwitchProps>>,
            tabView: NativeScriptProps<Partial<TabViewProps>>,
            tabViewItem: NativeScriptProps<Partial<TabViewItemProps>>,
            textView: NativeScriptProps<Partial<TextViewProps>>,
            textField: NativeScriptProps<Partial<TextFieldProps>>,
            timePicker: NativeScriptProps<Partial<TimePickerProps>>,
            webView: NativeScriptProps<Partial<WebViewProps>>,
            frame: NativeScriptProps<Partial<FrameProps>>,
            page: NativeScriptProps<Partial<PageProps>>,
		}

		interface ElementChildrenAttribute {
			children: {};
		}
	}
}
