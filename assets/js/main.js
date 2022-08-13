// Trailer view  
function viewTrailerJs(urlTrailer) {   
    document.getElementById("trailer").innerHTML = '<iframe id="fancybox-frame" width="100%" height="650px" src="' + urlTrailer.replace("watch?v=", "embed/") + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}

// Reset input trailer modal 
function resetViewTrailer() { 
    document.getElementById("trailer").innerHTML = "";
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
    btns.click(showBuyTickets)

    // Nghe hành vi click vào button close
    modalClose.addEventListener('click', hidenBuyTickets);
    
    modal.addEventListener('click', hidenBuyTickets); 

    modalContainer.addEventListener('click', function(event){ 
        event.stopPropagation();
    })
}    

$(document).ready(function () {    
// Modal 
    // Var of modal trailer
    const buyBtns = $('.film-trailer-item') 
    const modal = document.querySelector('.js-modal')
    const modalclose = document.querySelector('.js-modal-close')
    const modalcontainer = document.querySelector('.js-modal')
 
    // Modal trailer
    if (modal) {
        openModal(buyBtns,modal,modalclose,modalcontainer,resetViewTrailer);
    } 
}) 
