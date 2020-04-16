# Crank Native

<p align="center">
    <a href="https://badge.fury.io/js/crank-native"><img src="https://badge.fury.io/js/crank-native.svg" alt="npm version" height="18"></a>
    <a href="https://opensource.org/licenses/mit-license.php">
        <img src="https://badges.frapsoft.com/os/mit/mit.png?v=103"/>
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=LinguaBrowse">
        <img src="https://img.shields.io/twitter/follow/LinguaBrowse.svg?style=social&logo=twitter"/>
    </a>
</p>

A [`crank.js`](https://github.com/bikeshaving/crank) custom renderer for iOS and Android apps, based on NativeScript. Allows you to write native apps using Crank.

This renderer is under construction, and not ready for use yet! Find out more by contacting [@LinguaBrowse](https://twitter.com/LinguaBrowse) on Twitter.

## Description of Crank

> Write JSX-driven components with functions, promises and generators.
>
> Documentation is available at [https://crank.js.org](crank.js.org). Crank.js is in a beta phase, and some APIs may change. To read more about the motivations for this library, you can read the [introductory blog post](https://crank.js.org/blog/introducing-crank).

## Completed so far

- [x] Filled in all the renderer APIs using React NativeScript's Host Config
- [x] Have started filling in a NativeScript CLI template, [`tns-template-blank-crank`](https://github.com/shirakaba/tns-template-blank-crank) (access may be private until it's functional)

## Roadmap 🛣

* Complete the DOM interface for NativeScript (this may involve throwing away some/all of the renderer work), or change the core to make more use of the renderer APIs;
* Make a sample app;
* Complete `tns-template-blank-crank` so that users can initialise apps via NativeScript CLI;
* Provide typings for intrinsic elements;
* Implement event handling;
* Create a NativeScript Playground template;
* Write docs;