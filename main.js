function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 170);

    canvas = createCanvas(550, 500);
    canvas.position(1000, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ADD8E6');
}

function modelLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}