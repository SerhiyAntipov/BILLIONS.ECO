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