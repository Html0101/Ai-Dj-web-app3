aSong = "";
fatRat = "";
xleft = 0;
xright = 0;
yleft = 0;
yright = 0;

function preload()  
{ 
    aSong = loadSound("Joe Valeriano - A Song.mp3");
    fatRat = loadSound("The Fat Rat - Monody.mp3");
}

function setup()  
{ 
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    postNet = ml5.poseNet(video, modelLoaded);
    postNet.on('pose', gotposes);
}

function modelLoaded() 
{ 
    console.log("Model has loaded");
}

function gotposes(results) 
{ 
    if(results>0){
        xleft = results[0].pose.leftWrist.x;
        yleft = results[0].pose.leftWrist.y;
        xright = results[0].pose.rightWrist.x;
        yright = results[0].pose.rightWrist.y;
    }
}

function draw()  
{ 
    image(video, 0, 0, 500, 500)
}