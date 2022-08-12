$(document).ready(function () { 
    const head = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    head.innerHTML = `<div class="grid">
    <nav class="header-navbar">
        <div class="navbar__logo">
            <a href="./index.html" class="navbar__logo-link">
                <img src="./assets/img/Panda-ngang2.png" alt="" class="navbar__logo-img">
            </a>  
        </div>
        <div class="navbar__menu">
            <ul class="navbar__menu-list">
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link top-dot">Trang Chủ</a> 
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Phim</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Lịch chiếu</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Tin tức</a>
                </li>
            </ul>
        </div>  
        <div class="navbar__search-bar">
            <input id="navbar-search-inp" class="navbar__search-bar-inp" type="text" placeholder="Bạn tìm gì...">
            <label for="navbar-search-inp"><i class="fa-solid fa-magnifying-glass navbar__search-bar-icon"></i></label>
        </div>
    </nav>
</div>`; 

    footer.innerHTML =  `<div class="grid wide">
    <div class="footer-wrapper">
        <div class="row">
            <div class="col l-2">
                <a href="./index.html" class="footer__logo">
                    <img src="./assets/img/Panda-doc2.png" alt="" class="footer__logo-img">
                </a>
            </div>
            <div class="col l-8">
                <div class="footer__menu-wrapper">
                    <div class="footer__menu-item">
                        <a href="#" class="footer__menu-item-link">Trang chủ</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="#" class="footer__menu-item-link">Phim</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="#" class="footer__menu-item-link">Lịch chiếu</a>
                    </div>
                    <div class="footer__menu-item">
                        <a href="#" class="footer__menu-item-link">Tin tức</a>
                    </div>
                </div>
            </div>
            <div class="col l-2">
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
        <div class="row">
            <div class="l-12">
                <p class="copyright">Copyright 2022 by HowT</p>
            </div>
        </div>
    </div>
</div>`;

    const modalBuyTime = document.querySelector('.buy__time-border');
    if (modalBuyTime) {
        // Create 12 buy time
        for (let i = 0;i<12;i++) {
            modalBuyTime.innerHTML += `<div class="l-1">
            <div class="buy__time-wrapped">
                <div class="buy__time-day"></div>
                <div class="buy__time-date"></div>
            </div>
        </div>`;
        }
        // Set frist element active
        document.querySelector('.buy__time-border .l-1 .buy__time-wrapped').classList.add('active-modal-buy');

        let dayBtns = document.querySelectorAll('.buy__time-day');
        let dateBtns = document.querySelectorAll('.buy__time-date'); 

        function changeDay(days,dates) {
            let i = 1; 
            let current = new Date();
            let day = current.getDay();
            let month = current.getMonth() + 1; 
            let date = current.getDate(); 
            for (let dayBtn of days) {
                day++;
                if (day == 8) {
                    dayBtn.innerHTML = "Chủ Nhật";  
                    day = 1;
                }
                else {
                    dayBtn.innerHTML = "Thứ " + day;
                }
            } 
            const month31 = [1,3,5,7,8,10,12];
            const month30 = [4,6,9,11];
            for (let dateBtn of dates) {  
                if (date == 32 && month31.includes(month)) {
                    date = 1;
                    if (month == 12) 
                        month = 1;
                    else 
                        month++;
                } else if (date == 31 && month30.includes(month)) {
                    date = 1;
                    month++;
                } else if (month == 2 && date == 29) { 
                    month++;
                    date = 1;
                }  
                dateBtn.innerHTML = (date++) + "-" + (month);
                
            }
        }

        changeDay(dayBtns,dateBtns); 


        var btns = document.querySelectorAll('.buy__time-wrapped');
        for (const btn of btns) { 
            btn.addEventListener('click', function() { 
                let current = document.querySelector('.active-modal-buy');
                current.classList.remove('active-modal-buy');
                this.classList.add('active-modal-buy'); 
            })
        } 
    }
}) 