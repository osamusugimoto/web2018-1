"use strict"; 
var main = function(scr) {
	scr.loop = function(g, ts, dt, vw) {
		// 背景
		g.setColor(255, 255, 255); // R, G, B
		g.fillRect(0, 0, 1000, 1000); // x, y, width, height
		
		// 赤い丸
		g.setColor(255, 0, 0); // R, G, B
		g.fillCircle(500, 500, 40); // x, y, r
		
		// 緑の丸
		g.setColor(0, 255, 0); // R, G, B
		g.fillCircle(530, 520, 20); // x, y, r
		
		// 青の四角
		g.setColor(0, 0, 255); // R, G, B
		g.fillRect(420, 450, 50, 50); // x, y, w, h
	}
}