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
    var memeImgId = getMemeImgId()
    var imgs = getImgs()
    var img = new Image()
    img.src = imgs[memeImgId].url
    img.onload = gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    img.onload=document.querySelector('.container').classList.add('display-none')
    img.onload = document.querySelector('.divcanvas').classList.remove('display-none')
    img.onload = window.scrollTo(0, 0);
    img.onload = writingOnCanvas()
    img.onload= drawRect()
   
    //img.onload=writingOnCanvasLower()
}
function writingOnCanvas() {

    var txts = getGmeme().txts
    gCtx.textAlign = "center";
    for(var i=0;i<txts.length;i++){
        gCtx.fillStyle = txts[i].color
        gCtx.font = `${txts[i].size}px ${txts[i].font}`;
        gCtx.strokeStyle=txts[i].outLineColor
        gCtx.fillText(txts[i].line, txts[i].width, txts[i].height/1.7)
        gCtx.strokeText(txts[i].line, txts[i].width, txts[i].height/1.7)
    }
}
function drawRect(){
    gCtx.beginPath();
    gCtx.rect(0, (getGmeme().txts[getSelectedTxtId()].height-40)/1.7, gCanvas.width,30 );
    gCtx.stroke();
}
function onSwitch() {
    switchTxt()
    drawImg()
    
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
function onDeleteLine(){
    deleteLine()
    drawImg()
}
function onAddLine(){
    addLine()
    drawImg()
}
function onSelectFont(){
    selectFont(document.querySelector('.select-font').value)
    drawImg()
}
function onDownloadMeme(){
    var imageToDowload =gCanvas.toDataURL('image/png').replace('image/png','image/octet-stream')
    window.location.href=imageToDowload
}
function onOutlineColor(){
    outLineColor()
    var chosenColor = (document.querySelector('#choose-out-line').value)
    outLineColor(chosenColor)
    drawImg()

    
}

