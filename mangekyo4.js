"use strict";
var main = function(scr) {
	scr.loop = function(g, ts, dt, vw) {
		// 背景
		g.setColor(255, 255, 255); // R, G, B
		g.fillRect(0, 0, 1000, 1000); // x, y, width, height
		
		var time = ts % 1000; // ts: ミリ秒単位の時間 → time: ミリ秒
		
		// 10回繰り返し
		for (var i = 0; i < 10; i++) {
			var x = 400 + i * 20;
			var c = 255 - i * 20;
			// 赤い丸
			g.setColor(c, 0, 0); // R, G, B
			g.fillCircle(x, 500, 10); // x, y, r
		}
		
		// 3回繰り返し
		for (var i = 0; i < 3; i++) {
			var y = 400 + i * 30;
			// 緑の丸
			g.setColor(0, 255, 0); // R, G, B
			g.fillCircle(530, y, 20); // x, y, r
		}
		
		// 5回繰り返し
		for (var i = 0; i < 5; i++) {
			var r = 10 + i * 10;
			// 青の丸
			g.setColor(0, 0, 255); // R, G, B
			g.drawCircle(420, 450, r); // x, y, r
		}
	}
}