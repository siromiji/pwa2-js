//계층이 있어요
// const user = {
//   name: 'Hong',
//   age : 20,
//   friends: {
//     id: 90
//   }
// }
//얕은복사  : 최상위 계층의 요소만 독립적으로 복사, 그 외 계층은 (주소값)참조형태로 복사
const shallowCopy = {...user};
shallowCopy.age = 100;

console.log(user, shallowCopy);
//각각 데이터가 최상위데이터  독립적 복사 됨
//얕은 복사는 퇴상위데이터만 독립적으로 복사 되고 그 이하 참조형구조를 가진 객체들은 밑으로밑으로 들어간다 (원본이 손상되는 현상이 일어남 ) 이것이 shallowcopy 얕은 복사 



//--------------------------------
//딮카피 : 모든 계층의 요소를 독립적으로 복사 
const jsonCopy = JSON.parer(JSON.stringify(user));//자바스크립트 객체를 json형태로 변경 그리고 깊은 복사 
jsonCopy.friends.id=200;

console.log(user);
//기존 배열 변경안됨 (함수나 심볼은 json복사형태로는 안됨)

const cloneCopy = structuredClone(user);//이거는 노드17버전이상또는 최신 브라우저환경 아니면 버그남 


//--------------------------------------
  //destructuring 문법 (구조분해할당)
//-------------------------------------

const arr =['hong',20]

const user2 = {
  name: 'Hong',
  age:20,
  friends : {
    id:90
  }
};
const {name, age, friends} = user2;
console.log(name , friends);
// 배열이나 객체에 들어있는 값을 손쉽게 꺼내서 변수에 할당하는 문법