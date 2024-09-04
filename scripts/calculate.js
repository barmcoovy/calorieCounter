const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", (e) => {
  const age = document.querySelector("#age").value;
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const activity = document.querySelector("#activity").value;
  const male = document.querySelector("#male").checked;
  const female = document.querySelector("#female").checked;
  const item = document.querySelectorAll(".item");
  const calorieCounterCard = document.querySelector("#calorieCounterCard");

  const loadingContainer = document.querySelector("#loadingContainer");
  e.preventDefault();
  
  let result = 0;
  if (male) {
    result = parseInt(
      (9.99 * weight + 6.25 * height - 4.92 * age + 5) * activity
    );
  } else if (female) {
    result = parseInt(
      (9.99 * weight + 6.25 * height - 4.92 * age - 161) * activity
    );
  }
    setTimeout(()=>{
      for(let i =0; i <item.length;i++){
        item[i].classList.add("opacityAnimateDown");
      }
    },1000)
    setTimeout(() => {
      calorieCounterCard.classList.add("heightDown");
    }, 2000);

    setTimeout(loadingBar,3000);
    setTimeout(()=>{
      loadingContainer.classList.add("opacityAnimateDown");
      calorieCounterCard.classList.add("heightUp");
      setTimeout(()=>{
        showResult(result);
      },5000)
    },8000)

});



function loadingBar(){
  const loadingBar = document.querySelector("#loadingBar");
  const loadingBarValue = document.querySelector("#loadingBarValue");
  const loadingBarText = document.querySelector("#loadingBarText");


  loadingContainer.style.display = "block";
  loadingBar.classList.add("opacityAnimate");
  loadingBarText.classList.add("opacityAnimate");
  loadingBarValue.classList.add("widthUp");
}
function showResult(result){
    const resultBox = document.querySelector("#result");
    resultBox.style.display = "block";
    resultBox.classList.add("opacityAnimate");
    resultBox.innerText = `You should consume: ${result} kcal`
}