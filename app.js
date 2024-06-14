function increment(id){
    if(document.getElementById(id).innerText != 0){document.getElementById(id).innerHTML=parseInt(document.getElementById(id).innerText)-1;}
    else{
      document.getElementById(id).innerHTML=0;
    }
      }

const selectEl = document.querySelector('.navbar')
window.addEventListener('scroll' , function (){
  if(this.window.scrollY>200){
    selectEl.classList.add('navbar-scrolled');
  }else if(this.window.scrollY<100){
   selectEl.classList.remove('navbar-scrolled');
  }
})

function showHide(id,drop){
  const targetEl = document.getElementById(id)
  const icon = document.getElementById(drop)
  if(targetEl.style.display !== "none"){
    targetEl.style.display = "none"
    icon.classList.remove('rotate-icon')
  }else {
    targetEl.style.display ="block"
    icon.classList.add('rotate-icon')
  }
}