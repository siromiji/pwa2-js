//Date 객체
//로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작

//Date 인스턴스 

const now = new Date();
const date1 = new Date('1990-02-23 14:30:00');
const date2 = new Date(1980, 10, 10, 23, 0, 1);
const date3 = new Date(48948654652);

//.getFullYear(); :연도 획득
const nowYear = now.getFullYear();
console.log(nowYear);

//getMonth() : 월 획득, (**주의** 0~11로 반환)
const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

//getDate() : 일 획득
const nowDate = now.getDate();
console.log(nowDate);

//getHours() : 시를 반환
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 분을 반환 
const nowMinutes = now.getMinutes();
console.log(now)

//getSeconds() : 초를 반화
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

//getMilliseconds() : 밀리초를 반환 
const  nowMill = now.getMilliseconds();

//getDay() :요일을 반환 (**주의** 0~6 반환, 0 =일요일)
const nowDay = now.getDay();
console.log(nowDay);

//요일 한글로 변환
let koreanDay = ' ';
switch(nowDay){
  case 0:
    koreanDay = '일요일';
    break;
  case 1:
    koreanDay = '월요일';
    break
  case 2:
    koreanDay =  '화요일';
    break
  case 3:
    koreanDay = '수요일';
  case 4:
    koreanDay = '목요일';
  case 5:
    koreanDay = '금요일';
  case 6:
    koreanDay = '토요일';

}


// xxx년 xx월 xx일 xx:xx:xx 금요일
const nowFormat = `${nowYear}년 ${lpad(nowMonth,2,0)}월 ${lpad(nowDate,2,0)}일 ${lpad(nowHours,2,0)}:${lpad(nowMinutes,2,0)}:${lpad(nowSeconds,2,0)} ${koreanDay} `
console.log(nowFormat);

function lpad(origin, length,fillStr){

  if(typeof(origin)==='number'){
    origin = origin.toString();
  }
  return origin.padStart(length,fillStr);

}
// 두 날짜의 차를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(targetDate - now) / (1000 * 60 *60 *24));
//일단위 1000 * 60 *60 *24
console.log(diff);
