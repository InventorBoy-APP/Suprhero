var canvas= new fabric.Canvas("myCanvas") 


hero_x=100;
hero_y=100;

body_image_width=30;
body_image_height=30;

var hero_object="";
var body_image_object="";
function player_update(){
    fabric.Image.fromURL("images.jpg",function(Img){
        hero_object=Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(150);
        hero_object.set({
            top:hero_y,left:hero_x
        });
        canvas.add(hero_object);
    });
}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        body_image_object=Img;
        body_image_object.scaleToWidth(body_image_width);
        body_image_object.scaleToHeight(body_image_height);
        body_image_object.set({
            top:hero_y,left:hero_x
        });
        canvas.add(body_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(e.shiftKey==true &&keypressed=='80'){
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    console.log("When Shift + P Is Pressed")
}
if(e.shiftKey==true &&keypressed=='77'){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    console.log("When Shift + M Is Pressed")
}

if(keypressed=='76'){
    new_image('legs_spiderman.jpg');
    console.log("l");
}
if(keypressed=='84'){
    new_image('hulk_torso.png');
    console.log("t");
}
if(keypressed=='70'){
    new_image('thor_face.jpg');
    console.log("f");
}
if(keypressed=='82'){
    new_image('hulk_right_arm.jpg');
    console.log("r");
}
if(keypressed=='65'){
    new_image('hulk_left_arm.png');
    console.log("a");
}
if(keypressed=='73'){
    new_image('torso_iron_man.png');
    console.log("i");
}
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='37'){
    right();
    console.log("right");
}
}

