
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
    const modalcontainer = document.querySelector('.js-modal-container')


    // Var of modal buy tickets
    const buyTickets = document.querySelectorAll('.buy-btn');
    const modal_buy = document.querySelector('.js-modal-buy-ticket');
    const modalCloseBuyTicket = document.querySelector('.js-modal-buy-ticket-close');
    const modalBuyContainer = document.querySelector('.js-modal-buy-ticket-container');


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
            buyBtn.addEventListener('click', showBuyTickets)
        }
    
        // Nghe hành vi click vào button close
        modalClose.addEventListener('click', hidenBuyTickets)
    
        modal.addEventListener('click', hidenBuyTickets)
    
        modalContainer.addEventListener('click', function(event){ 
        event.stopPropagation();
        })
    }  


    // Modal trailer
    openModal(buyBtns,modal,modalclose,modalcontainer,resetViewTrailer);


    // Modal buy tickets
    openModal(buyTickets,modal_buy,modalCloseBuyTicket,modalBuyContainer);
 