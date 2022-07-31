const ham = document.querySelector(".mobile-nav-toggle")
const menu = document.querySelector(".navbar")

ham.addEventListener("click", ()=>{
    menu.classList.toggle("visible")

})