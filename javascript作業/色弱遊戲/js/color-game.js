//進入畫面
let homePage = document.querySelector('.home-page');
let startBtn = document.querySelector('.start-btn');
let continueBtn = document.querySelector('.continue-btn');

//進入遊戲
let showCounter = document.querySelector('.time-counter')
let playGame = document.querySelector('.play-game');
let stopBtn = document.querySelector('.stop-btn');
let exitBtn = document.querySelector('.exit-btn');

//計時器
let counterInterval;
const totalTime = 10;
let counter;

//遊戲畫面
let boxBig = document.querySelector('.box-big');
let level = 2;
let size = 100 / level;
let count = 0;
game();

//計時器
myStartBtn();
myStopBtn();
myContinueBtn();
myExitBtn();

function myStartBtn (){
    startBtn.addEventListener('click', () =>{
        //先清空時間
        counter = totalTime;
        showCounter.innerHTML = counter;
        homePage.classList.add('hidden');
        playGame.classList.add('show');
        counter = totalTime;
        //開始計時
        counterInterval = setInterval(counterTimer, 1000)
    })
}
function myStopBtn(){
    stopBtn.addEventListener('click', () =>{
        homePage.classList.remove('hidden');
        playGame.classList.remove('show');
        continueBtn.classList.add('show');
        startBtn.classList.add('hidden');
        //停止計時
        counterStop();
    })
}
function myContinueBtn(){
    continueBtn.addEventListener('click', () =>{
        homePage.classList.add('hidden');
        playGame.classList.add('show');
        //開始計時
        counterInterval = setInterval(counterTimer, 1000)
    })
}
function myExitBtn(){
    exitBtn.addEventListener('click', () =>{
        homePage.classList.remove('hidden');
        playGame.classList.remove('show');
        continueBtn.classList.remove('show');
        startBtn.classList.remove('hidden');
        //停止計時
        counterStop();
        location.reload();
    })
}


// 獲得新時間並顯示
function counterTimer() {
    if (counter >= 0) {
        showCounter.innerHTML = counter--;
    }else{
        alert('時間到');
        counterStop();
        location.reload();
    }
}
// 停止計時
function counterStop() {
    clearInterval(counterInterval);
} 

function game() {
    boxBig.innerHTML = '';
    
    let color =
        `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1})`;

    for (let i = 0; i < level ** 2; i++) {
       
        boxBig.innerHTML +=
            `<div class="box" style="width:${size}%; height:${size}%; background-color:${color};">`;
    }
    let randomAnswer = Math.floor(Math.random() * level ** 2) + 1;
    let answerBox = document.querySelector(`.box-big .box:nth-of-type(${randomAnswer})`);

    answerBox.classList.add("answer");

    answerBox.style.opacity = `${0.5 - level*0.005}`;

    let answerBtn = document.querySelector('.answer');
    answerBtn.addEventListener('click', function () {
        count++;
        if (count === level) {
            level++;
            size = 100 / level;
            count = 0;
        }
        game();
    });
}




