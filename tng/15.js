function addTime(){
  let date = new Date()
let hour12 = date.getHours();
let hour = date.getHours().toString().padStart(2,'0');
let ampm = document.querySelector('#ampm');

 if(hour12 >= 12){
    ampm.textContent = '오후';
    if(hour12 >12){
      let time12 = hour12 - 12;
      hour = time12.toString().padStart(2,'0');
    }
 }else{
    ampm.textContent = '오전';
 }

let min = date.getMinutes().toString().padStart(2,'0');
let sec = date.getSeconds().toString().padStart(2,'0');

const hourspan = document.querySelector('#hour');
const minspan = document.querySelector('#min');
const secspan = document.querySelector('#sec');

hourspan.textContent = hour;
minspan.textContent = min;
secspan.textContent = sec;
};
let clock = setInterval(addTime,1000);
const stopBtn = document.querySelector("#stop");
const restartBtn = document.querySelector("#restart");


stopBtn.addEventListener('click',()=>{
  clearInterval(clock);
});
  


restartBtn.addEventListener('click',()=>{
  clock = setInterval(addTime,1000);
});