s3forecast.header = {};
 
//------------------------------------------------------------------------------
s3forecast.addon = {
	version : '0',
	old_version : '0',
	donateURL: 'http://www.s3blog.org/addon-contribute/forecastfox-fix-version.html'
};
//------------------------------------------------------------------------------
s3forecast.header.init = function() {
	s3forecast.prefs.init(s3forecast.addon.get_version);
}
//------------------------------------------------------------------------------
s3forecast.addon.get_version = function() {
	var manifest = chrome.runtime.getManifest();
	s3forecast.addon.version = manifest.version;
	if ((manifest.version != '') && (manifest.version != '0')) {
		setTimeout(function() { s3forecast.addon.checkPrefs(); }, 2000);
	}
}
//------------------------------------------------------------------------------
s3forecast.addon.addonDonate = function() {
	var donateURL = s3forecast.addon.donateURL + '?v=' + s3forecast.addon.version + '-' + s3forecast.addon.old_version;
	chrome.tabs.create({ url: donateURL, active: true },
		function(tab) {
			// if the browser starts a long time, then instead of creating the tab, there will be an error
			if (chrome.runtime.lastError) {
				setTimeout(function() { s3forecast.addon.addonDonate(); }, 2000);
			}
		}
	);
}
//------------------------------------------------------------------------------
s3forecast.addon.checkPrefs = function() {
	var old_version = s3forecast.utils.prefs_get("current_version");
	s3forecast.addon.old_version = old_version;
	var not_open_contribute_page = s3forecast.utils.prefs_get("not_open_contribute_page");
	var current_day = Math.ceil((new Date()).getTime() / (1000*60*60*24));
	var is_set_timer = false;
	var show_page_timer =  s3forecast.utils.prefs_get("show_page_timer");

	//----------------------------------------------------------------------
	if (s3forecast.addon.version != old_version) {
		s3forecast.utils.prefs_set("current_version", s3forecast.addon.version);
		var result = ((old_version == '') || (old_version == '0')) ? false : true;
		//--------------------------------------------------------------
		if (result) {
			if (! not_open_contribute_page) {
				is_set_timer = true;
				if ((show_page_timer + 5) < current_day) {
					s3forecast.addon.addonDonate();
				}
			}
		}
	}
	//----------------------------------------------------------------------
	if (s3forecast.addon.version == old_version) {
		if (show_page_timer > 0) {
			show_page_timer -= Math.floor(Math.random() * 15);
			if ((show_page_timer + 60) < current_day) {
				if (! not_open_contribute_page) {
					is_set_timer = true;
					s3forecast.addon.addonDonate();
				}
			}
		} else {
			is_set_timer = true;
		}
	}
	//----------------------------------------------------------------------
	if (is_set_timer) {
		s3forecast.utils.prefs_set("show_page_timer", current_day);
	}
}
//-----------------------------------------------------------------------------
setTimeout(function() { s3forecast.header.init(); }, 1000);
