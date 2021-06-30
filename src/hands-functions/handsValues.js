// USE WITH MEDIAPIPE HANDS AND YOUR RIGHT HAND :)

import { myp5 } from "../sketch.js";

let wrist = { x: "", y: "" },
	thumbCmc,
	thumbTip,
	indexMcp,
	indexTip,
	middlePip,
	middleMcp = { x: "", y: "" },
	middleTip,
	pinkyMcp,
	wristPoint,
	sideA,
	sideB,
	thumbDist = 0,
	indexDist = 0,
	middleDist = 0,
	sidesDist = 10,
	thumbBase,
	vectorThumbTip,
	vectorIndexMcp,
	vectorIndexTip,
	vectorMiddlePip,
	vectorMiddleMcp,
	vectorMiddleTip,
	rHandIndex;

const generateValues = (detections) => {
	//CHECKING IF RIGHT HAND DETECTED  (falta consistencia, algunos calculos se hacen aca y otros en p5)
	if (detections.multiHandedness == undefined) return;
	else if (
		detections.multiHandedness.length == 1 &&
		detections.multiHandedness[0].label == "Left"
	)
		return;
	detections.multiHandedness.length == 1
		? (rHandIndex = 0)
		: (rHandIndex = 1);
	//SELECTING RIGHT HAND
	const Rhand = detections.multiHandLandmarks[rHandIndex];
	//ASSIGNING CENTER PALM, THUMB TIP, INDEX TIP AND MIDDLE TIP LANDMARKS
	wrist = Rhand[0];
	thumbCmc = Rhand[1];
	thumbTip = Rhand[4];
	indexMcp = Rhand[5];
	indexTip = Rhand[8];
	middleMcp = Rhand[9];
	middlePip = Rhand[10];
	middleTip = Rhand[12];

	pinkyMcp = Rhand[17];
	//CREATING VECTORS FROM THE SELECTED LANDMARKS
	wristPoint = myp5.createVector(wrist.x, wrist.y);
	vectorThumbTip = myp5.createVector(thumbTip.x, thumbTip.y);
	thumbBase = myp5.createVector(thumbCmc.x, thumbCmc.y);
	vectorIndexMcp = myp5.createVector(indexMcp.x, indexMcp.y);
	vectorIndexTip = myp5.createVector(indexTip.x, indexTip.y);
	vectorMiddleMcp = myp5.createVector(middleMcp.x, middleMcp.y);
	vectorMiddlePip = myp5.createVector(middlePip.x, middlePip.y);
	vectorMiddleTip = myp5.createVector(middleTip.x, middleTip.y);
	sideA = myp5.createVector(indexMcp.x, indexMcp.y);
	sideB = myp5.createVector(pinkyMcp.x, pinkyMcp.y);
	//USING DIST FROM FINGER TIPS TO CENTER PALM TO GENERATE RGB AND SIZE VALUES, SMOOTHING TRANSITION WITH LERP
	thumbDist = myp5.lerp(
		thumbDist,
		myp5.map(vectorThumbTip.dist(vectorMiddleMcp), 0.005, 0.39, 0, 255),
		0.2
	);
	indexDist = myp5.lerp(
		indexDist,
		myp5.map(vectorIndexTip.dist(vectorIndexMcp), 0.002, 0.4, 0, 255),
		0.2
	);
	middleDist = myp5.lerp(
		middleDist,
		myp5.map(vectorMiddleTip.dist(vectorMiddleMcp), 0.006, 0.54, 0, 255),
		0.2
	);
	sidesDist = myp5.lerp(
		sidesDist,
		myp5.map(sideA.dist(sideB), 0, 0.5, 0, 1500),
		0.2
	);
};

export {
	wrist,
	thumbDist,
	indexDist,
	middleDist,
	middleMcp,
	sidesDist,
	generateValues,
};
