//++++++++++++++ INDEX JS ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    (function getAjaxJsonLatestNews() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                latestNews = JSON.parse(xhr.response);
                sliderLatestNews(latestNews);
            }
        }
        xhr.open('GET', 'data/latest-news.json', true);
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
//++++++++++++++ SLIDER  LATEST NEWS  ++++++++++++++++++++++++++++++++++++++++++++++

// render slider Latest News
function sliderLatestNews(latestNews){
    let latestNewsSliders = document.querySelector('.latest-news-slider')
    let latestNewsSlide = '';
    latestNews.forEach(function (data, i) {
        latestNewsSlide +=
            `
      <div class="latest-news-slider__slide">
          <img src="${latestNews[i]['url']}" alt="img ${latestNews[i]['title']}">
          <div class="latest-news-slider__text-container">
              <h4 class="latest-news-slider__title">${latestNews[i]['title']}</h4>
              <p class="latest-news-slider__sub-title">${latestNews[i]['sub-title']}</p>
              <div class="latest-news-slider__link">
                  <span class="latest-news-slider__link-date">${latestNews[i]['date']}</span>
                  <a class="latest-news-slider__link-link" href="${latestNews[i]['link']}">Read more</a>
              </div>
          </div>
      </div>`
    });
    latestNewsSliders.innerHTML = latestNewsSlide
    startLatestNewsSlider();
}
// slider Latest News ("Slick slider")
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 1,
                    slidesToScroll: 1,
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