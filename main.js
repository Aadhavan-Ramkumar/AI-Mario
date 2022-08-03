function preload() {
	world_start = loadSound("world_start.wav")
	MarioJump = loadSound("jump.wav")
	MarioCoin = loadSound("coin.wav")
	MarioGameOver = loadSound("gameover.wav")
	MarioDie = loadSound("mariodie.wav")
	MarioKick = loadSound("kick.wav")
	setSprites()
	MarioAnimation()
}

function setup() {
	Canvas = createCanvas(1240, 336)
	Canvas.parent("Canvas")

	instializeInSetup(mario)

	Video = createCapture(VIDEO)
	Video.size(800, 400)
	Video.parent("GameConsole")

	PoseNet = ml5.poseNet(Video, () => {
		console.log("Model Loaded")
	})
	PoseNet.on("pose", GetPoses)
}

function GetPoses(Results) {
	if (Results.length > 0) {
		console.log(Results)
		NoseX = Results[0].pose.nose.x
		NoseY = Results[0].pose.nose.y
	}
}

function draw() {
	game()
}