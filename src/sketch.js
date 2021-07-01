import { hydraSketch } from "./hydra.js";
import { handsSketch } from "./hands.js";
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

export const p5Sketch = (() => {
	let sketch = function (p) {
		p.setup = function () {
			p5canvas = p.createCanvas(640, 480);
			p5canvas.id("p5canvas");
			console.log("canvascreate");
			handsSketch();
			hydraSketch();
		};

		p.draw = function () {
			p.clear();

			p.push();
			p.noStroke();
			p.fill(thumbDist, indexDist, middleDist);
			p.ellipse(
				p.map(middleMcp.x, 0, 1, 0, width),
				p.map(middleMcp.y, 0, 1, 0, height),
				sidesDist
			);
			p.pop();
		};
	};
	myp5 = new p5(sketch);
})();
