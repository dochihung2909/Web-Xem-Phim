$(document).ready(function() {
    let allFilm = $('.all-film');
    for (let i = 0;i<15;i++) {
        allFilm.append(`
        <div class="col l-2-4 slider-item">
            <div class="film__item">
                <a href="./film.html" class="film__item-img-wrapped film-booking"> 
                    <img src="./assets/img/film_1.webp" alt="" class="film__item-img">
                    <div class="film__item-tag-top">
                        <span class="film__item-old old-13">13+</span>
                        <span class="film__item-reserve"><i class="fa-solid fa-film"></i>Đặt trước</span>
                    </div>
                </a>
                <a href="" class="film__item-info">
                <p class="film__item-info-name">
                    Thám Tử Lừng Danh Conan: Nàng Dâu Halloween 
                </p>
                <div class="film__item-info-types flex">
                    <p class="film__item-info-type">Hoạt Hình

                    Hình Sự</p>
                </div>
            </a>
            </div>
        </div> `)
    } 
})