document.querySelector("#calorieCounterCard").classList.add("widthAnimate");
setTimeout(() => {
   const item =  document.querySelectorAll(".item");
   for(let i = 0; i < item.length; i++){
       item[i].classList.add("opacityAnimate");
       item[i].style.display = "block";
   }
   
}, 2000);