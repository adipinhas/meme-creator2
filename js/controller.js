console.log('start')
var isMouseDown = false;
var gPrevX;
var gPrevY;


var gCanvas;
var gCtx;
function init() {
    renderImages()
    gCanvas = document.querySelector('#memeCanvas')
    gCtx = gCanvas.getContext('2d');
}

function imgToCanvas(imageId) {
    setTimeout(function(){
        selectImg(imageId)
        drawImg();
    },50)
   

}
function drawImg() {
    // debugger
    var memeImgId = getMemeImgId()
    var imgs = getImgs()
    var img = new Image()
    img.src = imgs[memeImgId].url
    img.onload = gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    img.onload=document.querySelector('.container').classList.add('display-none')
    img.onload = document.querySelector('.divcanvas').classList.remove('display-none')
    img.onload = window.scrollTo(0, 0);
    img.onload = writingOnCanvas()
    //img.onload=writingOnCanvasLower()
}
function writingOnCanvas() {

    var txts = getGmeme().txts
    gCtx.textAlign = "center";

    gCtx.fillStyle = txts[0].color
    gCtx.strokeStyle='black'
    gCtx.font = `${txts[0].size}px IMPACT`;
    gCtx.fillText(txts[0].line, txts[0].width, txts[0].height/1.7)

    gCtx.fillStyle = txts[1].color
    gCtx.font = `${txts[1].size}px IMPACT`;
    gCtx.fillText(txts[1].line, txts[1].width, txts[1].height/1.7)

}
function onSwitch() {
    switchTxt()
}
function onSetTxtMeme() {
    var inputText = document.querySelector('#inputTextUpper').value;
    setTxtMeme(inputText)
    drawImg()
}
function onSwitchLines() {
    SwitchLines()
    drawImg()
}
function onChangeColor() {

    var chosenColor = (document.querySelector('#choose-font-color').value)
    ChangeColor(chosenColor)
    drawImg()
}
// function writingOnCanvasLower(){
//     var inputText = document.querySelector('#inputTextLower').value;

//     setTxtMeme(inputText)
//     var txts = getGmeme().txts
//     gCtx.font = `${txts[1].size}px IMPACT`;
//     gCtx.textAlign = "center";

//         gCtx.fillText(txts[0].line, gCanvas.width / 2, 300)

// }


function renderImages() {
    var strHTML = ``
    var imgs = getImgs()
    for (var i = 0; i < imgs.length; i++) {
        strHTML += ` <img src="${imgs[i].url}" onclick="imgToCanvas('${i}')" alt="">`
    }
    document.querySelector('.container').innerHTML = strHTML;

}
function onIncSize() {
    IncSize()
    drawImg()
}
function onDecreaseSize() {
    DecreaseSize()
    drawImg()

}
function onSetTxtDown() {
    setTxtDown()
    drawImg()
}
function onSetTxtUp() {
    setTxtUp()
    drawImg()
}
function mouseDown() {
    console.log('boo')
    isMouseDown = true;
    
}
function mouseUp() {
    console.log('koo')
    isMouseDown = false;
}
function onMoveText(ev) {
    
    ev.preventDefault()
    if (!isMouseDown) {
        return
    }
    
    moveText(ev.offsetY,ev.offsetX)
    drawImg()
}
function changeImage(){
    document.querySelector('.container').classList.remove('display-none')
    document.querySelector('.divcanvas').classList.add('display-none')

}
function onTextUp(){
    textUp()
    drawImg()
}
function onTextDown(){
    textDown()
    drawImg()
}
