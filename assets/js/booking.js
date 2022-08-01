
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
    
    // Money count
    let normalPrice = 65000;
    let vipPrice = 80000;  
    
    $('.seat-number').click(function() { 
        if (!$(this).hasClass('select')) {
            $(this).addClass('select'); 
            selected.append($(this).text()+ " ");
        }
        else {
            selected.text(selected.text().replace($(this).text(),'')); 
            $(this).removeClass('select'); 
        }
    });   
})

