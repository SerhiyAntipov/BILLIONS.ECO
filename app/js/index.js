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