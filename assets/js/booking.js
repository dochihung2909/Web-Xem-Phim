// Add selected if click  
$(document).ready(function() { 

     // Create seats
     const seatWrapper = document.querySelector('.seats')

     function intToChar(int) { 
         const code = 'A'.charCodeAt(0); 
     
         return String.fromCharCode(code + int);
     }
 
     for(let i = 0; i < 8; i++) {
         createSeat(intToChar(i),0);
     }
 
 
     function createSeat(seatRow, seatStart) {
         let seat = seatWrapper.innerHTML += 
             `
             <div class="seat"> 
                 <div class="seats-number"></div>
             </div>
             `
 
         let seatNumber = document.querySelectorAll('.seats-number')
         
         for(let i = 0; i < 12; i++) {
             let seatVip = "normal";
             if(seatRow >= "E") {
                 seatVip = "vip"
             }
             seatNumber[seatNumber.length-1].innerHTML += 
             `
                 <a class="seat-number ${seatVip}" href="#seat-booking" class="seat">${seatRow}${i+1+seatStart}</a>
             `
         }        
     }

    const selected =  $('#seat-selected');
    const price = $('#total-price');
    var seat = $('.seat-number');
    const delAll = $('#del-all');
    // Money count
    let normalPrice = 65;
    let vipPrice = 80;   
    let money = 0;  
    for (let i = 0;i<30;i++) {
        let a = parseInt(Math.random() * seat.length);
        $('.seat-number')[a].classList.add('selected');
    }
    
    let seatSelected = $('#seat-selected');
    let paymentBtn = $('.booking-pay__commit-btn');

    if (seatSelected.text() == false) {
        paymentBtn.addClass('selected')
    } 

    seat.click(function() {  
        if (!$(this).hasClass('select')) {
            if ($(this).hasClass('.vip')) {
                money += vipPrice;
            } else {
                money += normalPrice;
            }
            $(this).addClass('select'); 
            selected.append($(this).text()+ " "); 
            price.text(`${money}.000đ`)
        }
        else {
            if ($(this).hasClass('.vip')) {
                money -= vipPrice;
            } else {
                money -= normalPrice;
            } 
            price.text(`${money}.000đ`);
            selected.text(selected.text().replace($(this).text(),'')); 
            $(this).removeClass('select'); 
        }
        if ($('.select').length > 0) {
            delAll.css({
                'display':'inline-block',
            })
        } 

        if ($('.select').length == 0) {
            price.text("");
            delAll.css({
                'display':'none',
            })
        } 
        
        if (seatSelected.text() == false) {
            paymentBtn.addClass('selected')
        } else {
            paymentBtn.removeClass('selected');
        }
    });    
    
    

    delAll.click(function() {
        $('.select').each(function() {
            $(this).removeClass('select');
        }) 
        selected.text("");
        price.text(""); 
        delAll.css({
            'display':'none',
        })
        paymentBtn.addClass('selected')
    })  ;

    // Lấy seats 
    paymentBtn = $('.booking-pay__commit-btn'); 
    paymentBtn.click(function() { 
        let val = $('#seat-selected');
        window.location.href = "./pay.html";
        localStorage.seatLocal = val.text();
        localStorage.totalLocal = money;
    })   
    
    
    
    let monthClient = $('#month-client');
    let dateClient = $('#date-client');
    let timeClient = $('#time-client');
    let typeClient = $('#type-client');     
    timeClient.text(localStorage.timeLocal);  
    dateClient.text(localStorage.dateLocal); 
    monthClient.text(localStorage.monthLocal);
})

