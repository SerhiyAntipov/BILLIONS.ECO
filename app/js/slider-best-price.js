//
//++++++++++++++ SLIDER BEST PRICE  ++++++++++++++++++++++++++++++++++++++++++++++
// filter slider data
function sliderBestPrice(menuData) {
    let bestPrice = menuData.filter(function (data, i, object) {
        if (data["best-price"] == 'yes') return true
    })
    renderBestPriceSlider(bestPrice);
}
// render Best price slider
function renderBestPriceSlider(bestPrice) {
    let bestPriceSliders = document.querySelector('.price-slider')
    let bestPriceSlide = '';
    bestPrice.forEach(function (data, i) {
        bestPriceSlide +=
            `
      <div class="price-slider__slide">
          <img src="${bestPrice[i]['url']}" alt="img ${bestPrice[i]['food-name']}">
          <div class="price-slider__text-container">
              <h4 class="price-slider__price">$${bestPrice[i]['food-price']}</h4>
              <p class="price-slider__name">${bestPrice[i]['food-name']}</p>
              <span>07/11/2018</span>
              <button class="btn-small">Read More</button>
          </div>
      </div>`
    });
    bestPriceSliders.innerHTML = bestPriceSlide
    startPriceSlider();
}
// best price slider ("Slick slider")
function startPriceSlider() {
    $('.price-slider').slick({
        infinite: true,
        adaptiveHeight: true,
        edgeFriction: '0.5',
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
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