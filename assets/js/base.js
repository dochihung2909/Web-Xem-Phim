$(window).ready(function() {
    // Tạo header Footer tự động
    const head = document.querySelector('.header');
    const footer = document.querySelector('.footer'); 
    head.innerHTML = `<div class="grid">
    <nav class="header-navbar row">
        <div class="navbar__logo s-2 m-1">
            <a href="./index.html" class="navbar__logo-link">
                <img src="./assets/img/Panda-ngang2.png" alt="" class="navbar__logo-img">
            </a>  
        </div>
        <div class="navbar__menu s-0 m-0">
            <ul class="navbar__menu-list">
                <li class="navbar__menu-item">
                    <a href="./index.html" class="navbar__menu-item-link">Trang Chủ</a> 
                </li>
                <li class="navbar__menu-item">
                    <a href="./moreFilm.html" class="navbar__menu-item-link">Phim</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Lịch chiếu</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="./news.html" class="navbar__menu-item-link">Tin tức</a>
                </li>
            </ul>
        </div>  
        <form class="navbar__search-bar s-7 m-8">
            <input id="navbar-search-inp" class="navbar__search-bar-inp" type="text" placeholder="Bạn tìm gì...">
            <label for="navbar-search-inp"><i class="fa-solid fa-magnifying-glass navbar__search-bar-icon"></i></label>
        </form>
        <div class="navbar__menu-mobile s-2 m-1">
            <a class="navbar__menu-mobile-link" href="#">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </nav>
</div>`; 

    footer.innerHTML =  `<div class="grid wide">
    <div class="footer-wrapper">
        <div class="row no-gutters">
            <div class="col l-2 s-6 m-4">
                <a href="./index.html" class="footer__logo">
                    <img src="./assets/img/Panda-doc2.png" alt="" class="footer__logo-img">
                </a>
            </div>
            <div class="col l-8 s-6 m-4">
                <div class="footer__menu-wrapper">
                    <div class="footer__menu-item">
                        <a href="./index.html" class="footer__menu-item-link">Trang chủ</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="./moreFilm.html" class="footer__menu-item-link">Phim</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="#" class="footer__menu-item-link">Lịch chiếu</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="./news.html" class="footer__menu-item-link">Tin tức</a>
                    </div>
                </div>
            </div>
            <div class="col l-2 s-12 m-4">
                <div class="footer__social">
                    <div class="footer__social-wrapper">
                        <a href="" class="footer__social-link">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                    <div class="footer__social-wrapper">
                        <a href="" class="footer__social-link">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div class="footer__social-wrapper">
                        <a href="" class="footer__social-link">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="copyright-wrapper">
        <div class="row no-gutters">
            <div class="l-12 s-12 m-12">
                <p class="copyright">Copyright 2022 by HowT</p>
            </div>
        </div>
    </div>
</div>`; 

// Add modal mobile 
    const bodyContainer = $('body');
    bodyContainer.after(`
    <div class="modal-header-mobile">
        <div class="modal-mobile-container">
            <ul class="list-menu-mobile">
                <li class="menu-mobile__item"><a href="./index.html" class="menu-mobile__link">Trang chủ</a></li>
                <li class="menu-mobile__item"><a href="./moreFilm.html" class="menu-mobile__link">Phim</a></li>
                <li class="menu-mobile__item"><a href="" class="menu-mobile__link">Lịch chiếu</a></li>
                <li class="menu-mobile__item"><a href="./news.html" class="menu-mobile__link">Tin Tức</a></li> 
            </ul>
        </div>
        <div class="modal-mobile-close js-mobile-close"><i class="fa-solid fa-xmark"></i></div>
    </div>`)

// Add back to top
    bodyContainer.append(`
    <a href="#" class="back-to-top">
        <i class="fa-solid fa-arrow-up"></i>
    </a>`);

// Scroll header
    $(window).scroll(function() {
        var header = $(".header");
        var headerWide = $(".header > .grid");
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            header.addClass("sticky");
            headerWide.addClass("wide"); 
        }
        else {
            headerWide.removeClass("wide");
            header.removeClass("sticky");
        } 
        // Back to top btn
        if (scroll >= 120) {
            $('.back-to-top').addClass('top');
        } else {
            $('.back-to-top').removeClass('top');
        }
    }) 


// Tạo link cho film item
    redirectPage('film__item-info','./film.html');     

    // Responsive
    var width = $(window).width();
    if (width < 1024){
        // Thay ảnh logo header
        $('.navbar__logo-img').attr('src','./assets/img/panda.png');
        // Đổi tháng
        $('.infor-month').text($('.infor-month').text().replace('Tháng ','/')); 
        $('.booking__infor').prepend(`
        <div class="booking__infor-mobile">
            <p class="booking__infor-mobile-name">${localStorage.filmNameLocal}</p>
        </div>
        `);
        $('.booking__infor-wrapper.date').prepend(`
            <p class="booking__infor-day-mobile">${localStorage.dayLocal}</p>
        `)

        $('.modal-btn').click(function() {
            $('.modal-left').addClass('close-modal');
            $('.modal-right').addClass('open-qrcode');
        });
        // Ẩn hiện modal pay
    }  

    // Modal 
    // Var of modal trailer
    const buyBtns = $('.film-trailer-item') 
    const modal = $('.js-modal')
    const modalClose = $('.js-modal-close')
    const modalContainer = $('.js-modal')
 
    // Modal trailer
    if (modal) {
        openModal(buyBtns,modal,modalClose,modalContainer,resetViewTrailer);
    } 

    // Var modal menu mobile
    const mobileMenuBtn = $('.navbar__menu-mobile-link');
    const modalMobileMenu = $('.modal-header-mobile');
    const modalMobileClose = $('.js-mobile-close');
    const modalMobileContainer = $('.modal-mobile-container');

    if (modalMobileMenu) {
        openModal(mobileMenuBtn,modalMobileMenu,modalMobileClose,modalMobileContainer,function(){});
    }

// Tạo dot cho header
    let srcPage = $(location).attr("href");
    let headerPage = $('.navbar__menu-item-link');
    if (srcPage.includes("moreFilm.html")) {
        headerPage[1].classList.add('top-dot');
    } else if (srcPage.includes("film.html")) {
        headerPage[1].classList.add('top-dot'); 
    } else if (srcPage.includes("booking.html")) {
        headerPage[2].classList.add('top-dot'); 
    } else if (srcPage.includes("news.html")) {
        headerPage[3].classList.add('top-dot'); 
    } else if (srcPage.includes("pay.html")) {
        headerPage[1].classList.add('top-dot');
    } else {
        headerPage[0].classList.add('top-dot'); 
    }
})  

