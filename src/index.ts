import { renderer } from "./ns";
import * as console from "./Logger";
import { Application, View, StackLayout } from "@nativescript/core";
import { Child } from "@bikeshaving/crank/cjs";

/**
 * FIXME @shirakaba: Crank is coupled to the concept that the Child is an Element,
 * and doesn't use the renderer DOM APIs.
 * 
 * @param App The container component for your app.
 */
export function start(App: Child): void {
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
            const rootView = new StackLayout();
            rootView.width = { value: 100, unit: "%" };
            rootView.height = { value: 100, unit: "%" };

            renderer.render(App, rootView);

            return rootView;
        },
    });
}