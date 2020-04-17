import { AbsoluteLayout, ActionBar, ActionItem, NavigationButton, ActivityIndicator, Animation, Button, Color, ContentView, DatePicker, DockLayout, EditableTextBase, FlexboxLayout, Frame, GridLayout, HtmlView, Image, Label, LayoutBase, ListPicker, ListView, Observable, Page, Placeholder, Progress, ProxyViewContainer, Repeater, ScrollView, SearchBar, SegmentedBar, SegmentedBarItem, Slider, StackLayout, Style, Switch, TabView, TabViewItem, TextBase, TextField, TextView, TimePicker, Transition, View, ViewBase, WebView, WrapLayout, Span, FormattedString } from "@nativescript/core";
import { InstanceCreator } from "./HostConfigTypes";
import * as console from "../Logger";

// https://stackoverflow.com/questions/36886082/abstract-constructor-type-in-typescript
export type ConcreteViewConstructor = new (...args: any[]) => View | ViewBase;
export type ConcreteArglessViewConstructor = new () => View | ViewBase;

export type TNSElements = keyof typeof elementMap;
interface ElementMap {
    [jsxTag: string]: InstanceCreator;
}
export const elementMap: ElementMap = {
    actionBar: () => new ActionBar(),
    actionItem: () => new ActionItem(),
    activityIndicator: () => new ActivityIndicator(),
    button: () => new Button(),
    contentView: () => new ContentView(),
    datePicker: () => new DatePicker(),
    formattedString: () => new FormattedString(),
    span: () => new Span(),
    htmlView: () => new HtmlView(),
    image: () => new Image(),
    label: () => new Label(),
    absoluteLayout: () => new AbsoluteLayout(),
    dockLayout: () => new DockLayout(),
    flexboxLayout: () => new FlexboxLayout(),
    gridLayout: () => new GridLayout(),
    stackLayout: () => new StackLayout(),
    wrapLayout: () => new WrapLayout(),
    listPicker: () => new ListPicker(),
    listView: () => new ListView(),
    navigationButton: () => new NavigationButton(),
    placeholder: () => new Placeholder(),
    progress: () => new Progress(),
    proxyViewContainer: () => new ProxyViewContainer(),
    scrollView: () => new ScrollView(),
    searchBar: () => new SearchBar(),
    segmentedBar: () => new SegmentedBar(),
    segmentedBarItem: () => new SegmentedBarItem(),
    slider: () => new Slider(),
    switch: () => new Switch(),
    tabView: () => new TabView(),
    tabViewItem: () => new TabViewItem(),
    textView: () => new TextView(),
    textField: () => new TextField(),
    timePicker: () => new TimePicker(),
    webView: () => new WebView(),
    frame: () => new Frame(),
    page: () => new Page(),
};

export function register(key: string, instanceCreator: InstanceCreator): void {
    const incumbent = elementMap[key];
    if (incumbent) {
        // No-op; registration may simply happen as a side-effect each time the module is imported.
        return;
    } else {
        elementMap[key] = instanceCreator;
    }
}

export {
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Animation,
    Button,
    Color,
    ContentView,
    DatePicker,
    DockLayout,
    EditableTextBase,
    FlexboxLayout,
    Frame,
    GridLayout,
    HtmlView,
    Image,
    Label,
    LayoutBase,
    ListPicker,
    ListView,
    NavigationButton,
    Observable,
    Page,
    Placeholder,
    Progress,
    ProxyViewContainer,
    Repeater,
    ScrollView,
    SearchBar,
    SegmentedBar,
    Slider,
    StackLayout,
    Switch,
    Style,
    TabView,
    TabViewItem,
    TextBase,
    TextField,
    TextView,
    TimePicker,
    Transition,
    View,
    ViewBase,
    WebView,
    WrapLayout,
};
