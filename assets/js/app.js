(function () {
    var header = $('.header')[0];

    function changeHeader() {
        var scrollTop;
        if (header) {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //header.classList.toggle('header-background', scrollTop >= 50 || document.body.classList.contains('nav-open'));
            header.classList.toggle('header--scrolled', scrollTop >= $('#content')[0].offsetTop);
        }
    }

    var didScroll = false;
    $(window).scroll(function () {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            didScroll = false;
            changeHeader();
        }
    }, 100);
    changeHeader();
    $('a[href*=\\#]').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
        event.preventDefault();
    });
})();
var loadScripts = function () {
    var footer = $('footer');
    $('body').css('opacity', '1');
    //$('#content').css('margin-bottom', footer.outerHeight());
};
window.addEventListener('load', loadScripts);
