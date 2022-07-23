
// Scroll

window.addEventListener('scroll', function () { 
    const header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 80);
})


window.addEventListener('scroll', function () { 
    const header = document.querySelector('.back-to-top');
    header.classList.toggle("top", window.scrollY > 120);
})