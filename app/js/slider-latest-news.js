//
//++++++++++++++ SLIDER BEST PRICE  ++++++++++++++++++++++++++++++++++++++++++++++

// render Best price slider
function sliderLatestNews(latestNews){
    console.log(latestNews)
    let latestNewsSliders = document.querySelector('.latest-news-slider')
    let latestNewsSlide = '';
    latestNews.forEach(function (data, i) {
        latestNewsSlide +=
            `
      <div class="latest-mews-slider__slide">
          <img src="${latestNews[i]['url']}" alt="img ${latestNews[i]['title']}">
          <div class="latest-mews-slider__text-container">
              <h4 class="latest-mews-slider__title">${latestNews[i]['title']}</h4>
              <p class="latest-mews-slider__sub-title">${latestNews[i]['sub-title']}</p>
              <span class="latest-mews-slider__date">${latestNews[i]['date']}</span>
              <a class="latest-mews-slider__link" href="${latestNews[i]['link']}">Read more</a>
          </div>
      </div>`
    });
    latestNewsSliders.innerHTML = latestNewsSlide
    startLatestNewsSlider();
}
// best price slider ("Slick slider")
function startLatestNewsSlider() {
    $('.latest-news-slider').slick({
        infinite: true,
        adaptiveHeight: true,
        edgeFriction: '0.5',
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 980,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            }
        ]
    });
};