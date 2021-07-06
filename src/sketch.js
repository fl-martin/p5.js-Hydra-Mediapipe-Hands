import { hydraSketch } from "./hydra.js";
import { handsSketch } from "./hands.js";
import { webAudio, filterFrequency } from "./webAudio.js";
import {
	thumbDist,
	indexDist,
	middleDist,
	middleMcp,
	sidesDist,
	vectorSidesDist,
	sideA,
	sideB,
} from "./hands-functions/handsValues.js";

export let p5canvas;
export let myp5;
let x = 1;
let y = 1;
let size = 1;
const easing = 0.05;

export const p5Sketch = (() => {
	let sketch = function (p) {
		p.setup = function () {
			p5canvas = p.createCanvas(1280, 720);
			p5canvas.id("p5canvas");
			console.log("canvascreate");
			handsSketch();
			hydraSketch();
			webAudio();
		};

		p.draw = function () {
			p.clear();

			p.push();
			p.noStroke();
			p.fill(thumbDist, indexDist, middleDist);
			let targetX = p.map(middleMcp.x, 0, 1, 0, width);
			let dx = targetX - x;
			x += dx * easing;

			let targetY = p.map(middleMcp.y, 0, 1, 0, height);
			let dy = targetY - y;
			y += dy * easing;

			let targetSize = sidesDist;
			let dsize = targetSize - size;
			size += dsize * (easing * 2);

			p.ellipse(x, y, size);
			p.pop();

			filterFrequency(
				p.map(sidesDist, width / 30, width, 80, 20000, true)
			);
		};
	};
	myp5 = new p5(sketch);
})();
