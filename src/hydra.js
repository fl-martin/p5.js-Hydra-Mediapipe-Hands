import { videoElement } from "./hands.js";

export const hydraSketch = () => {
	const c = document.createElement("canvas");
	c.id = "hydracanvas";
	c.width = 640;
	c.height = 480;
	document.body.appendChild(c); //HYDRA on top if uncomment

	const hydra = new Hydra({ detectAudio: false, canvas: c, autoLoop: true });

	videoElement.addEventListener("playing", function () {
		s0.init({ src: videoElement });
	});
	const p5dDisplay = document.getElementById("p5canvas");
	s1.init({ src: p5dDisplay });

	src(o0)
		.modulate(osc(1, 2, 1), 0.003)
		.colorama(0.01)
		.blend(src(s1), 0.1)
		.out(o0);
};
