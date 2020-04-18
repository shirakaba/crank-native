import { ActionBarProps, ActionItemProps, ActivityIndicatorProps, ButtonProps, ContentViewProps, DatePickerProps, FormattedStringProps, SpanProps, HtmlViewProps, ImageProps, LabelProps, AbsoluteLayoutProps, DockLayoutProps, FlexboxLayoutProps, GridLayoutProps, StackLayoutProps, WrapLayoutProps, ListPickerProps, ListViewProps, NavigationButtonProps, PlaceholderProps, ProgressProps, ScrollViewProps, SearchBarProps, SegmentedBarProps, SegmentedBarItemProps, SliderProps, SwitchProps, TabViewProps, TabViewItemProps, TextViewProps, TextFieldProps, TimePickerProps, WebViewProps, FrameProps, PageProps } from "./NativeScriptComponentTypings";

declare global {
	module JSX {
		interface IntrinsicElements {
            // [tag: string]: any;
            actionBar: ActionBarProps,
            actionItem: ActionItemProps,
            activityIndicator: ActivityIndicatorProps,
            button: ButtonProps,
            contentView: ContentViewProps,
            datePicker: DatePickerProps,
            formattedString: FormattedStringProps,
            span: SpanProps,
            htmlView: HtmlViewProps,
            image: ImageProps,
            label: LabelProps,
            absoluteLayout: AbsoluteLayoutProps,
            dockLayout: DockLayoutProps,
            flexboxLayout: FlexboxLayoutProps,
            gridLayout: GridLayoutProps,
            stackLayout: StackLayoutProps,
            wrapLayout: WrapLayoutProps,
            listPicker: ListPickerProps,
            listView: ListViewProps,
            navigationButton: NavigationButtonProps,
            placeholder: PlaceholderProps,
            progress: ProgressProps,
            scrollView: ScrollViewProps,
            searchBar: SearchBarProps,
            segmentedBar: SegmentedBarProps,
            segmentedBarItem: SegmentedBarItemProps,
            slider: SliderProps,
            switch: SwitchProps,
            tabView: TabViewProps,
            tabViewItem: TabViewItemProps,
            textView: TextViewProps,
            textField: TextFieldProps,
            timePicker: TimePickerProps,
            webView: WebViewProps,
            frame: FrameProps,
            page: PageProps,
		}

		interface ElementChildrenAttribute {
			children: {};
		}
	}
}

export {};