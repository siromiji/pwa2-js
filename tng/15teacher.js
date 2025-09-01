nowTimeintoElement('#nowTime')



//기록 버튼 
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', ()=>{
  // const now = new Date();
  // let milli = now.getMilliseconds().toString().padStart(2,'0');
  const container = document.querySelector('.reportConteiner');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMiliseconds();
  // newP.textContent = `${generateNowTimeFormat()}:${milli}`;
  // newP.textContent = document.querySelector('#nowTime').textContent;
  container.appendChild(newP);
});

//기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click',()=>{
  document.querySelector(".reportConteiner").textContent='';
})



///--------------------이하 함수 

/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeintoElement(selector){
  const nowTime = document.querySelector(selector);
  nowTime.textContent = generateNowTimeFormat();
}

 /**
  * 현재시간을 `오전 hh:mm:SS` 형식으로 반환
  * @returns {string}
  */
function generateNowTimeFormat(){
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let ampm = '';
if(hours < 12){
  ampm = '오전';
}else{
  ampm = '오후';
  hours -= 12;
}



return `${ampm} ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환
  * @returns {string}
 */
function generateNowTimeFormatUntilMiliseconds(){
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let getMilliseconds = now.getMilliseconds();

let ampm = '';
if(hours < 12){
  ampm = '오전';
}else{
  ampm = '오후';
  hours -= 12;
}



return `${ampm}`+
` ${hours.toString().padStart(2,'0')}:`+
`${minutes.toString().padStart(2,'0')}:`+
`${seconds.toString().padStart(2,'0')}.`+
`${getMilliseconds.toString().padStart().padStart(3,'0')}`;
}

let intervalNowTime = setInterval(()=>{
nowTimeintoElement('#nowTime');
},1000);

//멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click',()=>{
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

//재시작 버튼 처리 
const btnRestrart = document.querySelector('#btnRestart');
btnRestrart.addEventListener('click',()=>{
  nowTimeintoElement('#nowTime');
  
  if(intervalNowTime ===null){
    intervalNowTime = setInterval(()=>{
    nowTimeintoElement('#nowTime');
  },1000)
  }
  
})