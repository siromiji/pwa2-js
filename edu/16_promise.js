
//callback Hell
// setTimeout(()=>{
//   console.log('A');

//   setTimeout(()=>{
//     console.log('B');
//     setTimeout(()=>{
//       console.log('');
//     },1000)
//   },2000)

// },3000)
//promise 객체 
//비동기 처리의 결과를 제공하겠다는 약속을 반환 
//단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.
function pro1(str,ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(str ==='A' ||str ==='B'||str ==='C'){
          console.log(str);
          resolve();
        }else{
          reject();
        }
    }, ms)
  });
}

// pro1('A',3000)
// .then(()=>{
//   console.log('Then');
// })//작업이 성공
// .catch(()=>{
//  console.log('Catch') ;
// }
// )// 작업이 실패
// .finally(()=>{
//   console.log('Finally') ;
// });//성공샐패여부 상관없이 무조건 살행

// pro1('A',3000)
// .then(()=>{
//   pro1('B',2000)
//   .then(()=>{
//     pro1('C',1000)
//     .then()
//     .catch();
//   })
//   .catch();
// })

pro1('A' , 3000)
.then(()=>{
  return pro1('B',2000);
})
.then(()=>{
  return pro1('C',1000)
})
.catch();