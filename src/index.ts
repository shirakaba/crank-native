import { renderer } from "./ns";
import * as console from "./Logger";
import { Application, View } from "@nativescript/core";
import { Element } from "@bikeshaving/crank/cjs";

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
