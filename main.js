function preload(){
}

function setup()
{
    canvas=createCanvas(640,490);
    canvas.position(120,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw()
{
    image(video,0,0,640,490);
    tint(tint_color);
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

function take_snapshot()
{
    save("Cool_Pic.png");
}