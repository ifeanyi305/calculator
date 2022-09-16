const burgers = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.getElementsByTagName("a") 

burgers.addEventListener('click', () =>{
    burgers.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll("a").forEach(n => n.
    addEventListener('click', () => {
        burgers.classList.remove('active');
        navMenu.classList.remove('active');
    }))
