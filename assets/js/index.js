// Set rank

const ranks = document.querySelectorAll('.film__item-rank');
for (let i = 0;i < ranks.length;i++) {
    ranks[i].innerText = i+1;
}


// Change film
const showing = document.querySelector('#now-showing');
const willShowing = document.querySelector('#will-showing');
const nowFilm = document.querySelectorAll('.slider-tittle__link');
 
function changeTitle(nowFilm) {
    for (const film of nowFilm) {
        film.addEventListener('click',function() {
            const current = document.querySelector('.active-show');
            current.classList.remove('active-show');
            this.classList.add('active-show'); 
        })
    } 
}

changeTitle(nowFilm);

// Change Blog
const nowBlog = document.querySelectorAll('.blog-news');
changeTitle(nowBlog);

// Slider
window.addEventListener('load', function() {
    const slider = document.querySelector('.slider-film-wrapped');
    const nextSlide = document.querySelector('.slider-next');
    const preSlide = document.querySelector('.slider-pre');
    const sliderItems = document.querySelectorAll('.slider-item');
    const widthItem = document.querySelector('.slider-item').offsetWidth;

    nextSlide.addEventListener('click',() => {
        slider.style.transform = "translateX(" + (-widthItem) +  "px)";
    })

    preSlide.addEventListener('click',() => {
        slider.style.transform = "translateX(" + widthItem + "px)";
    })

}) 