import { View, ViewBase, TextBase, Span } from "@nativescript/core";

// export type Type = TNSElements | React.JSXElementConstructor<any>;
export type Props = any;
export type Container = View; // The root node of the app. Typically Frame, but View is more flexible.
/* Of which only LayoutBase|ContentView can take child Views (e.g. TextBase can't, but CAN take child texts; and there are special cases like ActionBar). */
export type Instance = ViewBase;
export type TextInstance = TextBase | Span;
export type HydratableInstance = any;
export type PublicInstance = any;
export type HostContext = {
    isInAParentText: boolean;
    isInAParentSpan: boolean;
    isInAParentFormattedString: boolean;
    isInADockLayout: boolean;
    isInAGridLayout: boolean;
    isInAnAbsoluteLayout: boolean;
    isInAFlexboxLayout: boolean;
};
export type InstanceCreator<T extends Instance = Instance> = (
    props?: Props,
    rootContainerInstance?: Container,
    hostContext?: HostContext
) => T;
