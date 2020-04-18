import type { AbsoluteLayout, ActionBar, ActionItem, NavigationButton, ActivityIndicator, Button, Color, ContentView, DatePicker, DockLayout, EditableTextBase, FlexboxLayout, Frame, GridLayout, HtmlView, Image, Label, LayoutBase, ListPicker, ListView, Observable, Page, Placeholder, Progress, ProxyViewContainer, Repeater, ScrollView, SearchBar, SegmentedBar, SegmentedBarItem, Slider, StackLayout, Style, Switch, TabView, TabViewItem, TextBase, TextField, TextView, TimePicker, View, ViewBase, WebView, WrapLayout, Span, FormattedString, EventData, GestureEventData, PanGestureEventData, SwipeGestureEventData, RotationGestureEventData, ShownModallyData, PinchGestureEventData, TouchGestureEventData, CreateViewEventData, NavigatedData, SelectedIndexChangedEventData, ItemEventData, ScrollEventData } from "@nativescript/core";
import type { ContainerView } from "tns-core-modules/ui/core/view/view";
import * as console from "../Logger";
import { ItemSpec } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { ItemsSource } from "tns-core-modules/ui/list-picker/list-picker";
import { LoadEventData } from "tns-core-modules/ui/web-view/web-view";
import {
    SelectedIndexChangedEventData as SegmentedBarSelectedIndexChangedEventData,
} from "tns-core-modules/ui/segmented-bar/segmented-bar";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type StylePropContents = Omit<Style, "PropertyBag" | keyof Observable>;
interface PartialStyleProp {
    style: Partial<StylePropContents>;
}

/* This is more ergonomic than requiring developers to manually cast args.object.
 * TODO: introduce this throughout the library as a convenience for all event handlers. */
export interface NarrowedEventData<T extends Observable> extends EventData {
    object: T;
}

// export type PropsWithoutForwardedRef<P extends {}> = Omit<P, "forwardedRef">;

export interface ObservableEvents {
    onPropertyChange?: (data: EventData) => void;
}
export type ObservableProps = ObservableEvents & {};

/**
 * This is very naive: I just picked all the public properties that weren't readonly.
 */
export interface ViewBaseEvents {
    /* view-base.d.ts implements onLoaded() and onUnloaded(), but not on("loaded") nor
     * on("unloaded"), so I think it's most correct not to include them here at all. */
    // onLoaded?: () => void;
    // onUnloaded?: () => void;
}
export type ViewBaseProps = ObservableProps &
    ViewBaseEvents &
    PartialStyleProp &
    Pick<
        ViewBase,
        | "left"
        | "top"
        | "effectiveLeft"
        | "effectiveTop"
        | "dock"
        | "row"
        | "col"
        | "rowSpan"
        | "colSpan"
        | "domNode"
        | "order"
        | "flexGrow"
        | "flexShrink"
        | "flexWrapBefore"
        | "alignSelf"
        | "effectiveMinWidth"
        | "effectiveMinHeight"
        | "effectiveWidth"
        | "effectiveHeight"
        | "effectiveMarginTop"
        | "effectiveMarginRight"
        | "effectiveMarginBottom"
        | "effectiveMarginLeft"
        | "effectivePaddingTop"
        | "effectivePaddingRight"
        | "effectivePaddingBottom"
        | "effectivePaddingLeft"
        | "effectiveBorderTopWidth"
        | "effectiveBorderRightWidth"
        | "effectiveBorderBottomWidth"
        | "effectiveBorderLeftWidth"
        | "ios"
        | "android"
        | "viewController"
        | "nativeViewProtected"
        | "nativeView"
        | "bindingContext"
        | "typeName"
        | "parentNode"
        | "id"
        | "className"
        | "isCollapsed"
        | "_domId"
        | "_cssState"
        | "cssClasses"
        | "cssPseudoClasses"
        | "_context"
    >;

export interface ViewEvents {
    /* From View. */
    onLoaded?: (args: EventData) => void;
    onUnloaded?: (args: EventData) => void;
    onAndroidBackPressed?: (args: EventData) => void;
    onShowingModally?: (args: ShownModallyData) => void;
    onShownModally?: (args: ShownModallyData) => void;

