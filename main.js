noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage("https://i.postimg.cc/G3Djbpct/clown-nose.png");
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0); 
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 45, 45)
}
function takeSnapshot() {
    save('filterimage.png'); 
}

function modelLoaded() {
    console.log("posenet is initalized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 20;
        console.log("nose x: "+ results[0].pose.nose.x + ", nose y: " + results[0].pose.nose.y);
    }
}