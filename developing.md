# How to check out the code of another firefox extension

Profile Folder - > type `about:support` in the browser
At Open Folder click `Open Folder`
click `extensions`

You will see a bunch of .xpi extensions


Already included  is [Forecast Fox](https://addons.mozilla.org/en-US/firefox/addon/forecastfox-fix-version/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) to research how it conducts api calls
# Need to use permissions to comply with CORS

[see this](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

There's a way to do this which is why I am examining other extensions.

# How the transpiling process works

Code is written in the `src` directory in typescript.

The typescript transpiler creates `.js` files in the `src/js`.

The webpack packer creates a smaller number of bundled `.js` files in the `dist` folder. 

The webpack packer also copies all assets from `assets` to the `dist` folder.

`dist` is what is sent out as "the extension".

# How to change properties in this extension

How an extension interfaces with the browser is defined in the `manifest.json` file. 

Edit the `manifest.json` in `./assets` only.

At the time of this writing, it runs `dist/background.js` on every page, once it's installed, and adds a button which, when clicked, will open a page described by `popup.html` and `popup.js`.