const textInput = document.querySelector("#textInput");
const textBtn = document.querySelector("#textBtn");
const textWrap = document.querySelector("#textwrap"); 
let textline = false;





textBtn.addEventListener('click',()=>{

  addList();
  
})
textInput.addEventListener('keypress',(e)=>{

  if(e.key ==='Enter'){
    addList();
  }
  
})

function addList(){
        const text = textInput.value.trim() ;
    if (text !== "") {
      const newText = document.createElement("li");
      newText.textContent = text;

      textWrap.appendChild(newText);
      textInput.value="";  
    }
    

    
}
textWrap.addEventListener('click',(e) =>{
  if(textline === false){
    e.target.style.textDecoration = 'line-through'
    textline = true;
  }else{
    e.target.style.textDecoration = 'none'
    textline = false;

  }
  
  
})