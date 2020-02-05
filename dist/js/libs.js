//++++++++++++++ INDEX JS ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    (function getAjaxJsonMenuData() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                menuData = JSON.parse(xhr.response);
                sliderBestPrice(menuData);
            }
        }
        xhr.open('GET', 'data/menu-data.json', true);
        xhr.send();
    })();
})();
//
//++++++++++++++ MAIN MENU ++++++++++++++++++++++++++++++++++++++++++++++
// (function () {
//     // menu active
//     let mainNavLink = document.querySelectorAll('.main-nav__link');
//     let mainNavLinkActive = 0;

//     mainNavLink.forEach(function (obj, i) {
//         mainNavLink[i].addEventListener('click', function () {
//             if (mainNavLink[i].classList.contains('main-nav__link-active') != true) {
//                 mainNavLink[i].classList.add('main-nav__link-active');
//                 mainNavLink[mainNavLinkActive].classList.toggle('main-nav__link-active');
//                 mainNavLinkActive = mainNavLink[i].getAttribute('data-main-nav-id')
//             }
//         });
//     });
//     // burger menu close
//     const mainNav = document.querySelector('.main-nav__ul');
//     mainNav.addEventListener('click', function (event) {
//         if (event.srcElement.tagName == "A" || event.srcElement.localName == "a") {
//             document.querySelector('#main-nav-call').checked = false;
//         }
//     });
//     // bg header
//     let color_header = 'rgba(20, 23, 35, 1)';
//     let boxShadow_header = '0 3px 6px rgba(255, 255, 255, 0.2)';
//     let header = document.querySelector('.main-nav');
//     window.addEventListener('scroll', function positionPoint() {
//         if (document.documentElement.scrollTop > header.clientHeight) {
//             header.style.backgroundColor = color_header;
//             header.style.boxShadow = boxShadow_header;
//         } else {
//             header.style.backgroundColor = 'transparent';
//             header.style.boxShadow = 'none';
//         }
//     });
// })();
//
//++++++++++++++ POPUP MAP WINDOW ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    $(function () {
        $('.popup-modal').magnificPopup({
            items: {
                src: '#youtube-video',
                type: 'inline',
            }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
    
})();
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
 //
 //++++++++++++++ SMOOTH SCROLL +++++++++++++++++++++++++++++++++++++++++++++++++++
 (function () {
     let scroll = new SmoothScroll('a[href*="#"]', {
         ignore: '[data-scroll-ignore]',
         speed: 500,
         offset: 45
     });
 })();