// Redirect Page jQuery 
function redirectPage(className,pageUrl) {
    $(document).ready(function() {
        $('.' + className).click(function() {
            window.location.href = pageUrl;
        });
    });
}


// Modal
    // Trailer view  
    function viewTrailerJs(urlTrailer) {   
        document.getElementById("trailer").innerHTML = '<iframe id="fancybox-frame" width="100%" height="650px" src="' + urlTrailer.replace("watch?v=", "embed/") + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }

    // Reset input trailer modal 
    function resetViewTrailer() { 
        document.getElementById("trailer").innerHTML = "";
    }    

    // Open modal   
    function openModal(btns,modal,modalClose,modalContainer,reset) {
        // Hàm hiển thị modal mua vé (Thêm class open vào modal)
        function showBuyTickets () {
            modal.addClass("open")
        }

        // Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
        function hidenBuyTickets () {
            modal.removeClass("open"); 
            // Reset
            reset();
        }

        // Lặp qua từng thẻ button và nghe hành vi click
        btns.click(function() {
            showBuyTickets();
            $('html').css('overflow-y','hidden');
        })

        // Nghe hành vi click vào button close
        modalClose.on('click', function() {
            $('html').css('overflow-y','');
            hidenBuyTickets();
        });
        
        modal.on('click', function() {
            $('html').css('overflow-y','');
            hidenBuyTickets();
        }); 

        modalContainer.on('click', function(event){ 
            event.stopPropagation();
        })
    }    