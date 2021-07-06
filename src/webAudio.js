export let audioCtx, gainNode, filterNode, noiseLoop;

export const webAudio = () => {
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	const noiseElement = document.getElementById("noiseElement");

	noiseLoop = audioCtx.createMediaElementSource(noiseElement);

	gainNode = audioCtx.createGain();

	filterNode = audioCtx.createBiquadFilter();

	noiseLoop.connect(gainNode);
	gainNode.connect(filterNode);
	filterNode.connect(audioCtx.destination);

	gainNode.gain.value = 1;
	console.log(audioCtx);

	document.getElementById("hydracanvas").addEventListener("click", () => {
		audioCtx.resume();
		noiseElement.play();
	});
};

export function filterFrequency(value) {
	filterNode.frequency.value = value;
}
