let Addbutton=document.querySelector("#Btn_Add")
let textDom=document.querySelector("#task")
let UlDom=document.querySelector("#list")
let ToastDom=document.querySelector("#Toast")
Addbutton.addEventListener("click",AddItem)


var myNodeList=document.getElementsByTagName("li")
  for(var i=0;i<myNodeList.length;i++){
    var span=document.createElement("span")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    myNodeList[i].appendChild(span)
  }
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  

  

function AddItem(){
  if(textDom.value===""){
      
          $(".error").toast("show");
  }else{
    let LiDom=document.createElement("li")
  LiDom.innerText=textDom.value
  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  LiDom.appendChild(span);
  UlDom.appendChild(LiDom)
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  }

  var list = document.querySelector('ul');
  list.addEventListener('click',function(ev){
    if(ev.target.tagName === 'LI'){
      ev.target.classList.toggle('checked');
    }
  },false)

  
        $(".success").toast("show");
 
  
}

