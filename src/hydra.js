import { videoElement } from "./hands.js";
import { vectorSidesDist } from "./hands-functions/handsValues.js";

export const hydraSketch = () => {
	const c = document.createElement("canvas");
	c.id = "hydracanvas";
	c.width = 1280;
	c.height = 720;
	document.body.appendChild(c); //HYDRA on top if uncomment

	const hydra = new Hydra({ detectAudio: false, canvas: c, autoLoop: true });

	videoElement.addEventListener("playing", function () {
		s0.init({ src: videoElement });
	});
	const p5dDisplay = document.getElementById("p5canvas");
	s1.init({ src: p5dDisplay });
	fps = 100;
	src(o0)
		.modulate(osc(1, 2, 1), 0.003)
		.colorama(0.01) //o 0.02
		.scale(1.01)
		.blend(src(s1), 0.1)
		.out(o0);

	src(o1)
		.modulate(osc(1, 2, 1), 0.003)
		//.pixelate(50, 50)
		.blend(src(s0).scale(1, -1), 0.3)
		.modulate(src(o0), () => vectorSidesDist)
		//.blend(src(s1), 0.3)
		.out(o1);

	src(o1).layer(o0).out(o3);

	render(o3);
};
