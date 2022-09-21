
manifest.json has these permissions: 
```json
	"permissions": [
		"activeTab",
		"tabs",
		"background",
		"storage",
		"webRequest",
		"webRequestBlocking", 
		"<all_urls>"
	]
```
    
manifest.json sets background to an html page

```json
	"background": {
		"page": "content/background.html"
	},
```

that page imports all the other scripts
```html
<script type="text/javascript" src="/content/background.js" charset="utf-8"></script>
		<script type="text/javascript" src="/content/utils.js" charset="utf-8"></script>
		<script type="text/javascript" src="/content/prefs.js" charset="utf-8"></script>
```

background.js builds an `s3object` for api request

```
var s3forecast = {};
s3forecast.location_default = {"name":"New York, NY, USA","code":"cityId:349727","current":true,"rotate":true,"latlng":{"lat":40.7127837,"lng":-74.00594130000002}};
s3forecast.rotate_tiimer = null;
s3forecast.update_tiimer = null;
s3forecast.update_timer_value = 1000*60*30;
s3forecast.last_render = null;
s3forecast.radar_image_list = {};
s3forecast.last_data = {}
```

its methods are
```
init
set_content_scripts
process_forecast
request_forecast_data
get_last_data
down_last_data
del_last_data_location
get_location_current
set_location_current
set_location
delete_location
rename_location
rotate_location
render_forecast
render_forecastbar
```
Most promising is s3forecast.request_forecast_data

That method builds some request info then calls

`s3forecast.adapter.fetch_feed_data`

Fetch is what we need to do

```javascript
	s3forecast.adapter.fetch_feed_data(location.code, 'cc', function(result_cc) {
		if (result_cc.resolve) {
			forecast.cc = result_cc.resolve;
		} else {
			forecast.connect_error = true;
		}
		//------------------------------------------------------------------
		s3forecast.adapter.fetch_feed_data(location.code, 'forecast', function(result_forecast) {
```

What's strange is the object initialization.

What's happening is that one global object called s3forecast adapter is being declared in background.js. Then each of the other scripts that `content.html` attaches new functions and data onto that object.

Some of the functions defined in `background.js` actually reference things on `s3forecast` that are defined in other files.

`adapter` is defined in `content/accuweather-adapter.js`

The adapter object holds various URLs and methods.

It has the following methods

```
find_location
find_location2
find_location_lating
find_location_lating_alternative
find_location_location
change_url
normalize_alt_url
normalize_forecast_data
set_translate
normalize_url_list
request_2_url
fetch_feed_data
```

Several of those look interesting but I think we need fetch_feed_data


Will continue research soon



