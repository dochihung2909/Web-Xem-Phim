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
        modal.addClass("open")
    }

    // Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
    function hidenBuyTickets () {
        modal.removeClass("open"); 
        // Reset
        reset();
    }

    // Lặp qua từng thẻ button và nghe hành vi click
    btns.click(function() {
        showBuyTickets();
        $('html').css('overflow-y','hidden');
    })

    // Nghe hành vi click vào button close
    modalClose.on('click', function() {
        $('html').css('overflow-y','');
        hidenBuyTickets();
    });
    
    modal.on('click', function() {
        $('html').css('overflow-y','');
        hidenBuyTickets();
    }); 

    modalContainer.on('click', function(event){ 
        event.stopPropagation();
    })
}    

$(document).ready(function () {    
// Modal 
    // Var of modal trailer
    const buyBtns = $('.film-trailer-item') 
    const modal = $('.js-modal')
    const modalClose = $('.js-modal-close')
    const modalContainer = $('.js-modal')
 
    // Modal trailer
    if (modal) {
        openModal(buyBtns,modal,modalClose,modalContainer,resetViewTrailer);
    }   
}) 
