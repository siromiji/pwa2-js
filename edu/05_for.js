//For 문
// for(let i = 0;i<5;i++){
//   console.log(i);
//   if(i >= 3){
//     break;

//   }
// }

// for(let i = 1; i < 5; i++){
  
//   if(i === 3){
//     continue;
//   }
//   console.log(i);
// }


//다중 루프 
// for(let i = 0 ; i < 3; i++){
//   console.log(`바깥쪽 루프 : ${i}번쩨`);
//   for(let a = 0 ; a < 3; a++){
//   console.log(`안쪽 루프 : ${a}번쩨`);
//   } 
// }

//구구단 2단
// let =2;
// for(let i = 1; i <= 9; i++){
//   console.log(`${dan} X ${i}=${2*1}`);  
// }

let maxDan = 15;
for(let dan =2;dan <= maxDan; dan++){
  console.log(`** ${dan}단**`);
  for(let multiPlier=1; multiPlier <=9;multiPlier++){
    console.log(`${dan} X ${multiPlier} =${dan * multiPlier}`);
  }
}