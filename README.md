# Crank Native

<div align="center">
    <h1>🔧🤖</h1>
    <p><em>There is no logo yet</em></p>
</div>

<p align="center">
    <a href="https://badge.fury.io/js/crank-native"><img src="https://badge.fury.io/js/crank-native.svg" alt="npm version" height="18"></a>
    <a href="https://opensource.org/licenses/mit-license.php">
        <img src="https://badges.frapsoft.com/os/mit/mit.png?v=103"/>
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=LinguaBrowse">
        <img src="https://img.shields.io/twitter/follow/LinguaBrowse.svg?style=social&logo=twitter"/>
    </a>
</p>

Crank Native is a [`crank.js`](https://github.com/bikeshaving/crank) custom renderer for apps hosted on iOS and Android, based on NativeScript. In other words, it's a library that allows you to write native mobile apps using Crank.

## Setup

```sh
# Make sure that you have `tns` (the NativeScript CLI) installed:
#   https://docs.nativescript.org/start/quick-setup

tns create myApp --template tns-template-blank-crank

cd myApp
npm install

tns preview --no-hmr
# or
tns run ios --no-hmr
# or
tns run android --no-hmr

# And to debug in Google Chrome:
tns debug ios --no-hmr --debug-brk
```

## Documentation

Nothing yet. It's based on React NativeScript, so you can read the [React NativeScript docs](https://react-nativescript.netlify.com/) for now. You can also read the [NativeScript Core](https://docs.nativescript.org/start/introduction) docs, which are equally applicable.

The main difference from React NativeScript is that, while RNS component names have the format `<$ContentView>` (they are class components), Crank Native elements have the format `<contentView>` (they are JSX intrinsic elements).


## Sample code

After initialising the sample app, you'll see the following simple component in `app/components/AppContainer.tsx`:

<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <img width="200px" src="/site/hello_world.png"/>
            </td>
        </tr>
    </tbody>
</table>

The code for that is:

```tsx
/** @jsx createElement */
import { createElement } from "@bikeshaving/crank/cjs/index";
import { Color } from "@nativescript/core";

export default function Greeting({ name = "World" }) {
    return (
        <contentView
            backgroundColor={new Color("yellow")}
            width={{ value: 100, unit: "%" }}
            height={{ value: 100, unit: "%" }}
        >
            <label fontSize={48} paddingLeft={16}>Hello {name}</label>
        </contentView>
    );
}
```

It's rather verbose at present, but I'll be improving these things in time.

## About Crank

> Write JSX-driven components with functions, promises and generators.
>
> Documentation is available at [https://crank.js.org](crank.js.org). Crank.js is in a beta phase, and some APIs may change. To read more about the motivations for this library, you can read the [introductory blog post](https://crank.js.org/blog/introducing-crank).

## Completed so far

- [x] Filled in all the renderer APIs (AKA DOM interface) using React NativeScript's Host Config;
- [x] Have completed a NativeScript CLI template, [`tns-template-blank-crank`](https://github.com/shirakaba/tns-template-blank-crank), so that users can initialise apps via NativeScript CLI;
- [x] Make a sample app;
- [x] Provide typings for intrinsic elements;
- [x] ~~Implement ancestor context~~ (wasn't necessary in the end) to support LayoutBase;
- [x] Implement event handling;

## Roadmap 🛣

* Create a NativeScript Playground template;
* Write docs;