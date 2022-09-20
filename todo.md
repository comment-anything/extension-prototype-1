## manifest.json

check [match pattern](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)




# What permissions do we need

https://extensionworkshop.com/documentation/develop/request-the-right-permissions/



Haven't tested with our own back end yet


# Typescript

Typescript + Webpack can compile the extension for us

The polyfill for other browsers will work with that stack too

Will be simple to include many typescript files for different classes; they will compile via webpack and polyfills into 1 super compatbile file

We can use webpack to move our manifest JSON into place and "build" the browser extension

We can use testing frameworks to unit test before and instead of having build and test the extension in firefox