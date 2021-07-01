import { generateValues } from "./hands-functions/handsValues.js";

export const videoElement = document.getElementById("video");
videoElement.style.transform = "scale(-1, 1)";
console.log("handsmodule");

export const handsSketch = () => {
	const hands = new Hands({
		locateFile: (file) => {
			return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
		},
	});

	const camera = new Camera(videoElement, {
		onFrame: async () => {
			await hands.send({ image: videoElement });
		},
		width: document.windowWidth,
		height: document.windowHeight,
	});
	camera.start();

	hands.setOptions({
		maxNumHands: 2,
		minDetectionConfidence: 0.8,
		minTrackingConfidence: 0.5,
		selfieMode: true,
	});
	hands.onResults((results) => generateValues(results));
	console.log("handsok");
};