    /* The gesture handlers. */
    onTap?: (args: GestureEventData) => void;
    onDoubleTap?: (args: GestureEventData) => void;
    onPinch?: (args: PinchGestureEventData) => void;
    onPan?: (args: PanGestureEventData) => void;
    onSwipe?: (args: SwipeGestureEventData) => void;
    onRotation?: (args: RotationGestureEventData) => void;
    onLongPress?: (args: GestureEventData) => void;
    onTouch?: (args: TouchGestureEventData) => void;
}
export type ViewProps = ViewBaseProps &
    ViewEvents &
    Pick<
        View,
        // | "android"
        // | "ios"
        | "bindingContext"
        | "borderColor"
        | "borderTopColor"
        | "borderRightColor"
        | "borderBottomColor"
        | "borderLeftColor"
        | "borderWidth"
        | "borderTopWidth"
        | "borderRightWidth"
        | "borderBottomWidth"
        | "borderLeftWidth"
        | "borderRadius"
        | "borderTopLeftRadius"
        | "borderTopRightRadius"
        | "borderBottomRightRadius"
        | "borderBottomLeftRadius"
        | "color"
        | "background"
        | "backgroundColor"
        | "backgroundImage"
        | "minWidth"
        | "minHeight"
        | "width"
        | "height"
        | "margin"
        | "marginLeft"
        | "marginTop"
        | "marginRight"
        | "marginBottom"
        | "horizontalAlignment"
        | "verticalAlignment"
        | "visibility"
        | "opacity"
        | "rotate"
        | "translateX"
        | "translateY"
        | "scaleX"
        | "scaleY"
        | "automationText"
        | "originX"
        | "originY"
        | "isEnabled"
        | "isUserInteractionEnabled"
        | "iosOverflowSafeArea"
        | "iosOverflowSafeAreaEnabled"
        | "isLayoutValid"
        | "cssType"
        | "cssClasses"
        | "cssPseudoClasses"
        | "modal"
    >;

export interface ContentViewEvents {

}
export type ContentViewProps = ViewProps & ContentViewEvents & Pick<ContentView, "content" | "layoutView">;

export interface PlaceholderEvents {
    onCreatingView?(args: CreateViewEventData): void;
}
/* No further props on Placeholder. */
export type PlaceholderProps = ViewProps & PlaceholderEvents; // & Pick<Placeholder>
export type PageNavigationEventHandler = (args: NavigatedData) => void;
export interface PageEvents {
    onNavigatingTo?: PageNavigationEventHandler;
    onNavigatedTo?: PageNavigationEventHandler;
    onNavigatingFrom?: PageNavigationEventHandler;
    onNavigatedFrom?: PageNavigationEventHandler;
}
export type PageProps = ContentViewProps & PageEvents &
    Pick<
        Page,
        | "backgroundSpanUnderStatusBar"
        | "statusBarStyle"
        | "androidStatusBarBackground"
        | "actionBarHidden"
        | "enableSwipeBackNavigation"
    >;

export interface FrameEvents {
    onOptionSelected?: (args: EventData) => void;
}
export type FrameProps = ViewProps &
    FrameEvents &
    Pick<Frame, "actionBarVisibility" | "backStack" | "currentPage" | "currentEntry" | "animated" | "transition">;

export interface TabViewEvents {
    onSelectedIndexChanged?(args: SelectedIndexChangedEventData): void;
}
export type TabViewProps = ViewProps &
    TabViewEvents &
    Pick<
        TabView,
        | "items"
        | "selectedIndex"
        | "tabTextFontSize"
        | "tabTextColor"
        | "tabBackgroundColor"
        | "selectedTabTextColor"
        | "androidSelectedTabHighlightColor"
        // | "android"
        // | "ios"
        | "iosIconRenderingMode"
        | "androidOffscreenTabLimit"
        | "androidTabsPosition"
        | "androidSwipeEnabled"
    >;

export interface TabViewItemEvents {}
export type TabViewItemProps = ViewBaseProps &
    TabViewItemEvents &
    Pick<
        TabViewItem,
        | "title"
        // "view"| /* We provide a StackLayout and implicitly map children into it */
        | "iconSource"
        | "textTransform"
        // "canBeLoaded"
    >;

export interface ActionItemEvents {
    onTap?: (args: GestureEventData) => void;
}
export type ActionItemProps = ViewBaseProps &
    ActionItemEvents &
    Pick<
        ActionItem,
        /* android/ios are get-only, but Host Config will drill inside as necessary */
        | "ios"
        | "android"
        | "text"
        | "icon"
        // "actionView"| /* We provide a StackLayout and implicitly map children into it */
        | "visibility"
    >;

/* No extra props on NavigationButton. */
export interface NavigationButtonEvents {}
export type NavigationButtonProps = ActionItemProps & NavigationButtonEvents; // & Pick<NavigationButton>

export interface TextBaseEvents {}
export type TextBaseProps = ViewProps &
    TextBaseEvents &
    Pick<
        TextBase,
        | "text"
        | "formattedText"
        | "fontSize"
        | "letterSpacing"
        | "lineHeight"
        | "textAlignment"
        | "textDecoration"
        | "textTransform"
        | "whiteSpace"
        | "padding"
        | "paddingBottom"
        | "paddingLeft"
        | "paddingRight"
        | "paddingTop"
    >;

