
var gImgs = [{ id: 0, url: 'img/1.jpg', keywords: ['happy'] },
            { id: 1, url: 'img/2.jpg', keywords: ['happy'] },
            { id: 2, url: 'img/3.jpg', keywords: ['happy'] },
            { id: 3, url: 'img/4.jpg', keywords: ['happy']},
            { id: 3, url: 'img/5.jpg', keywords: ['happy']},
            { id: 3, url: 'img/6.jpg', keywords: ['happy']},
            { id: 3, url: 'img/7.jpg', keywords: ['happy']},
            { id: 3, url: 'img/8.jpg', keywords: ['happy']},
            { id: 3, url: 'img/9.jpg', keywords: ['happy']},
            { id: 3, url: 'img/10.jpg', keywords: ['happy']},
            { id: 3, url: 'img/11.jpg', keywords: ['happy']},
            { id: 3, url: 'img/12.jpg', keywords: ['happy']},
            { id: 3, url: 'img/13.jpg', keywords: ['happy']},
            { id: 3, url: 'img/14.jpg', keywords: ['happy']},
            { id: 3, url: 'img/15.jpg', keywords: ['happy']},
            { id: 3, url: 'img/16.jpg', keywords: ['happy']},
            { id: 3, url: 'img/17.jpg', keywords: ['happy']},
            { id: 3, url: 'img/18.jpg', keywords: ['happy']},
            { id: 3, url: 'img/19.jpg', keywords: ['happy']},
            { id: 3, url: 'img/20.jpg', keywords: ['happy']},
            { id: 3, url: 'img/21.jpg', keywords: ['happy']},
            { id: 3, url: 'img/22.jpg', keywords: ['happy']},
            { id: 3, url: 'img/23.jpg', keywords: ['happy']},
            { id: 3, url: 'img/24.jpg', keywords: ['happy']},
            { id: 3, url: 'img/25.jpg', keywords: ['happy']}];
var gMeme = {
    selectedImgId: 5, selectedTxtIdx: 0,

    txts: [{
        line: 'I never eat Falafel',
        size: 26, align: 'left',
        color: 'red',
        height :30,
        width:150
        
    },
    {
        line: 'I never eat Falafel',
        size: 26, align: 'left',
        color: 'white',
        height:130,
        width:150
    }
    ]
}
var TxtUpOrDown;

function getImgs(){
    return gImgs;
}
function getMemeImgId(){
    return gMeme.selectedImgId;
}
function getGmeme(){
    return gMeme;
}
function setTxtMeme(inputText){
    gMeme.txts[gMeme.selectedTxtIdx].line=inputText
}
function selectImg(imgId){
    gMeme.selectedImgId=imgId
}
function imgToCanvas() {
    console.log('img')
}
function IncSize(){
    
    gMeme.txts[gMeme.selectedTxtIdx].size+=4
}
function DecreaseSize(){
    gMeme.txts[gMeme.selectedTxtIdx].size-=4
}
function setTxtDown(){
    TxtUpOrDown='down'
}
function setTxtUp(){
    TxtUpOrDown ='up'
}
function getTxtUpOrDown(){
    return TxtUpOrDown
}
function switchTxt(){
    gMeme.selectedTxtIdx=1-gMeme.selectedTxtIdx
}
function getGNumTxt(){
    return gMeme.selectedTxtIdx
}
function SwitchLines(){
    var temp= gMeme.txts[0]
    gMeme.txts[0]=gMeme.txts[1]
    gMeme.txts[1]=temp;
    gMeme.txts[0].height=50
    gMeme.txts[1].height=300
}
function ChangeColor(chosenColor){
    gMeme.txts[gMeme.selectedTxtIdx].color=chosenColor

}
function moveText(Y,X){
    gMeme.txts[gMeme.selectedTxtIdx].height=Y
    gMeme.txts[gMeme.selectedTxtIdx].width=X
}
function textUp(){
    gMeme.txts[gMeme.selectedTxtIdx].height-=4
}
function textDown(){
    gMeme.txts[gMeme.selectedTxtIdx].height+=4
}