// Set rank 
function setRank() {
    const ranks = document.querySelectorAll('.film__item-rank');
    for (let i = 0;i < ranks.length;i++) {
        ranks[i].innerText = i+1;
    }
} 

function slider() {
    // Slider
    var positionX = 0; 
    const slider = $('.ranking-showing__bg');
    const sliderMain = $('.ranking-showing__bg-wrapper');
    const sliderItems = $('.ranking-showing__bg-img');
    var sliderLength = sliderItems.length;
    var sliderWidthItem = sliderItems[0].offsetWidth;  
    var pre = $('.ranking__direct.pre');
    var next = $('.ranking__direct.next');
    var number = $('.ranking__number-link'); 

    $('.ranking__number-link').click(function() {
        let current = $('.ranking-active');
        current.removeClass('ranking-active');
        $(this).addClass('ranking-active');
        let curent = getPosition();  
        if (current == 0) {
            positionX = 0;
        } else {
            positionX = -(curent * sliderWidthItem);
        } 
        sliderMain.css('transform',`translateX(${positionX}px)`)
    }) 

    function getPosition() {
        let curr = $('.ranking__number-link').filter('.ranking-active'); 
        let index = curr.index('.ranking__number-link');
        return index;
    } 

    function prevSlide() {
        var pos = getPosition();     
        if (pos == 0) {
            number[0].classList.remove('ranking-active');
            number[number.length - 1].classList.add('ranking-active');
            positionX = -(sliderLength - 1)*sliderWidthItem ;
        } else {
            number[pos-1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active');
            positionX = positionX + sliderWidthItem;
        }    
        sliderMain.css('transform',`translateX(${positionX}px)`)
    }

    function nextSlide() {
        var pos = getPosition(); 
        if (pos == number.length - 1) {
            number[number.length - 1].classList.remove('ranking-active');
            number[0].classList.add('ranking-active');
            positionX = 0;
        } else {
            number[pos+1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active');
            positionX = positionX - sliderWidthItem;
        }  
        sliderMain.css('transform',`translateX(${positionX}px)`)
    }
    
    pre.click(function() { 
        prevSlide();
    })

    

    next.click(function() {
        nextSlide();
    })

    setInterval(function() {
        nextSlide();
    },4000);
}
 
$(document).ready(function() {   
    setRank(); 
    slider();

    var html = `<div class="col l-2-4 slider-item">
    <div class="film__item">
        <a href="#" class="film__item-img-wrapped film-booking"> 
            <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" class="film__item-img">
            <div class="film__item-tag-top">
                <span class="film__item-old old-13">13+</span>
                <span class="film__item-reserve"><i class="fa-solid fa-film"></i>Đặt trước</span>
            </div>
        </a>
        <a href="#" class="film__item-info">
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

    $('.film__item').click(function() {
        let filmName = $(this).find('.film__item-info-name').text();
        localStorage.filmNameLocal = filmName;
    })
})

