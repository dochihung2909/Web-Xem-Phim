
// Scroll 
window.addEventListener('scroll', function () { 
    const header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 120);
})  

// Back to top btn
window.addEventListener('scroll', function () { 
    const header = document.querySelector('.back-to-top');
    header.classList.toggle("top", window.scrollY > 120);
})  


// Trailer view  
function viewTrailerJs(filmName, urlTrailer) {  
    document.getElementById("film-name").innerHTML += filmName;  
    document.getElementById("trailer").innerHTML = '<iframe id="fancybox-frame" width="100%" height="500px" src="' + urlTrailer.replace("watch?v=", "embed/") + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}

// Reset input trailer modal 
function resetViewTrailer() {
    document.getElementById("film-name").innerHTML = "";  
    document.getElementById("trailer").innerHTML = "";
} 


// Modal 
    // Var of modal trailer
    const buyBtns = document.querySelectorAll('.film-trailer-item') 
    const modal = document.querySelector('.js-modal')
    const modalclose = document.querySelector('.js-modal-close')
    const modalcontainer = document.querySelector('.js-modal')


    // Var of modal buy tickets
    const buyTickets = document.querySelectorAll('.buy-btn');
    const modal_buy = document.querySelector('.js-modal-buy-ticket');
    const modalCloseBuyTicket = document.querySelector('.js-modal-buy-ticket-close');
    const modalBuyContainer = document.querySelector('.js-modal-buy-ticket');


    var btns = document.querySelectorAll('.buy__time-wrapped');
    for (const btn of btns) { 
        btn.addEventListener('click', function() { 
            let current = document.querySelector('.active-modal-buy');
            current.classList.remove('active-modal-buy');
            this.classList.add('active-modal-buy'); 
        })
    } 

    // Open modal
    function openModal(btns,modal,modalClose,modalContainer,reset) {
        // Hàm hiển thị modal mua vé (Thêm class open vào modal)
        function showBuyTickets () {
            modal.classList.add("open")
        }
    
        // Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
        function hidenBuyTickets () {
            modal.classList.remove("open"); 
            // Reset
            reset();
        }
    
        // Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of btns) {
            buyBtn.addEventListener('click', showBuyTickets,false)
        }
    
        // Nghe hành vi click vào button close
        modalClose.addEventListener('click', hidenBuyTickets,false);
        
        modal.addEventListener('click', hidenBuyTickets); 
    
        modalContainer.addEventListener('click', function(event){ 
            event.stopPropagation();
        })
    }  


    // Modal trailer
    if (modal) {
        openModal(buyBtns,modal,modalclose,modalcontainer,resetViewTrailer);
    }
    
    // Modal buy tickets
    if (modal_buy) {
        openModal(buyTickets,modal_buy,modalCloseBuyTicket,modalBuyContainer,false);
    }
 

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


// Set rank

const ranks = document.querySelectorAll('.film__item-rank');
for (let i = 0;i < ranks.length;i++) {
    ranks[i].innerText = i+1;
}
