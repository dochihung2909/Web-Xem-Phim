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
}) 