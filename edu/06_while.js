let cnt = 0;

while(true){
console.log(cnt);
cnt++;
  //   console.log('while문 시작');

  if(cnt >=3){
    break;
  }
  
//   console.log('while문 끝');
}

//구구단 2단만
// let i =0;
// while(true){
//   i++;
//   let result = 2*i;
//   console.log(`2 X ${i} = ${result}`);
//   if(i>8){
//     break;
//   }

// }

//do-while문
let multiPlier =1
do{
  console.log(`2 X ${multiPlier} = ${2 * multiPlier}`);

  multiPlier++;
}while(multiPlier < 10);