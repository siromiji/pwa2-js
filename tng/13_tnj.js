const apple = document.querySelector('#apple');
const gameul = document.querySelector('ul');
const jangi = document.createElement('li'); //새 요소 생성 
const amazing = document.querySelector('#ul li:last-child');


//selectorAllH1.forEach(node=>n
// 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정
jangi.textContent = "장기";
gameul.insertBefore(jangi , apple);

amazing.style.background = 'beige';

const listAll = document.querySelectorAll('#ul li');
let i =1;
listAll.forEach((element)=>{  
  if(i%2===0){
    element.style.color='red';
  }else{
    element.style.color='blue';
  }
  i++;
})

const result = {
  title: '타이틀',
  content: '내용',
  img : 'http://www.admin.com/img/post/laks.png'
};
function addCard(item){
    
  //카드 구조 만들기
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg =document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;

  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);
  document.body.appendChild(newCard);
}
