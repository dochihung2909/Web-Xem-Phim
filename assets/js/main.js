
// Scroll

// window.addEventListener('scroll', function () { 
//     const header = document.querySelector('.header');
//     header.classList.toggle("sticky", window.scrollY > 80);
// })


window.addEventListener('scroll', function () { 
    const header = document.querySelector('.back-to-top');
    header.classList.toggle("top", window.scrollY > 120);
})  

function viewTrailerJs(filmName, urlTrailer) {  
    document.getElementById("film-name").innerHTML += filmName;  
    document.getElementById("trailer").innerHTML = '<iframe id="fancybox-frame" width="100%" height="500px" src="' + urlTrailer.replace("watch?v=", "embed/") + '?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}

function resetViewTrailer() {
    document.getElementById("film-name").innerHTML = "";  
    document.getElementById("trailer").innerHTML = "";
}




// Modal
    const buyBtns = document.querySelectorAll('.film-trailer-item') 
    const modal = document.querySelector('.js-modal')
    const modalclose = document.querySelector('.js-modal-close')
    const modalcontainer = document.querySelector('.js-modal-container')

    // Hàm hiển thị modal mua vé (Thêm class open vào modal)
    function showBuyTickets () {
        modal.classList.add("open")
    }

    // Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
    function hidenBuyTickets () {
        modal.classList.remove("open");
        resetViewTrailer();
    }

    // Lặp qua từng thẻ button và nghe hành vi click
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuyTickets)
    }

    // Nghe hành vi click vào button close
    modalclose.addEventListener('click', hidenBuyTickets)

    modal.addEventListener('click', hidenBuyTickets)

    modalcontainer.addEventListener('click', function(event){ 
    event.stopPropagation();
    })