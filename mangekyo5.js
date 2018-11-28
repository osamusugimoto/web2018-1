"use strict";
var main = function(scr) {
	scr.loop = function(g, ts, dt, vw) {
		// 背景
		g.setColor(255, 255, 255); // R, G, B
		g.fillRect(0, 0, 1000, 1000); // x, y, width, height
		
		// 赤い丸
		var redCircle = function() {
			g.setColor(255, 0, 0); // R, G, B
			g.fillCircle(500, 500, 10); // x, y, r
		};
		// 緑の丸
		var greenCircle = function(x, y) {
			g.setColor(0, 255, 0); // R, G, B
			g.fillCircle(x, y, 20); // x, y, r
		};
		// 青の丸
		var blueCircle = function(r) {
			g.setColor(0, 0, 255); // R, G, B
			g.drawCircle(420, 450, r); // x, y, r
		};
		
		redCircle();
		greenCircle(400, 500);
		greenCircle(440, 500);
		blueCircle(10);
		blueCircle(50);
	}
}