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
            <p class="seat-text">${seatRow}</p>
            <div class="seats-number"></div>
        </div>
        `

    let seatNumber = document.querySelectorAll('.seats-number')
    
    for(let i = 0; i < 12; i++) {
        let seatVip = "";
        if(seatRow >= "E") {
            seatVip = "vip"
        }
        seatNumber[seatNumber.length-1].innerHTML += 
        `
            <a class="seat-number ${seatVip}" href="#" class="seat">${i+1+seatStart}</a>
        `
    }        
}