export interface EditableTextBaseEvents {
    onBlur?: (args: EventData) => void;
    onFocus?: (args: EventData) => void;
    onTextChange?: (args: EventData) => void;
}
export type EditableTextBaseProps = TextBaseProps &
    EditableTextBaseEvents &
    Pick<
        EditableTextBase,
        | "keyboardType"
        | "returnKeyType"
        | "updateTextTrigger"
        | "autocapitalizationType"
        | "editable"
        | "autocorrect"
        | "hint"
        | "maxLength"
    >;

export interface TextViewEvents {}
export type TextViewProps = EditableTextBaseProps & TextViewEvents; // & Pick<TextView, "android" | "ios">; /* no props to pick */
export interface TextFieldEvents {
    onReturnPress?: (args: EventData) => void;
}
export type TextFieldProps = EditableTextBaseProps &
    TextFieldEvents &
    Pick<
        TextField,
        // "android" | "ios" |
        "secure"
    >;
export interface LabelEvents {}
export type LabelProps = TextBaseProps &
    LabelEvents &
    Pick<
        Label,
        // "android" | "ios" |
        "textWrap"
    >;

export interface ContainerViewEvents {}
export type ContainerViewProps = ViewProps & ContainerViewEvents & Pick<ContainerView, "iosOverflowSafeArea">;

export interface CustomLayoutViewEvents {}
export type CustomLayoutViewProps = ContainerViewProps & CustomLayoutViewEvents;

export interface RepeaterEvents {}
export type RepeaterProps = ViewProps & Pick<Repeater, "items" | "itemTemplate" | "itemsLayout">;

export interface LayoutBaseEvents {}
export type LayoutBaseProps = CustomLayoutViewProps &
    LayoutBaseEvents &
    Pick<
        LayoutBase,
        | "padding"
        | "paddingBottom"
        | "paddingLeft"
        | "paddingRight"
        | "paddingTop"
        | "clipToBounds"
        | "isPassThroughParentEnabled"
    >;

export interface FlexboxLayoutEvents {}
export type FlexboxLayoutProps = LayoutBaseProps & FlexboxLayoutEvents &
    Pick<FlexboxLayout, "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent">;

export interface DockLayoutEvents {}
export type DockLayoutProps = LayoutBaseProps & DockLayoutEvents & Pick<DockLayout, "stretchLastChild">;

/* No props on GridLayout; just getters and setters. */
export interface GridLayoutEvents {}
export type GridLayoutProps = LayoutBaseProps & GridLayoutEvents & { rows?: ItemSpec[], columns?: ItemSpec[]; };
// & Pick<
//     GridLayout,
// >;

export interface StackLayoutEvents {}
export type StackLayoutProps = LayoutBaseProps & StackLayoutEvents & Pick<StackLayout, "orientation">;

export interface WrapLayoutEvents {}
export type WrapLayoutProps = LayoutBaseProps & WrapLayoutEvents & Pick<WrapLayout, "orientation" | "itemWidth" | "itemHeight">;

/* No props on AbsoluteLayout; just getters and setters. */
export interface AbsoluteLayoutEvents {}
export type AbsoluteLayoutProps = LayoutBaseProps & AbsoluteLayoutEvents;
//  & Pick<
//     AbsoluteLayout,
// >;

/**
 * NOTE: ListView will remain unimplemented for a while as it is unlikely to
 * be possible to make it as a primitive component.
 */
export interface ListViewEvents {
    onItemTap?: (args: ItemEventData) => void;
    onLoadMoreItems?: (args: ItemEventData) => void;
}
export type ListViewProps = ViewProps &
    Pick<
        ListView,
        // | "android"
        // | "ios"
        | "items"
        /* Replaced by cellFactory and cellFactories */
        // | "itemTemplate"
        // | "itemTemplates"
        | "itemTemplateSelector"
        | "itemIdGenerator"
        | "separatorColor"
        | "rowHeight"
        | "iosEstimatedRowHeight"
    >;

export interface HtmlViewEvents {}
export type HtmlViewProps = ViewProps & HtmlViewEvents & Pick<HtmlView, "html">;

export interface WebViewEvents {
    onUrlChange?: (args: EventData) => void;
    onLoadFinished?: (args: LoadEventData) => void;
    onLoadStarted?: (args: LoadEventData) => void;
}
export type WebViewProps = ViewProps & WebViewEvents & Pick<WebView, "src" | "canGoBack" | "canGoForward">;

