var canvas = new fabric.Canvas("canvas")
var playerX = 10
var playerY = 10
var blockwidth = 30
var blockheight = 30
var playerobject
var blockobject

function player() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(150)

        playerobject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerobject)
    })
}

function block(blockname) {
    fabric.Image.fromURL(blockname, function (Img) {
        blockobject = Img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)

        blockobject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blockobject)
    })
}

window.addEventListener("keydown", kd)

function kd(e) {
    keypress = e.keyCode
    console.log(keypress)
if (e.shiftKey == true && keypress == "66") {
    //shift+b
    blockwidth += 5
    blockheight += 5
    document.getElementById("CW").innerHTML = blockwidth
    document.getElementById("CH").innerHTML = blockheight
}

if (e.shiftKey == true && keypress == "68") {
    //shift+d
    blockwidth -= 5
    blockheight -= 5
    document.getElementById("CW").innerHTML = blockwidth
    document.getElementById("CH").innerHTML = blockheight
}

if (keypress == "38") {         
    up()
}

if (keypress == "40") {
    down()
}

if (keypress == "39") {
    right()
}

if (keypress == "37") {
    left()
}

if (keypress == "67") {
    //c
    block("captain_america_left_hand.png")
}
if (keypress == "84") {
    //t
    block("thor_right_hand.png")
}
if (keypress == "83") {
    //s
    block("spiderman_body.png")
}
if (keypress == "72") {
    //h
    block("hulk_legs.png")
}
if (keypress == "73") {
    //i
    block("ironman_face.png")
}
if (keypress == "8"||keypress == "46") {
    //backspace or delete
    var selection = canvas.getActiveObject()
    if(selection.type == "activeSelection"){
        selection.forEachObject(function(bl){
            canvas.remove(bl)
        })
    }
    else {
        canvas.remove(selection)
    }
    canvas.discardActiveObject()
}   
}
function up(){
    if(playerY >= 0){
        playerY = playerY - 10
        canvas.remove(playerobject)
        player()
    }
}
function down(){
    if(playerY <= 295){
        playerY = playerY + 10
        canvas.remove(playerobject)
        player()
    }
}
function right(){
    if(playerX <= 680){
        playerX = playerX + 10
        canvas.remove(playerobject)
        player()
    }
}
function left(){
    if(playerX >= 0){
        playerX = playerX - 10
        canvas.remove(playerobject)
        player()
    }
}