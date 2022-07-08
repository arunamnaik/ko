noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(600,150);
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    document.getElementById("square_side").innerHTML= "Width and height of the square ="+difference+"px"
    fill("#5c0600");
    stroke("#1c0200");
    square(noseX,noseY,difference)
}

function modalLoaded(){
    console.log("Posenet is initiallized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY ="+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("leftWristX ="+leftWristX+"rightWristX"+rightWristX+"difference"+difference);
    }
}
