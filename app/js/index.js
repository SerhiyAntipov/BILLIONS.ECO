//
//++++++++++++++ MAIN MENU HEIGHT++++++++++++++++++++++++++++++++++++++++++++++
(function(){
    let navSocial = document.querySelector('.nav-social');
    window.addEventListener('scroll', function positionPoint() {
        if (document.documentElement.scrollTop > navSocial.clientHeight) {
            navSocial.style.padding = '10px 5px 10px 10px';
        } else {    
            navSocial.style.padding = '25px 5px 25px 10px';
        }
    });
})();

//
//++++++++++++++ PAGE PRELOADER ++++++++++++++++++++++++++++++++++++++++++++++
$(window).on('load', function () {
    let $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(2000).fadeOut('slow');
    $preloader.delay(2000).fadeOut('slow');
});
//
//++++++++++++++ POPUP MAP WINDOW ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    $(function () {
        $('.video__info').magnificPopup({
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
 //++++++++++++++ SMOOTH SCROLL +++++++++++++++++++++++++++++++++++++++++++++++++++
 (function () {
     let scroll = new SmoothScroll('a[href*="#"]', {
         ignore: '[data-scroll-ignore]',
         speed: 500,
         offset: 45
     });
 })();