import type { ActionBarProps, ActionItemProps, ActivityIndicatorProps, ButtonProps, ContentViewProps, DatePickerProps, FormattedStringProps, SpanProps, HtmlViewProps, ImageProps, LabelProps, AbsoluteLayoutProps, DockLayoutProps, FlexboxLayoutProps, GridLayoutProps, StackLayoutProps, WrapLayoutProps, ListPickerProps, ListViewProps, NavigationButtonProps, PlaceholderProps, ProgressProps, ScrollViewProps, SearchBarProps, SegmentedBarProps, SegmentedBarItemProps, SliderProps, SwitchProps, TabViewProps, TabViewItemProps, TextViewProps, TextFieldProps, TimePickerProps, WebViewProps, FrameProps, PageProps } from "./NativeScriptComponentTypings";
import type { Child } from "@bikeshaving/crank/cjs";

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

export {};