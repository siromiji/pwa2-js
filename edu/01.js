// 변수 : 변하는 데이터를 저장하기 위한 공간
var var1 = '제육';
// 백엔드에서는 사용하지 않는다. 되도록이면 지양하는 것이 좋음
let let1 = '햄버거';
const const1 = '';
// 변수의 선언과 초기화
// 선언 : 처음 선언이 된 부분 이후에는 다시 선언을 할 필요는 없음
/* 객체 지향 */
var var2
//초기화: 메모리 값 사이에 있는 내용을 처음으로 저장하는 것.
var2 = 0;
// 상수 : 최초에 대입한 값이 절대 변하지 않는 공간
const const1 = '뚝불';
//const는 기본적으로 asd라고 선언 된 변수에서 한 번 더 선언하려고 하면 error가 발생한다.
const1 = 'asd';
// name2를 선언하면서 에러 발생 시 선언하는 변수 명을 변경
let name2 = '둘리';
let name22 = '도우너';
// var를 지양해야 하는 이유
// 1. var을 중복 선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';
// 2. 작성한 코드상, 선언보다 사용을 먼저 할 경우, 오류가 발생하지않고, 접근 가능한 현상
console.log(age); // 선언 전에 호출을 하면 값이 없다는 undefined 에러 발생
var age = 20;
// 3. var는 기본적으로 함수 레벨 스코프(지역 스코프와 비슷)
// 스코프의 종류 : 전역 스코프, 지역 스코프(함수), 블록레벨 스코프
var globalVar = 'globalVar';
let globalLet = 'globalLet';
const globalConst = 'globalConst';
function test() {
    var localVar = 'globalVar';
    var localLet = 'localLet';
    const localConst = 'localConst';
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
    console.log(localVar);
    console.log(localLet);
    console.log(localConst);
}
test();
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}
console.log(blockVar); // 함수 레벨 스코프
console.log(blockLet); // 블럭 레벨 스코프
console.log(blockConst); // 블럭 레벨 스코프