
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


// Add selected if click  
$(document).ready(function() { 
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
        if ($('.select').length == 0) {
            price.text("");
        } 
    });    

    if ($('.select').length >= 1) {
        delAll.css({
            'display':'block'
        })
    } else {
        delAll.css({
            'display':'none'
        })
    }

    delAll.click(function() {
        $('.select').each(function() {
            $(this).removeClass('select');
        }) 
        selected.text("");
        price.text(""); 
    })

    

    let monthClient = $('#month-client');
    let dateClient = $('#date-client');
    let timeClient = $('#time-client');
    let typeClient = $('#type-client');    
    timeClient.text(localStorage.time);
})

