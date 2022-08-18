// Clear all localStorage
localStorage.clear();

// Set rank 
function setRank() {
    const ranks = document.querySelectorAll('.film__item-rank');
    for (let i = 0;i < ranks.length;i++) {
        ranks[i].innerText = i+1;
    }
} 

function slider() {
    // Slider   
    const sliderItems = $('.ranking-showing__bg-img');
    var sliderLength = sliderItems.length; 
    var pre = $('.ranking__direct.pre');
    var next = $('.ranking__direct.next');
    var number = $('.ranking__number-link'); 

    // Src ảnh logo
    var srcItems = [
        'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/image_title-a5d678326f1e-1655971698046-JtsDdAZ5.png?v=0',
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorlat_lob_log_def_04.png',
        './assets/img/slider3.png',
        'https://www.bullettrainmovie.com/images/date_portrait.png',
        'https://images.fanart.tv/fanart/dc-league-of-super-pets-61a4eb178cfe8.png'
    ];

    // Alt ảnh logo
    var altItems = [
        'Thám Tử Lừng Danh Conan: Nàng Dâu Halloween',
        'Thor: Tình yêu và sấm sét',
        'Dân chơi không sợ con rơi',
        'Sát thủ đối đầu',
        'Siêu thú DC'
    ]

    // lấy ảnh logo
    var imageItem = $('.ranking__infor-name');

    // iframe trailer
    var trailerItems = [
        'https://www.youtube.com/watch?v=V6qby0eZzlA',
        'https://www.youtube.com/watch?v=UBgPypHGAqE',
        'https://www.youtube.com/watch?v=2BOCZ5ax5qk',
        'https://www.youtube.com/watch?v=fiEG-Y9vB00',
        'https://www.youtube.com/watch?v=L2umMe5uRnk'
    ]

    // Lấy thẻ a
    let trailerItem = $('.ranking-trailer .film-trailer-item');
    trailerItem.click(myStop);
    addAtr(0);
    // Slider 1 on top 
    sliderItems[0].style.cssText = `  
        opacity:1;
    `;

    // Xoá thêm Active ở ranking
    $('.ranking__number-link').click(function() {
        // Lấy vị trí cũ để xoá thuộc tính
        let passActive = getPosition();
        let current = $('.ranking-active');
        current.removeClass('ranking-active');
        $(this).addClass('ranking-active');
        // Lấy vị trí mới thêm thuộc tính vào
        let nowActive = getPosition();   
        sliderItems[nowActive].style.cssText = `
            animation: fadeIn 0.5s ease-out; 
            opacity:1;
        `; 
        sliderItems[passActive].style.cssText = `  
            opacity:0;
        `;  
        imageItem.attr({
            src : srcItems[nowActive],
            alt : altItems[nowActive]   
        }); 
        trailerItem.attr({
            onclick : `viewTrailerJs('${trailerItems[nowActive]}')`
        })
        myStop();
    }) 

    // Lấy vị trí active
    function getPosition() {
        let curr = $('.ranking__number-link').filter('.ranking-active'); 
        let index = curr.index('.ranking__number-link');
        return index;
    } 

    // Slider trước
    function prevSlide() {
        var pos = getPosition();      
        if (pos == 0) {
            number[0].classList.remove('ranking-active');
            number[number.length - 1].classList.add('ranking-active'); 
            sliderItems[sliderLength - 1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[0].style.cssText = `  
                opacity:0;
            `;
        } else {
            number[pos-1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active'); 
            sliderItems[pos - 1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[pos].style.cssText = `  
                opacity:0;
            `;
        }      
        pos = getPosition();
        addAtr(pos);
    }

    // Slide sau
    function nextSlide() {
        var pos = getPosition();  
        if (pos == number.length - 1) {
            number[number.length - 1].classList.remove('ranking-active');
            number[0].classList.add('ranking-active');
            sliderItems[0].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[sliderLength - 1].style.cssText = `  
                opacity:0;
            `; 
        } else {
            number[pos+1].classList.add('ranking-active');
            number[pos].classList.remove('ranking-active'); 
            sliderItems[pos+1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[pos].style.cssText = `  
                opacity:0;
            `;
        }   
        // Lấy lại vị trí mới
        pos = getPosition();
        addAtr(pos);
    }  

    function addAtr(pos) {
        imageItem.attr({ 
            src:srcItems[pos],
            alt:altItems[pos]
        }); 
        trailerItem.attr({
            onclick : `viewTrailerJs('${trailerItems[pos]}')`
        })
    } 

    let myInterval = setInterval(nextSlide,4000); 

    function myStop() {
        window.clearInterval(myInterval);
    }

    function myStopAndReset() {
        window.clearInterval(myInterval);
        resetInterval();
    }

    pre.click(function() { 
        prevSlide();   
        myStopAndReset();
    }) 

    next.click(function() {
        nextSlide();   
        myStopAndReset();
    })  
    function resetInterval() {
        setTimeout(function() { 
            myInterval = setInterval(nextSlide,4000);
        },8000);
    }
}
 
$(document).ready(function() {   
    setRank(); 
    slider();

    var html = `<div class="col l-2-4 slider-item">
    <div class="film__item">
        <a href="./film.html" class="film__item-img-wrapped film-booking"> 
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
            <p class="film__item-info-type">Hành động, Gây cấn</p> 
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
        let filmImage = $(this).find('.film__item-img').attr('src');
        let filmType = $(this).find('.film__item-info-type').text();
        localStorage.filmImageLocal = filmImage;
        localStorage.filmNameLocal = filmName;
        localStorage.filmTypeLocal = filmType;
    })

    $('.slider-film-wrapped').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,  
        arrows:true, 
        autoplay: true,
        speed : 1500,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                }
            },
        ]
    });

    $('.trailer__content-films > .row').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5, 
        autoplay: true,
        speed : 1500,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false, 
                }
            },
        ]
    })

    $('.blog__content-films > .row').slick({
        infinite:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed : 1500,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",  
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                }
            },
        ] 
    }) 

    // let trailerBottomItems = $('.film__item-img-wrapped.film-trailer-item');
    // let trailerBottomUrls = [
    //     'https://www.youtube.com/watch?v=KgMmy31o-OE',
    //     'https://www.youtube.com/watch?v=fcs35Pt2SNU',
    //     'https://www.youtube.com/watch?v=wOxakDkCPPs',
    //     'https://www.youtube.com/watch?v=ixFHgfKr39Y',
    //     'https://www.youtube.com/watch?v=oeRG9A6bDdY',
    // ];

    // trailerBottomItems.each(function(index) {
    //     if (index > 4) {
    //         index = index - 5;
    //     } 
    //     $(this).click(function() {  
    //         viewTrailerJs(`${trailerBottomUrls[index]}`)
    //     })
    // }) 
      

    // $('.slick-slider').mousedown(function() {  
    //     trailerBottomItems.click(function(e) {
    //         e.stopImmediatePropagation();
    //     })
    //     $(this).mouseup(function(e) {  
    //         trailerBottomItems.click(function(e) {
    //             e.stopImmediatePropagation();
    //         })
    //     })
    // }) 

    
}) 