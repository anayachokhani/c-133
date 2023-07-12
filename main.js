function setup(){
    canvas=createCanvas(640, 500);
    canvas.center();   
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
console.log("model loaded");
StatUS = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}

img="";

StatUS="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    if(StatUS!=""){
        for(i = 0;i < objects.length;i++){
            document.getElementById("status").innerHTML = "status: Objects detected";
            fill("#8E704D");
            percent = floor(objects[i].confidence * 100);
            textSize(35);
            text(objects [i].label + " " + percent + "%", objects [i].x + 30, objects [i].y + 30);
            noFill();
            stroke("lightbrown");
            rect(objects [i].x, objects [i].y, objects [i].width, objects [i].height); 
        }
    }
}

objects = [];