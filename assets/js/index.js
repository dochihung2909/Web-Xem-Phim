// Clear all localStorage
localStorage.clear();
localStorage.filmNameLocal = "Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng"

// Set rank 
function setRank() {
    const ranks = document.querySelectorAll('.film__item-rank');
    for (let i = 0;i < ranks.length;i++) {
        ranks[i].innerText = i+1;
    }
} 

// Slider background top
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
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/deyxr35-63066547-299c-40e4-804f-deed6505fc0d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGV5eHIzNS02MzA2NjU0Ny0yOTljLTQwZTQtODA0Zi1kZWVkNjUwNWZjMGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.puYuRGPkhH9_p-aVvvokZQgta39dwUjIdQYraqcyp1c',
        'https://www.bullettrainmovie.com/images/date_portrait.png',
        'https://images.fanart.tv/fanart/dc-league-of-super-pets-61a4eb178cfe8.png'
    ];

    // Alt ảnh logo
    var altItems = [
        'Thám Tử Lừng Danh Conan: Nàng Dâu Halloween',
        'Thor: Tình yêu và sấm sét',
        'Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng',
        'Sát thủ đối đầu',
        'Siêu thú DC'
    ]

    // lấy ảnh logo
    var imageItem = $('.ranking__infor-name');

    // iframe trailer
    var trailerItems = [
        'https://www.youtube.com/watch?v=V6qby0eZzlA',
        'https://www.youtube.com/watch?v=UBgPypHGAqE',
        'https://www.youtube.com/watch?v=JAV_YRopxYs',
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

    // thêm thuộc tính theo vị trí
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

    pre.click(function() { 
        prevSlide();    
    }) 

    next.click(function() {
        nextSlide();    
    })  

    resetInterval(); 

    function resetInterval() {
        setTimeout(function() { 
            myInterval = setInterval(nextSlide,4000);
        },8000);
    }
}
 
