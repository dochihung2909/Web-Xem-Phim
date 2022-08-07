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
// window.addEventListener('load', function() {
//     const slider = document.querySelector('.slider-film-wrapped');
//     const nextSlide = document.querySelector('.slider-next');
//     const preSlide = document.querySelector('.slider-pre');
//     const sliderItems = document.querySelectorAll('.slider-item');
//     const widthItem = document.querySelector('.slider-item').offsetWidth;

//     nextSlide.addEventListener('click',() => {
//         slider.style.transform = "translateX(" + (-widthItem) +  "px)";
//     })

//     preSlide.addEventListener('click',() => {
//         slider.style.transform = "translateX(" + widthItem + "px)";
//     })

// })  

// Set active rank
function setActiveRank() {
    $('.ranking__number-link').click(function() {
        let current = $('.ranking-active');
        current.removeClass('ranking-active');
        $(this).addClass('ranking-active');
    })
}

$(document).ready(function() {    
    setActiveRank();  


    // Slider
    const slider = $('.ranking-showing__bg');
    const sliderMain = $('.ranking-showing__bg-wrapper');
    const sliderItems = $('.ranking-showing__bg-img');
    var sliderLength = sliderItems.length;
    var sliderWidthItem = sliderItems[0].offsetWidth;
    sliderMain.css('width',`${sliderLength * sliderWidthItem}`);


    let pre = $('.ranking__direct.pre');
    let next = $('.ranking__direct.next');
    var number = $('.ranking__number-link');
    function getPosition() {
        let curr = number.filter('.ranking-active');
        let index = curr.index('.ranking__number-link');
        return index;
    }
    pre.click(function() { 
        var pos = getPosition();
        if (pos == 0) {
            number[0].classList.remove('ranking-active');
            number[number.length - 1].classList.add('ranking-active');
        } else {
            number[pos-1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active');
        }   
    })

    next.click(function() {
        var pos = getPosition();
        if (pos == number.length - 1) {
            number[number.length - 1].classList.remove('ranking-active');
            number[0].classList.add('ranking-active');
            
        } else {
            number[pos+1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active');
        }  
    })


    

})

