// https://picsum.photos/v2/list?page=1&limit=10
/**
 * 플래그에 따라 로딩을 온(true일 경우)/오프(false인 경우) 
 * @param {boolean} flg 
 */
function loadingToggle(flg){
  const loading = document.querySelector('.loading');
  if(flg){
    loading.classList.add('loading-on');
  }else{
  loading.classList.remove('loading-on');
  }
}

document.querySelector('.request-box > button').addEventListener('click' , ()=>{
  loadingToggle(true);
  const url = document.querySelector('#apiUrl').value;
  const cardbox = document.querySelector('.card-box');
  cardbox.textContent= '';

  axios.get(url)
  .then(res=> {
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;


      cardbox.appendChild(newCard);
    });
  })
  .catch(err => {
    console.error(err);
  })
  .finally(()=>{
    loadingToggle(false);
  });

});


// document.querySelector('.request-box > button').addEventListener('click' , async()=>{
  
//    try{

//     const url = document.querySelector('#apiUrl').value;
//     const cardbox = document.querySelector('.card-box');
//     cardbox.textContent= '';

  
//     const res = await axios.get(url);
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;


//       cardbox.appendChild(newCard);
//     });
//   }catch (err){
//     console.error(err);
//   }
// });