export interface ActionBarEvents {}
export type ActionBarProps = LayoutBaseProps &
    ActionBarEvents &
    Pick<
        ActionBar,
        | "title"
        | "titleView"
        | "navigationButton"
        | "flat"
        | "android" /* get-only, but Host Config will drill inside as necessary */
    >;

export interface ButtonEvents {}
export type ButtonProps = TextBaseProps & ButtonEvents & Pick<Button, "textWrap">;

export interface ImageEvents {}
export type ImageProps = ViewProps &
    ImageEvents &
    Pick<
        Image,
        "imageSource" | "src" | "isLoading" | "stretch" | "loadMode" | "tintColor" | "decodeHeight" | "decodeWidth"
    >;

export interface ActivityIndicatorEvents {}
export type ActivityIndicatorProps = ViewProps & ActivityIndicatorEvents & Pick<ActivityIndicator, "busy">;

export interface DatePickerEvents {
    onDateChange?: (args: EventData) => void;
}
export type DatePickerProps = ViewProps & DatePickerEvents & Pick<DatePicker, "year" | "month" | "day" | "date" | "maxDate" | "minDate">;

export interface ListPickerEvents {
    onSelectedIndexChange?: (args: EventData) => void;
}
export type ListPickerProps = ViewProps &
    ListPickerEvents &
    Pick<
        ListPicker,
        "selectedIndex"
        // "items" /* We redefine this as (any[] | ItemsSource) */
    > & { items: any[] | ItemsSource };

export interface SwitchEvents {
    onCheckedChange?: (args: EventData) => void; // WARNING: RNS names as onToggle
}
export type SwitchProps = ViewProps & SwitchEvents & Pick<Switch, "checked">;

export interface TimePickerEvents {
    onTimeChange?: (args: EventData) => void;
}
export type TimePickerProps = ViewProps & TimePickerEvents &
    Pick<TimePicker, "hour" | "minute" | "time" | "maxHour" | "maxMinute" | "minHour" | "minMinute" | "minuteInterval">;

export interface ProgressEvents {}
export type ProgressProps = ViewProps & ProgressEvents & Pick<Progress, "value" | "maxValue">;

export interface ScrollViewEvents {
    onScroll?: (args: ScrollEventData) => void;
}
export type ScrollViewProps = ContentViewProps & 
    ScrollViewEvents &
    Pick<
        ScrollView,
        | "isScrollEnabled"
        | "verticalOffset"
        | "horizontalOffset"
        | "scrollableHeight"
        | "scrollableWidth"
        | "scrollBarIndicatorVisible"
        | "orientation"
    >;

export interface SearchBarEvents {
    onTextChange?: (args: EventData) => void;
    onSubmit?: (args: EventData) => void;
    onClose?: (args: EventData) => void;
    /* Not represented in typings, but NativeScript Vue refers to it in its docs, so we'll provide it just in case. */
    onClear?: (args: EventData) => void;
}
export type SearchBarProps = ViewProps &
    Pick<SearchBar, "text" | "hint" | "textFieldBackgroundColor" | "textFieldHintColor">;

export interface SegmentedBarEvents {
    onSelectedIndexChanged?: (args: SegmentedBarSelectedIndexChangedEventData) => void;
}
export type SegmentedBarProps = ViewProps & SegmentedBarEvents & Pick<SegmentedBar, "selectedIndex" | "selectedBackgroundColor" | "items">;

export interface SegmentedBarItemEvents {}
export type SegmentedBarItemProps = ViewBaseProps & SegmentedBarItemEvents & Pick<SegmentedBarItem, "title">;

export interface SliderEvents {
    onValueChange?: (args: EventData) => void;
}
export type SliderProps = ViewProps & SliderEvents & Pick<Slider, "value" | "minValue" | "maxValue">;

export interface FormattedStringEvents {}
export type FormattedStringProps = ViewBaseProps & FormattedStringEvents &
    Pick<
        FormattedString,
        | "spans"
        | "fontFamily"
        | "fontSize"
        | "fontStyle"
        | "fontWeight"
        | "textDecoration"
        | "color"
        | "backgroundColor"
    >;

export interface SpanEvents {}
export type SpanProps = ViewBaseProps & SpanEvents &
    Pick<
        Span,
        "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "textDecoration" | "color" | "backgroundColor" | "text"
    >;

// export type TextBaseProp<T extends TextBase> = {
//     [P in keyof T]: T[P];
// };

// export type ViewBaseProp<T extends ViewBase> = {
//     [P in keyof T]: T[P];
// };

// export type ObservableProp<T extends Observable> = {
//     [P in keyof T]: T[P];
// };
