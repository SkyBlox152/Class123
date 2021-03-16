diffrence=0;
nosex=0;
nosey=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(550,200);
    video=createCapture(VIDEO);
    video.size(500,500);

    PoseNet=ml5.poseNet(video,model_loaded)
    PoseNet.on('pose',gotresult)
 }
 
 function draw(){
     background(51);
     fill(255,255,255);
     stroke("yellow")
     square(nosex,nosey,diffrence);
 }

 function model_loaded(){
     console.log("Model has loaded")
 }

function gotresult(result){
if(result.length>0){ 
    console.log(result)
   nosex=result[0].pose.nose.x;
   nosey=result[0].pose.nose.y;
   
   diffrence=floor(nosex-nosey);

   document.getElementById("f1").innerHTML="Width And Height of a Square will be ="+diffrence+"px";
}
}

