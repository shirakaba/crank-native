# Crank Native

<div align="center">
    <h1>🤖</h1>
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

See the [React NativeScript docs](https://crank-native.netlify.app). You can also read the [NativeScript Core](https://docs.nativescript.org/start/introduction) docs, which give further details about the NativeScript framework that underlies Crank Native.

## Sample app

After initialising the sample app, you'll see the following simple view, renderered by this code [`app/components/AppContainer.tsx`](https://github.com/shirakaba/tns-template-blank-crank/blob/master/app/components/AppContainer.tsx):

<table>
    <tbody>
        <tr>
            <td align="center" valign="middle">
                <img width="200px" src="/site/hello_world.png"/>
            </td>
        </tr>
    </tbody>
</table>

The code for setting styles is somewhat verbose at present, but I'll be improving these things in time.

## Try without setting up your desktop environment (like an Expo Snack)

I've hacked together an experimental [NativeScript Playground template](https://play.nativescript.org/?template=play-react&id=lwOLY2&v=1) pinned at versions `crank-native@0.6.0` and `crank@0.1.0`. You can try it out by scanning a QR code in the [NativeScript Playground](https://apps.apple.com/us/app/nativescript-playground/id1263543946?ls=1) app, which will open it in the [NativeScript Preview](https://apps.apple.com/us/app/nativescript-preview/id1264484702) app.

Be warned that the NativeScript core team **do not (yet) officially support** Crank Native, and so this NativeScript Playground boilerplate is explicitly **not** representative of the full potential of either Crank or Crank Native. Some things are very likely to be broken in it (e.g. I would be surprised if async/await and generators work, and that's most of the essence of Crank).

But at the very least, you can get a picture for the potential of the framework for now without having to set up a desktop environment.

## About Crank

> Write JSX-driven components with functions, promises and generators.
>
> Documentation is available at [https://crank.js.org](crank.js.org). Crank.js is in a beta phase, and some APIs may change. To read more about the motivations for this library, you can read the [introductory blog post](https://crank.js.org/blog/introducing-crank).

## Completed so far

All tasks for the initial roadmap are now complete!

- [x] Fill in all the renderer APIs (AKA DOM interface) using React NativeScript's Host Config;
- [x] Complete a NativeScript CLI template, [`tns-template-blank-crank`](https://github.com/shirakaba/tns-template-blank-crank), so that users can initialise apps via NativeScript CLI;
- [x] Make a sample app;
- [x] Provide typings for intrinsic elements;
- [x] ~~Implement ancestor context~~ (wasn't necessary in the end) to support LayoutBase;
- [x] Implement event handling;
- [x] Create a [NativeScript Playground template](https://play.nativescript.org/?template=play-react&id=GtKudF&v=10) (Your Mileage May Vary – this is a best-effort with various limitations until official support from the NativeScript core team comes);
- [x] Write docs!