$(document).ready(function() {
    // Tạo block ngày 30 block
    var sliderScheduleHTML =
     `<div class="col l-2">
        <a href="#booking-sch" class="film-booking__days-wrapper">
            <p class="film-booking__day"></p>
            <p class="film-booking__date"></p>
            <p class="film-booking__month"></p>
        </a>
    </div>`;
    for (let i = 0;i<30;i++) {
        $('.slide-schedule.row').append(sliderScheduleHTML); 
    }

    // Thêm active vào block đầu tiên
    $('.film-booking__days-wrapper')[0].classList.add('active-booking') 

    const day = $('.film-booking__day');
    const date = $('.film-booking__date');
    const month = $('.film-booking__month');
 
    const d = new Date(); 
    
    let dayNow = d.getDay() + 1;
    let dateNow = d.getDate();
    let monthNow = d.getMonth() + 1;  
    const month31 = [1,3,5,7,8,10,12];
    const month30 = [4,6,9,11];  
    // Tạo thứ ngày và tháng
    $('.film-booking__days-wrapper').each(function() {
        let a =`${dateNow++}`;  
        let b = `Thứ ${dayNow}`; 
        if (dayNow == 8 || dayNow == 1) {
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

    // Tạo link cho timeBtn
    let selectTimeBtn = $('.film-booking__time-wrapper');
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
    let bookingItems = $('.film-booking__days-wrapper');
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

    // Tạo ảnh + tên phim bằng biến localStorage
    let filmNameFilm = $('.detail__infor-name');
    filmNameFilm.text(localStorage.filmNameLocal);
    $('.film-booking__schedule-img').attr('src',localStorage.filmImageLocal);
    $('.detail__infor-type').text(localStorage.filmTypeLocal)
})  


function getLocalDayVar(place) {
    localStorage.dateLocal = $(place).find('.film-booking__date').text();
    localStorage.dayLocal = $(place).find('.film-booking__day').text();
    localStorage.monthLocal = $(place).find('.film-booking__month').text();
}