$(document).ready(function() {
    // Tạo block ngày 30 block
    for (let i = 0;i<30;i++) {
        let sliderScheduleHTML =
         `<div class="col l-2">
            <a href="#booking" class="booking__days-wrapper">
                <p class="booking__day"></p>
                <p class="booking__date"></p>
                <p class="booking__month"></p>
            </a>
        </div>`;
        $('.slide-schedule.row').append(sliderScheduleHTML); 
    }

    // Thêm active vào block đầu tiên
    $('.booking__days-wrapper')[0].classList.add('active-booking')


    const day = $('.booking__day');
    const date = $('.booking__date');
    const month = $('.booking__month');
 
    const d = new Date();
    // date.text(`Thứ ${d.getDate() + 1}`);
    // Tạo thứ
    let dayNow = d.getDay();
    let dateNow = d.getDate();
    let monthNow = d.getMonth() + 1;  
    const month31 = [1,3,5,7,8,10,12];
    const month30 = [4,6,9,11]; 
    day.each(function() {   
        
    })
    // Tạo ngày và tháng
    $('.booking__days-wrapper').each(function() {
        let a =`${dateNow++}`;  
        let b = `Thứ ${dayNow}`; 
        if (dayNow == 8 || dayNow == 0) {
            b = "Chủ nhật";
            dayNow = 1;
        }
        $(this).find(day).text(b)
        dayNow++; 
        $(this).find(date).text(a);
        $(this).find(month).text(`Tháng ${monthNow}`);
        if (month31.includes(monthNow)) {
            if (dateNow > 31) {
                dateNow = 1;
                monthNow++;
            }
        } else if (month30.includes(monthNow)) {
            if (dateNow > 30){
                dateNow = 1;
                monthNow++;
            }
        } else if (monthNow == 2) {
            let yearNow =d.getFullYear()
            if (yearNow % 4 === 0 && yearNow % 100 !== 0 || yearNow % 400 == 0) {
                if (dateNow > 29) {
                    dateNow = 1;  
                }
            } else {
                if (dateNow > 28) {
                    dateNow = 1;
                }
            }
            monthNow++; 
        } 
    });
    // Tạo tháng
    

    // Disable time
    let time = $('.booking__time .l-2'); 
    for (let i = 0;i<7;i++) {
        let a = parseInt(Math.random() * 18);
        let b = time[a]; 
        b.classList.add('disable-time');
    }

    // Tạo link cho timeBtn
    let selectTimeBtn = $('.booking__time-wrapper');
    selectTimeBtn.each(function() { 
        $(this).attr('href','./booking.html');
    })

    // Lấy time + địa chỉ vào biến localStorage
    selectTimeBtn.click(function () {
        localStorage.timeLocal = $(this).text();
        localStorage.addressLocal = $('.theatre__address-name')[0].innerText;
    }) 

    // Khởi tạo ngày mặc định
    let currentDay =  $('.active-booking');
    getLocalDayVar(currentDay);
    
    // Thêm class khi bấm 
    let bookingItems = $('.booking__days-wrapper');
    bookingItems.click(function() {
        let current = $('.active-booking');
        current.removeClass('active-booking');
        $(this).addClass('active-booking');
        getLocalDayVar(this);
    }) 

    // Slick schedule
    $('.slide-schedule ').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows : false,
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows:false,
                }
            },
        ]
    })

    // Tạo ảnh + tên phim bằng biến localStorage
    let filmNameFilm = $('.booking__infor-name');
    filmNameFilm.text(localStorage.filmNameLocal);
    $('.booking__schedule-img').attr('src',localStorage.filmImageLocal);
    $('.booking__infor-type').text(localStorage.filmTypeLocal)
})  


function getLocalDayVar(place) {
    localStorage.dateLocal = $(place).find('.booking__date').text();
    localStorage.dayLocal = $(place).find('.booking__day').text();
    localStorage.monthLocal = $(place).find('.booking__month').text();
}