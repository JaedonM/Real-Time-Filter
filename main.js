nose_x = 0
nose_y = 0


img = ""

function preload(){

img = loadImage("clown_nose.png")

}


function setup(){
canvas = createCanvas(640, 480)
canvas.position(625,200)
video = createCapture(VIDEO)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x - 50 ;
        nose_y = results[0].pose.nose.y - 70;
    }

}


function modelLoaded(){
    console.log("posNet Intialiazed")
}

function draw(){
image(video, 0, 0, 640,480)

image(img, nose_x, nose_y, 100,100)

}

function saveSnap(){
    save("image.png")
}