$(document).ready(function() {
    const date = $('.booking__date');
    const day = $('.booking__day');
    const month = $('.booking__month');
 
    const d = new Date();
    // date.text(`Thứ ${d.getDate() + 1}`);
    // Tạo thứ
    let i = d.getDay() + 1;
    day.each(function() {   
        let a = `Thứ ${i}`;
        if (i == 8) {
            a = "Chủ nhật";
            i = 1;
        }
        $(this).text(a)
        i++; 
    })
    // Tạo ngày
    i = d.getDate();
    date.each(function() {
        let a =`${i++}`;
        $(this).text(a);
    });
    // Tạo tháng
    month.text(`Tháng ${d.getMonth() + 1}`); 

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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows : false,
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