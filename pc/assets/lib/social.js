/**
 * social.js
 * ソーシャルボタンスクリプトをまとめて管理読み込みするスクリプト
 */
window.___gcfg = {lang: 'ja'};

(function() {
	var SOCIAL_SETTING = {
        facebook: "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=ここにAPPID",
        twitter: "//platform.twitter.com/widgets.js",
        google: "//apis.google.com/js/platform.js",
        hatena: "//b.st-hatena.com/js/bookmark_button.js",
        pocket: "//widgets.getpocket.com/v1/j/btn.js?v=1"
	},key;
	
	function loadScript(id,path) {
		var js, fjs = document.getElementsByTagName('script')[0];
		if (document.getElementById(id)) {return;}
		js = document.createElement('script');
		js.id = id;
		js.async = true;
		js.src = path;
		fjs.parentNode.insertBefore(js, fjs);
	}
	for (key in SOCIAL_SETTING) {
		loadScript(key,SOCIAL_SETTING[key]);
	}
})();

