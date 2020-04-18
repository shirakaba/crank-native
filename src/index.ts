import type { View } from "@nativescript/core";
import type { Element, Child } from "@bikeshaving/crank/cjs";
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

type PropsWithChildren<P> = P & { children?: Child };

declare global {
	module JSX {
		interface IntrinsicElements {
            actionBar: PropsWithChildren<ActionBarProps>,
            actionItem: PropsWithChildren<ActionItemProps>,
            activityIndicator: PropsWithChildren<ActivityIndicatorProps>,
            button: PropsWithChildren<ButtonProps>,
            contentView: PropsWithChildren<ContentViewProps>,
            datePicker: PropsWithChildren<DatePickerProps>,
            formattedString: PropsWithChildren<FormattedStringProps>,
            span: PropsWithChildren<SpanProps>,
            htmlView: PropsWithChildren<HtmlViewProps>,
            image: PropsWithChildren<ImageProps>,
            label: PropsWithChildren<LabelProps>,
            absoluteLayout: PropsWithChildren<AbsoluteLayoutProps>,
            dockLayout: PropsWithChildren<DockLayoutProps>,
            flexboxLayout: PropsWithChildren<FlexboxLayoutProps>,
            gridLayout: PropsWithChildren<GridLayoutProps>,
            stackLayout: PropsWithChildren<StackLayoutProps>,
            wrapLayout: PropsWithChildren<WrapLayoutProps>,
            listPicker: PropsWithChildren<ListPickerProps>,
            listView: PropsWithChildren<ListViewProps>,
            navigationButton: PropsWithChildren<NavigationButtonProps>,
            placeholder: PropsWithChildren<PlaceholderProps>,
            progress: PropsWithChildren<ProgressProps>,
            scrollView: PropsWithChildren<ScrollViewProps>,
            searchBar: PropsWithChildren<SearchBarProps>,
            segmentedBar: PropsWithChildren<SegmentedBarProps>,
            segmentedBarItem: PropsWithChildren<SegmentedBarItemProps>,
            slider: PropsWithChildren<SliderProps>,
            switch: PropsWithChildren<SwitchProps>,
            tabView: PropsWithChildren<TabViewProps>,
            tabViewItem: PropsWithChildren<TabViewItemProps>,
            textView: PropsWithChildren<TextViewProps>,
            textField: PropsWithChildren<TextFieldProps>,
            timePicker: PropsWithChildren<TimePickerProps>,
            webView: PropsWithChildren<WebViewProps>,
            frame: PropsWithChildren<FrameProps>,
            page: PropsWithChildren<PageProps>,
		}

		interface ElementChildrenAttribute {
			children: {};
		}
	}
}
