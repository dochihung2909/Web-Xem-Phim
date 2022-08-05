function innit() {
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
                    <a href="" class="navbar__menu-item-link">Phim</a> 
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Giá vé</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Khuyến mãi</a>
                </li>
                <li class="navbar__menu-item">
                    <a href="" class="navbar__menu-item-link">Về HowT</a>
                </li>
            </ul>
        </div>  
        <div class="navbar__search-bar">
            <input id="navbar-search-inp" class="navbar__search-bar-inp" type="text" placeholder="Bạn tìm gì...">
            <label for="navbar-search-inp"><i class="fa-solid fa-magnifying-glass navbar__search-bar-icon"></i></label>
        </div>
    </nav>
</div>`; 

//     footer.innerHTML =  ` <div class="footer__container">
//     <div class="grid wide">
//         <div class="stick-movie">
//             <div class="border-bottom">

//             </div>
//         </div>
//         <div class="footer__container__about"> 
//             <div class="footer__logo">
//                 <img src="./assets/img/Panda-doc2.png" alt="logo">
//             </div>
            
//             <div class="row">
                
//                 <div class="col l-3">
//                     <div class="footer__content">
//                         <p class="footer__content-header">
//                             Thông tin
//                         </p>
//                         <a href="" class="footer__content-contact">
//                             Giới thiệu
//                         </a>
//                         <a href="" class="footer__content-contact">
//                             Tin tức
//                         </a>
//                         <a href="" class="footer__content-contact">
//                             Hỏi đáp
//                         </a>
//                         <a href="" class="footer__content-contact">
//                             Liên hệ quảng cáo
//                         </a>
//                     </div>
//                 </div>
                
//                 <div class="col l-3">
//                     <div class="footer__content">
//                         <p class="footer__content-header">
//                             Kết nối với chúng tôi
//                         </p>
//                         <div class="footer__social">
//                             <div class="footer__social-wrapped">
//                                 <a class="footer__social-link" href="#" target="blank" rel="noopener" style="color: #17a8fc;"><i class="fa-brands fa-facebook"></i></a>
//                             </div>
//                             <div class="footer__social-wrapped">
//                                 <a class="footer__social-link" href="#" target="blank" rel="noopener" style="color: #005cc1;"><i class="fa-brands fa-linkedin"></i></a>
//                             </div>
//                             <div class="footer__social-wrapped">
//                                 <a class="footer__social-link" href="#" target="blank" rel="noopener" style="color: #ff0000;"><i class="fa-brands fa-youtube"></i></a>
//                             </div>
//                             <div class="footer__social-wrapped">
//                                 <a class="footer__social-link" href="#" target="blank" rel="noopener" style="color: #1d9bf0;"><i class="fa-brands fa-twitter"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col l-3">
//                     <div class="footer__content box3">
//                         <p class="footer__content-header">
//                             Chăm sóc khách hàng
//                         </p>
                        
//                         <p class="footer__content-paragraph ">
//                             Địa chỉ:
//                             <a href="#" class="footer__content-contact">Tầng M, Tòa nhà Petroland, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh</a>
//                         </p>
//                         <p class="footer__content-paragraph">
//                             Hotline : 
//                             <a href="tel:1900 5454 41" class="footer__content-contact">1900 5454 41</a>(1000 đ/phút)
//                         </p>
//                         <p class="footer__content-paragraph">
//                             Email : 
//                             <a href="mailto:hotro@momo.vn" class="footer__content-contact">hotro@momo.vn</a>
//                         </p>
//                         <p class="footer__content-paragraph">
//                             Tổng đài gọi ra :
//                             <a href="tel:028.7306.5555" class="footer__content-contact">028.7306.5555</a>- 
//                             <a href="tel:028.9999.5555" class="footer__content-contact">028.9999.5555</a>
//                         </p>
//                     </div>
//                 </div>
                
//                 <div class="col l-3">
//                     <div class="footer__content">
//                         <p class="footer__content-header">
//                             Chính sách và quy định
//                         </p>
//                         <a href="#" class="footer__content-contact">Quy định chung</a>
//                         <a href="#" class="footer__content-contact">Điều khoản giao dịch</a>
//                         <a href="#" class="footer__content-contact">Chính sách bảo mật</a>
//                         <a href="#" class="footer__content-contact"> Thông tin công ty</a>
                    
//                     </div>
//                 </div>
//             </div>

//             <div class="row">
//                 <div class="col l-4">
//                     <div class="footer__container__about-feet-box">
//                         <div class="footer__container__about-feet-copyright">
//                             <p>&copy; Copyright HowT 2022</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col l-4">
                    
//                 </div>
//                 <div class="col l-4">
//                     <div class="footer__container__about-feet-box">
//                         <div class="footer__container__about-feet-download">
//                             <a href="#">
//                                 <img src="https://static.mservice.io/img/momo-upload-api-210724113855-637627235353131497.jpg" alt="appStore">
//                             </a> 
//                         </div>
//                         <div class="footer__container__about-feet-download">
//                             <a href="#">
//                                 <img src="https://static.mservice.io/img/momo-upload-api-210724113959-637627235994410679.jpg" alt="googlePlay">
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`;

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
}