$(document).ready(function() {   
    setRank(); 
    slider();

    // Phim dang chiếu
    var nowShowingImg = [
        "https://traffic-edge52.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg",
        "https://img.cdn.vncdn.io/cinema/img/78043093813255893-hckc_-_poster_1_.jpg",
        "https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131832-637908959129570490.jpg",
        "https://traffic-edge19.cdn.vncdn.io/cinema/img/78041941044338498-mg_main-poster_layered_1_.jpg",
        "https://img.cdn.vncdn.io/cinema/img/80288412176661530-3.jpg",
        "https://static.mservice.io/cinema/momo-cdn-api-220624112839-637916669191122146.jpg",
        "https://traffic-edge02.cdn.vncdn.io/cinema/img/79694778154684186-nh_p_h_n_-_payoff_poster_-_fb_size_-_kctr_05.08.2022_1_.jpg",
        "https://static.mservice.io/cinema/s256x384/momo-upload-api-220715172239-637935025591723119.jpeg",
        "https://img.cdn.vncdn.io/cinema/img/77874119354605713-muw7d3n53CcfuSvatax1FbZEDiW.jpg",
        "https://img.cdn.vncdn.io/cinema/img/77875796904896177-292764439_1807279492942239_2686566311741764950_n.jpg"
    ];
    var nowShowingName = [
        "Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng",
        "Hạ Cánh Khẩn Cấp",
        "Sát Thủ Đối Đầu",
        "Điều Ước Cuối Của Tù Nhân 2037",
        "Duyên Ma",
        "Dân Chơi Không Sợ Con Rơi",
        "Nhập Hồn",
        "ALIENOID: Cuộc Chiến Xuyên Không",
        "Liên Minh Siêu Thú DC",
        "Chuyện Ma Giảng Đường - Học Kỳ 2"
    ];
    var nowShowingType = [
        "Khoa Học Viễn Tưởng, Hoạt Hình",
        "Gây Cấn, Chính Kịch",
        "Hành Động, Gay Cấn",
        "Gia Đình",
        "Hài, Kinh Dị",
        "Hài, Gia Đình",
        "Kinh Dị",
        "Khoa Học Viễn Tưởng, Bí Ẩn, Hành Động",
        "Hoạt Hình, Phiêu Lưu",
        "Hài,Kinh Dị, Gay Cấn"
    ];

    for (let i = 0;i<10;i++) {
        $('.slider-film-wrapped').append(
            `
        <div class="col l-2-4 slider-item">
            <div class="film__item">
                <a href="./film.html" class="film__item-img-wrapped film-booking"> 
                    <img src="${nowShowingImg[i]}" alt="" class="film__item-img"></iframe}">
                    <div class="film__item-tag-top">
                        <span class="film__item-old old-13">13+</span>
                        <span class="film__item-reserve"><i class="fa-solid fa-film"></i>Đặt trước</span>
                    </div>
                </a>
                <a href="#" class="film__item-info">
                    <p class="film__item-info-name">
                        ${nowShowingName[i]}
                    </p>
                    <div class="film__item-info-types flex">
                        <p class="film__item-info-type">${nowShowingType[i]}</p> 
                    </div>
                </a>
            </div>
        </div>
            `
        ) ;   
    }  

    // Phim sắp chiếu
    var comingImg = [
        "https://img.cdn.vncdn.io/cinema/img/80376153822101386-vo_dien_sat_nhan_-_teaser_poster_1_.jpg",
        "https://bom.so/x4pyrb",
        "https://bom.so/DR9MPV",
        "https://bom.so/QNsNgB",
        "https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131903-637908959434926870.jpg",
        "https://static.mservice.io/cinema/momo-cdn-api-220707133408-637927976485254821.jpg",
        "https://static.mservice.io/cinema/s256x384/momo-upload-api-220717190652-637936816125949665.jpeg",
        "https://static.mservice.io/cinema/momo-cdn-api-220624113003-637916670038916982.jpg",
        "https://img.cdn.vncdn.io/cinema/img/80292037883435674-9KvarmnOyYvrbeZpplvtcRb4Xlu.jpg",
        "https://img.cdn.vncdn.io/cinema/img/78041461118766926-pMC9q7rtjkZw6TEPtCsljNX5TBE.jpg",
        "https://img.cdn.vncdn.io/cinema/img/79669879988158132-gjp14ZxpZZLyz7hvKPeJgXbRQuX.jpg"
        
    ]

    var comingName = [
        "VÔ DIỆN SÁT NHÂN",
        "BLACK ADAM",
        "CHIẾN BINH BÁO ĐEN 2: WAKANDA BẤT DIỆT",
        "MÈO ĐI HIA: ĐIỀU ƯỚC CUỐI CÙNG",
        "Avatar: Dòng Chảy Của Nước",
        "Amsterdam",
        "Mồi Quỷ Dữ",
        "Cười",
        "Tấm Vé Đến Thiên Đường",
        "Nữ Vương Huyền Thoại",
        "Môn Phái Võ Mèo: Huyền Thoại Một Chú Chó"
    ]

    var comingType = [
        "Kinh dị",
        "Giả Tượng, Phiêu Lưu",
        "Khoa Học Viễn Tưởng, Phiêu Lưu",
        "Hoạt Hình, Phiêu lưu",
        "Khoa Học Viễn Tưởng, Phiêu Lưu",
        "Hình Sự, Chính Kịch",
        "Kinh Dị, Gay Cấn",
        "Kinh Dị",
        "Hài, Lãng Mạn",
        "Lịch Sử, Chính Kịch",
        "Hài, Hoạt Hình"
        
    ]

    var comingTrailer = [
        "https://www.youtube.com/watch?v=KgMmy31o-OE",
        "https://www.youtube.com/watch?v=fcs35Pt2SNU",
        "https://www.youtube.com/watch?v=wOxakDkCPPs",
        "https://www.youtube.com/watch?v=ixFHgfKr39Y",
        "https://www.youtube.com/watch?v=oeRG9A6bDdY&t=10s",
        "https://www.youtube.com/watch?v=GLs2xxM0e78",
        "https://www.youtube.com/watch?v=1DmNc8KKZ8g",
        "https://www.youtube.com/watch?v=vAR8Jii3T1E",
        "https://www.youtube.com/watch?v=CT5_ZodSvAA",
        "https://www.youtube.com/watch?v=fqARGf-nKxM",
        "https://www.youtube.com/watch?v=NlUpQfyECzU"
    ]

    for (let i = 0;i<10;i++) {
        $('.trailer__conent-film-wrapped').append(
        `
        <div class="col l-2-4">
            <div class="trailer__content-film">
                <a href="#product-pop-up" onclick="viewTrailerJs('${comingTrailer[i]}');" class="film__item-img-wrapped film-trailer-item">
                    <img class="film__item-img" src="${comingImg[i]}" alt="movie">
                    <span class="trailer__content-film-icon">
                        <i class="fa-solid fa-play"></i>
                    </span>  
                    <div class="film__item-tag-top">
                        <span class="film__item-old old-13">13+</span>
                        <span class="film__item-reserve"><i class="fa-solid fa-film"></i>Đặt trước</span>
                    </div>
                    <span class="trailer-film-bage">
                        8 Tháng 9
                    </span>
                </a>
                
                <a href="" class="film__item-info">
                    <p class="film__item-info-name">
                        ${comingName[i]}
                    </p>
                    <div class="film__item-info-types flex">
                        <p class="film__item-info-type">${comingType[i]}</p>
                    </div>
                </a> 
            </div>
        </div>
        `
        ) ;   
    }

    // Blog
    var blogImg = [
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220601104733-637896772532818780.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220531091446-637895852867636350.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220607210130-637902324900234426.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220614113939-637908035797577305.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220607134938-637902065784846992.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220602101731-637897618513827056.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220531150301-637896061816285843.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220517092729-637883764493378233.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220329094318-637841437983196976.jpg",
        "https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220316121128-637830294882378239.jpg"
    ]

    var blogName = [
        "Review Sonic 2: hài hước, duyên dáng không kém phần đầu",
        "Review Jujutsu Kaisen 0: Bom tấn Anime 2022 bùng nổ",
        "Top phim xã hội đen Thái Lan cực mãn nhãn",
        "Em và Trịnh: Nhẹ nhàng và đậm chất lãng mạn",
        "Những tác phẩm điện ảnh về La Mã cổ đại không thể bỏ lỡ",
        "Review Fantastic Beasts: The Secrets of Dumbledore sinh động hóa thế giới phù thủy",
        "Hướng dẫn xem phim Marvel dành cho người mới bắt đầu",
        "Doctor Strange: Đa Vũ Trụ Điên Loạn - Những sự kiện sẽ diễn ra trong phim",
        "Án mạng trên sông Nile: bộ phim trinh thám cổ điển hấp dẫn",
        "Top phim về trí tuệ nhân tạo đáng xem nhất"
    ]

    for (let i = 0;i<10;i++) {
        $('.blog__content-film-wrapped').append(
        `
        <div class="col l-3">
            <div class="trailer__content-film">
                <a href="./news.html" class="blog__content-film__item-img-wrapped">
                    <img class="film__item-img" src="${blogImg[i]}" alt="movie">
                </a>
                <a href="" class="film__item-info">
                    <p class="film__item-info-name paragraph-color">
                        ${blogName[i]}
                    </p>
                </a>
            </div>
        </div>`
        ) ;   
    }


    // Lấy biến vào local
    $('.film__item').click(function() {
        let filmName = $(this).find('.film__item-info-name').text();
        let filmImage = $(this).find('.film__item-img').attr('src');
        let filmType = $(this).find('.film__item-info-type').text();
        localStorage.filmImageLocal = filmImage;
        localStorage.filmNameLocal = filmName;
        localStorage.filmTypeLocal = filmType;
    })

    // Slick slider
    $('.slider-film-wrapped').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,  
        arrows:true, 
        autoplay: true,
        // speed : 1500,
        autoplaySpeed: 4000,
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
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
        // speed : 1500,
        autoplaySpeed: 4000,
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
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows:false, 
                }
            },
        ]
    })

    $('.blog__content-films > .row').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        // speed : 1500,
        autoplaySpeed: 4000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",  
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false, 
                }
            },
        ] 
    })   
}) 