//
//++++++++++++++ PAGE PRELOADER ++++++++++++++++++++++++++++++++++++++++++++++
$(window).on('load', function () {
    let $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(2000).fadeOut('slow');
    $preloader.delay(2000).fadeOut('slow');
});