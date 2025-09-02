// const url = 'https://picsum.photos/v2/list?page=1&limit=10';

const urlInput = document.querySelector("#urlInput");
const apiBtn = document.querySelector("#apiBtn");
const loadingbox = document.querySelector("#loading");

loadingbox.style.display = 'none';

apiBtn.addEventListener('click',()=>{
  loadingbox.style.display = 'block';
  const container = document.querySelector("#container");
  container.textContent = ""
  const url = urlInput.value;
  
  axios.get(url)
  .then(response=>{
    response.data.forEach((item)=> {
      const newImg = document.createElement('img');
      newImg.setAttribute('src',item?.download_url);
      const container = document.querySelector('#container');
      container.appendChild(newImg);
      loadingbox.style.display = 'none';
    });
  })
  .catch(err =>{
    console.log(err);
  });
});



