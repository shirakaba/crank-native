import { ActionBarProps, ActionItemProps, ActivityIndicatorProps, ButtonProps, ContentViewProps, DatePickerProps, FormattedStringProps, SpanProps, HtmlViewProps, ImageProps, LabelProps, AbsoluteLayoutProps, DockLayoutProps, FlexboxLayoutProps, GridLayoutProps, StackLayoutProps, WrapLayoutProps, ListPickerProps, ListViewProps, NavigationButtonProps, PlaceholderProps, ProgressProps, ScrollViewProps, SearchBarProps, SegmentedBarProps, SegmentedBarItemProps, SliderProps, SwitchProps, TabViewProps, TabViewItemProps, TextViewProps, TextFieldProps, TimePickerProps, WebViewProps, FrameProps, PageProps } from "./NativeScriptComponentTypings";

/*
 * Proof of concept for how we'd type ReactNode, though it seems that Crank nodes
 * are somewhat different.
 */

/* Modified from React in that, in Crank, there is no ComponentLifecycle to extend. */
interface Component<P = {}, S = {}, SS = any> { }

type JSXElementConstructor<P> =
| ((props: P) => ReactElement | null)
| (new (props: P) => Component<P, any>);

interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
}
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type Key = string | number;
interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
}
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

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