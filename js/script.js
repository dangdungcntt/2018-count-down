var canvas = document.getElementById("canvastext"), ctx = canvas.getContext("2d"), W = window.innerWidth, H = window.innerHeight, text = "2018", text2 = "Chúc Mừng Năm Mới", skipCount = 4, gravity = .2, touched = !1, mouse = {}, minDist = 20, bounceFactor = .6; canvas.height = H; canvas.width = W; function trackPos(a) { mouse.x = a.pageX; mouse.y = a.pageY }
	var Particle1 = function () { this.r = 6 * Math.random(); this.y = this.x = -100; this.vy = -5 + parseInt(10 * Math.random()); this.vx = -5 + parseInt(10 * Math.random()); this.isFree = !1; this.a = Math.random(); this.draw = function () { ctx.beginPath(); ctx.fillStyle = "rgba(255, 223, 0, " + this.a + ")"; ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1); ctx.fill(); ctx.closePath() }; this.setPos = function (a, d) { this.x = a; this.y = d } }, particles1 = [];
	(function () { ctx.fillStyle = "black"; ctx.font = "100px Arial, sans-serif"; ctx.textAlign = "center"; ctx.fillText(text, W / 2, H / 3); ctx.fillStyle = "#29a1f1"; ctx.font = "70px Arial, sans-serif"; ctx.fillText(text2, W / 2, H / 3 + 100) })(); (function () { })(); (function () { for (var a = ctx.getImageData(0, 0, W, W), d = a.data, b = 0; b < a.height; b += skipCount)for (var c = 0; c < a.width; c += skipCount)255 == d[c * a.width * 4 + 4 * b - 1] && (particles1.push(new Particle1), particles1[particles1.length - 1].setPos(b, c)) })(); function clear() { ctx.clearRect(0, 0, W, H) }
	function update1() {		
clear(); for (i = 0; i < particles1.length; i++) {
			var a = particles1[i]; a.r += .15; a.a -= .015; 0 > a.a && (a.r = 6 * Math.random(), a.a = Math.random()); mouse.x > a.x - a.r && mouse.x < a.x + a.r && mouse.y > a.y - a.r && mouse.y < a.y + a.r && (touched = !0); 1 == touched && (Math.sqrt((a.x - mouse.x) * (a.x - mouse.x) + (a.y - mouse.y) * (a.y - mouse.y)) <= minDist && (a.isFree = !0), 1 == a.isFree && (a.y += a.vy, a.x += a.vx, a.vy += gravity, a.y + a.r > H && (a.vy *= -bounceFactor, a.y = H - a.r, a.vx = 0 < a.vx ? a.vx - .1 : a.vx + .1), a.x + a.r > W && (a.vx *= -bounceFactor, a.x = W - a.r), 0 > a.x - a.r &&
				(a.vx *= -bounceFactor, a.x = a.r))); ctx.globalCompositeOperation = "lighter"; a.draw()
		}
	} (function animloop() { requestAnimFrame(animloop); update1() })();