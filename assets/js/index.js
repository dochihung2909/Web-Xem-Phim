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

    var html = `<div class="col l-2-4 slider-item">
    <div class="film__item">
        <a href="#" class="film__item-img-wrapped film-booking"> 
            <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" class="film__item-img">
            <div class="film__item-tag-top">
                <span class="film__item-old old-13">13+</span>
                <span class="film__item-reserve"><i class="fa-solid fa-film"></i>Đặt trước</span>
            </div>
        </a>
        <a href="" class="film__item-info">
        <p class="film__item-info-name">
            Sát thủ đối đầu
        </p>
        <div class="film__item-info-types flex">
            <p class="film__item-info-type">Hành động</p>
            <div class="lineY"></div>
            <p class="film__item-info-type">Gây cấn</p>
        </div>
    </a>
        
    </div>
</div>`;
$('.slider-film-wrapped').html("");
    for (let i = 0;i<10;i++) {
        $('.slider-film-wrapped').append(html) ;   
    }  
})

