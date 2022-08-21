$(document).ready(function() {
    let allFilm = $('.all-film');
    for (let i = 0;i<15;i++) {
        allFilm.append(`
        <div class="l-3 s-12 m-6 moreFilm-item">
            <div class="moreFilm-trailer__content">
                <a href="#product-pop-up" onclick="viewTrailerJs('https://www.youtube.com/watch?v=JAV_YRopxYs');" class="film__item-img-wrapped film-trailer-item">
                    <img class="film__item-img" src="https://traffic-edge52.cdn.vncdn.io/cinema/img/79249161460312584-2.jpg" alt="movie">
                    <span class="trailer__content-film-icon">
                        <i class="fa-solid fa-play"></i>
                    </span> 
                </a>
                <div class="moreFilm-body">
                    <a href="./film.html" class="film__item-info">
                        <p class="film__item-info-name">
                            Bảy Viên Ngọc Rồng Siêu Cấp: Siêu Anh Hùng
                        </p>
                        <div class="film__item-info-types flex">
                            <p class="film__item-info-type">Khoa Học Viễn Tưởng, Hoạt Hình, Hành Động</p>
                        </div>
                    </a> 
                    <a href="./film.html" class="moreFilm__item-buy buy-btn">Mua vé
                        <i class="fa-solid fa-ticket"></i>
                    </a>
                </div>
            </div>
        </div>`);
    } 
})