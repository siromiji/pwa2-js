

// let score =70;

// if(scoreNum === 100){
//   score='A+';
// }else if(100 > scoreNum && scoreNum>= 90){
//   score='A';
// }else if(80 <= scoreNum && scoreNum < 90){
//   score= 'B';
// }else if(70 <= scoreNum && scoreNum < 80){
//   score = 'C';
// }else if(60 <= scoreNum && scoreNum < 70){
//   score = 'D';
// }else{
//   score = 'F';
// }
// console.log("당신의 점수는"+ score +"점 입니다.");

let score = 100;
let grade = 'F';

if(score > 100 || score < 0){
  console.log('잘못된 값입니다.')
}else {
if(score === 100){
  grade = 'A+';
}else if (score >= 90){
  grade = 'A';
}else if (score >= 80){
  grade = 'B';
}else if (score >= 70){
  grade = 'C';
}else if (score >= 60){
  grade = 'D';
}else{
  grade = 'F';
}


// console.log('당신의 점수는 ' + score +'점입니다.<'+grade+'>');
console.log(`당신의 점수는 ${score}점입니다.<${grade}>`);
}
