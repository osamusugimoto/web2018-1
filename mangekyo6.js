"use strict";
var main = function(scr) {
	scr.loop = function(g, ts, dt, vw) {
		// 背景
		g.setColor(255, 255, 255); // R, G, B
		g.fillRect(0, 0, 1000, 1000); // x, y, width, height
		
		var time = ts % 1000; // ts: ミリ秒単位の時間 → time: ミリ秒
		
		var f1 = function(x) {
			return rnd(x);
		};
		var f2 = function(x) {
			return Math.sin(x / 1000 * Math.PI * 2) * 500 + 500;
		};
		var f3 = function(x) {
			return x;
		};
		
		// 赤い丸
		g.setColor(255, 0, 0); // R, G, B
		g.fillCircle(f1(time), 500, 10); // x, y, r
		
		// 緑の丸
		g.setColor(0, 255, 0); // R, G, B
		g.fillCircle(530, f2(time), 20); // x, y, r
		
		// 青の丸
		g.setColor(0, 0, 255); // R, G, B
		g.drawCircle(420, 450, f3(time)); // x, y, r
	}
}