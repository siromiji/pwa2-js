

// let start= '*';
// let MakedStar = '';
// for(let i =1; i<6 ; i++ ){
//     MakedStar = '';
//    for (let z =1; z<6; z++){
//      MakedStar += start;
//    }
//    console.log(MakedStar);
// };
//  MakedStar = '';
// for(let i =1; i<6; i++){
//   MakedStar += start;
//   console.log(MakedStar);
// }
// let makedStar = '';
// for(let lineCnt = 0; lineCnt <5;lineCnt++){
//   makedStar += "*";
//   console.log(makedStar);
// }


// let test = "*";
// let space =  "\n";
// let testMaked = "";
// // test = test += concat('\n', '*');
// for(let i =1; i<6 ; i++ ){

//    for (let z=1; z<6; z++){  
//     testMaked +=test;
//    console.log(testMaked);

//    }
  
// };
let makedStar = "";
for(let lineCnt = 5; lineCnt > 0; lineCnt--){
  makedStar += '*';
  let makedSpace = '';
  for(let spaceCnt = 1 ; spaceCnt < lineCnt; spaceCnt      ++){
    makedSpace += ' ';
  }
  console.log(makedSpace+makedStar);
}