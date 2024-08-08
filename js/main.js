'use strict'
//JS Progress Bar
const progressBar=document.querySelector('.progress_bar')
let scrollNum = 0;
let documentHeight = 0;
window.addEventListener('scroll',function (){
  const getPercent=(scroll,total)=>{
    return(scroll/total)*100;
  }
  window.addEventListener('scroll',()=>{
    scrollNum=document.documentElement.scrollTop;
    documentHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    progressBar.style.width=getPercent(scrollNum,documentHeight)+'%'
  })
})

//JS Popup Screen
function clickshow(elem,ID) {
  let menu = document.getElementById(ID);
  if (elem.className !== 'click') {
    elem.className = 'click';
    menu.style.display = "none";
  }
  else {
    elem.className = 'opened';
    menu.style.display = "block";
  }
}

// JS Right Click and Drag isn't  allowed
document.oncontextmenu = function(){
  window.alert('Right click is not allowed on this page')
  return false;
}
document.onselectstart= function(){
  return false;
}
