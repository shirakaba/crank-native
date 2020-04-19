import type { Element } from "@bikeshaving/crank/cjs";
import type { ActionBarProps, ActionItemProps, ActivityIndicatorProps, ButtonProps, ContentViewProps, DatePickerProps, FormattedStringProps, SpanProps, HtmlViewProps, ImageProps, LabelProps, AbsoluteLayoutProps, DockLayoutProps, FlexboxLayoutProps, GridLayoutProps, StackLayoutProps, WrapLayoutProps, ListPickerProps, ListViewProps, NavigationButtonProps, PlaceholderProps, ProgressProps, ScrollViewProps, SearchBarProps, SegmentedBarProps, SegmentedBarItemProps, SliderProps, SwitchProps, TabViewProps, TabViewItemProps, TextViewProps, TextFieldProps, TimePickerProps, WebViewProps, FrameProps, PageProps } from "./nativescriptInterface/NativeScriptComponentTypings";
import type { ActionBar, ActionItem, ActivityIndicator, Button, ContentView, DatePicker, HtmlView, Label, AbsoluteLayout, DockLayout, FlexboxLayout, GridLayout, StackLayout, WrapLayout, ListPicker, ListView, NavigationButton, Placeholder, Progress, ScrollView, SearchBar, SegmentedBar, Slider, Switch, TabView, TabViewItem, TextView, TextField, TimePicker, Frame, Page, FormattedString, SegmentedBarItem, Span, Image, WebView, View } from "@nativescript/core";
import type { NativeScriptProps } from "./typings";
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

declare global {
	module JSX {
		interface IntrinsicElements {
            actionBar: NativeScriptProps<Partial<ActionBarProps>, ActionBar>,
            actionItem: NativeScriptProps<Partial<ActionItemProps>, ActionItem>,
            activityIndicator: NativeScriptProps<Partial<ActivityIndicatorProps>, ActivityIndicator>,
            button: NativeScriptProps<Partial<ButtonProps>, Button>,
            contentView: NativeScriptProps<Partial<ContentViewProps>, ContentView>,
            datePicker: NativeScriptProps<Partial<DatePickerProps>, DatePicker>,
            formattedString: NativeScriptProps<Partial<FormattedStringProps>, FormattedString>,
            span: NativeScriptProps<Partial<SpanProps>, Span>,
            htmlView: NativeScriptProps<Partial<HtmlViewProps>, HtmlView>,
            image: NativeScriptProps<Partial<ImageProps>, Image>,
            label: NativeScriptProps<Partial<LabelProps>, Label>,
            absoluteLayout: NativeScriptProps<Partial<AbsoluteLayoutProps>, AbsoluteLayout>,
            dockLayout: NativeScriptProps<Partial<DockLayoutProps>, DockLayout>,
            flexboxLayout: NativeScriptProps<Partial<FlexboxLayoutProps>, FlexboxLayout>,
            gridLayout: NativeScriptProps<Partial<GridLayoutProps>, GridLayout>,
            stackLayout: NativeScriptProps<Partial<StackLayoutProps>, StackLayout>,
            wrapLayout: NativeScriptProps<Partial<WrapLayoutProps>, WrapLayout>,
            listPicker: NativeScriptProps<Partial<ListPickerProps>, ListPicker>,
            listView: NativeScriptProps<Partial<ListViewProps>, ListView>,
            navigationButton: NativeScriptProps<Partial<NavigationButtonProps>, NavigationButton>,
            placeholder: NativeScriptProps<Partial<PlaceholderProps>, Placeholder>,
            progress: NativeScriptProps<Partial<ProgressProps>, Progress>,
            scrollView: NativeScriptProps<Partial<ScrollViewProps>, ScrollView>,
            searchBar: NativeScriptProps<Partial<SearchBarProps>, SearchBar>,
            segmentedBar: NativeScriptProps<Partial<SegmentedBarProps>, SegmentedBar>,
            segmentedBarItem: NativeScriptProps<Partial<SegmentedBarItemProps>, SegmentedBarItem>,
            slider: NativeScriptProps<Partial<SliderProps>, Slider>,
            switch: NativeScriptProps<Partial<SwitchProps>, Switch>,
            tabView: NativeScriptProps<Partial<TabViewProps>, TabView>,
            tabViewItem: NativeScriptProps<Partial<TabViewItemProps>, TabViewItem>,
            textView: NativeScriptProps<Partial<TextViewProps>, TextView>,
            textField: NativeScriptProps<Partial<TextFieldProps>, TextField>,
            timePicker: NativeScriptProps<Partial<TimePickerProps>, TimePicker>,
            webView: NativeScriptProps<Partial<WebViewProps>, WebView>,
            frame: NativeScriptProps<Partial<FrameProps>, Frame>,
            page: NativeScriptProps<Partial<PageProps>, Page>,
		}

		interface ElementChildrenAttribute {
			children: {};
		}
	}
}
