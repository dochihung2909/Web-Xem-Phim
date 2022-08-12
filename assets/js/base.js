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
    redirectPage('film__item','./film.html');     
})  

// Redirect Page jQuery 
function redirectPage(className,pageUrl) {
    $(document).ready(function() {
        $('.' + className).click(function() {
            window.location.href = pageUrl;
        });
    });
}
