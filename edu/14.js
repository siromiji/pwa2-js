//이벤트
function test(){
  alert("테스트");
}

//property Listener프로퍼티 리스너 
//동일한 이벤트 여러번 사용 불가 
const btn2 = document.querySelector('#btn2');
btn2.onclick = () =>{
  alert('버튼 222')
}
//addEventLisntener


const btn3 = document.querySelector("#btn3");
btn3.addEventListener('clivk', () =>{
  alert('버튼');
})
btn3.addEventListener('click', btn3Alert)
function btn3Alert(event){
  console.log(event)
  alert('eee');

}
window.addEventListener('scroll',()=>{
  console.log('scroll test');
})

//removeEventListener() : 이벤트 제거
// btn2.removeEventListener('click' , btn3Alert);

//-----------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
})


//------비밀번호 보이기기능-------
//체크박스 접근
const chkPw =document.querySelector('#seePw');
//체크박스에 체인지 이벤트 추가 
chkPw.addEventListener('change',(e)=>{
  //인풋 패스워드 접근
  const pw = document.querySelector('#pw');

  //체크여부 확인 분기
  if(e.target.checked){
    //인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type','text');
  }else{
    //인풋 패스워드  type속성 passwoed로 변경
    pw.setAttribute('type','password');
  }
});
