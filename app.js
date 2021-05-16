const burger = document.querySelector(".hamburger")
const sideMenu = document.querySelector(".side-menu")
const arrowBack = document.querySelector(".back")

burger.addEventListener('click', ()=>{
    sideMenu.classList.add("open");
    burger.classList.add("open")
})

arrowBack.addEventListener('click', ()=>{
    sideMenu.classList.remove("open")
    burger.classList.remove("open")
})