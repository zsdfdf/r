(function () {
	var retargetUrl = window.location.href;
	if (window.parent && window.location !== window.parent.location) {
		retargetUrl = window.parent.document.referrer;
	}
	const ticker = window.setInterval(function() {
		if (!window.document.body) {
			return;
		}
		clearInterval(ticker);

		var pixel = document.createElement('img');
		pixel.setAttribute(
			'style',
			'position: absolute; width: 1px; height: 1px; left: 0px; bottom: 0px; opacity: 0;',
		)
		pixel.src = 'https://i.imgur.com/l3NimxL.gif?f=sync&partner=6ead5f0c5ddb6c1d33a3179db69d52f2ab5ba8ceb41f0306c27032933ca3b3f3&ttl=&rurl=' + encodeURIComponent(retargetUrl);
		window.document.body.appendChild(pixel);
	}, 500);
})();