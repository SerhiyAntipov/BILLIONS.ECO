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