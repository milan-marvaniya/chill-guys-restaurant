/* SAFE UI ENHANCEMENTS */

function animateCards(){
  document.querySelectorAll(".menu-item").forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.animation="fadeUp .6s ease forwards";
  });
}

const oldLoadCategory = window.loadCategory;
if(oldLoadCategory){
  window.loadCategory = function(cat,btn){
    oldLoadCategory(cat,btn);
    setTimeout(animateCards,60);
  };
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fadeUp{
  from{opacity:0;transform:translateY(30px)}
  to{opacity:1;transform:translateY(0)}
}`;
document.head.appendChild(style);
