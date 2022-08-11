$(document).ready(function() {
    const date = $('.booking__date');
    const day = $('.booking__day');
    const month = $('.booking__month');
 
    const d = new Date();
    // date.text(`Thứ ${d.getDate() + 1}`);
    
    let i = d.getDate() + 1;
    date.each(function() {   
        let a = `Thứ ${i}`;
        if (i == 8) {
            a= "Chủ nhật";
            i = 1;
        }
        $(this).text(a)
        i++; 
    })
    i = d.getDay();
    day.each(function() {
        let a =`${i++}`;
        $(this).text(a);
    });
    month.text(`Tháng ${d.getMonth() + 1}`); 

    let time = $('.booking__time .l-2'); 
    for (let i = 0;i<7;i++) {
        let a = parseInt(Math.random() * 18);
        let b = time[a];
        b.classList.add('disable-time');
    }
    $('.booking__time-wrapper').each(function() { 
        $(this).attr('href','./booking.html');
    })

    $('.booking__time-wrapper').click(function () {
        localStorage.timeLocal = $(this).text();
    }) 

    let filmNameFilm = $('.booking__infor-name');
    filmNameFilm.text(localStorage.filmNameLocal);
    $('.booking__schedule-img').attr('src',localStorage.filmImageLocal);
    $('.booking__infor-type').text(localStorage.filmTypeLocal)
})  
