"use strict";
var main = function(scr) {
	scr.loop = function(g, ts, dt, vw) {
		// 背景
		g.setColor(255, 255, 255); // R, G, B
		g.fillRect(0, 0, 1000, 1000); // x, y, width, height
		
		var time = ts % 1000; // ts: ミリ秒単位の時間 → time: ミリ秒
		
		// 赤い丸
		g.setColor(255, 0, 0); // R, G, B
		g.fillCircle(time, 500, 40); // x, y, r
		
		// 緑の丸
		g.setColor(0, 255, 0); // R, G, B
		g.fillCircle(530, time, 20); // x, y, r
		
		// 青の四角
//		var x = 420 + rnd(10); // ランダム 10未満の正数 0-9 を返す
    var x = 420 + Math.floor( Math.random() * 10 );
		g.setColor(0, 0, 255); // R, G, B
		g.fillRect(x, 450, 50, 50); // x, y, w, h
	}
}