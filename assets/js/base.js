// Scroll    
$(window).ready(function() {
    $(window).scroll(function() {
        var header = $(".header");
        var headerWide = $(".header > .grid");
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            header.addClass("sticky");
            headerWide.addClass("wide"); 
        }
        else {
            headerWide.removeClass("wide");
            header.removeClass("sticky");
        }

    })
    
    // Back to top btn
    window.addEventListener('scroll', function () { 
        const header = document.querySelector('.back-to-top');
        header.classList.toggle("top", window.scrollY > 120);
    })   
    // redirectPage('film__item','./film.html');     

    // Responsive
    var width = $(window).width();
    if (width < 740){
        $('.navbar__logo-img').attr('src','./assets/img/panda.png');
        $('.infor-month').text($('.infor-month').text().replace('Tháng ','/')); 
        $('.booking__infor').prepend(`
        <div class="booking__infor-mobile">
            <p class="booking__infor-mobile-name">${localStorage.filmNameLocal}</p>
        </div>
        `);
        $('.booking__infor-wrapper.date').prepend(`
            <p class="booking__infor-day-mobile">${localStorage.dayLocal}</p>
        `)
    }
})  

// Redirect Page jQuery 
function redirectPage(className,pageUrl) {
    $(document).ready(function() {
        $('.' + className).click(function() {
            window.location.href = pageUrl;
        });
    });
}
