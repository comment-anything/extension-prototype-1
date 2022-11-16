Prototype/Proof of Concept

Mozilla Extension

# Installing and using

Clone this repo

Run `npm i` to install dependencies

Run `tsc` or `npx tsc` to transpile to javascript, in the intermdiate `js` folder

Run `webpack` or `npx webpack` to pack it in the final `dist` folder

# Run the debug/test page.

Run `npm run test-page` to open the test page in your default browser.

If that isn't configured, open the .html file located in `dist/test.html` manually.

# Installing Extension on Firefox for testing

In firefox

Open `about:debugging`

Click `This Firefox`

Click `Load Temporary Add-on`

Select manifest.json in your extensions directory.


