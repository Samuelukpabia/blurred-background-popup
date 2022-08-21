const backgroundEl = document.querySelector(".background");
const joinEl = document.querySelector(".btn");
const popupEl = document.querySelector(".popup-window");
const timesIconEl = document.querySelector(".fas");


joinEl.addEventListener("click", ()=>{
    backgroundEl.classList.add("active");
    popupEl.classList.remove("active")
})

timesIconEl.addEventListener("click", ()=>{
    backgroundEl.classList.remove("active");
    popupEl.classList.add("active")
})