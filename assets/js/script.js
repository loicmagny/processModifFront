$('.tooltipped').tooltip();
$('.collapsible').collapsible();
$('document').on('ready', function () {
    var instance = M.Carousel.init({
        fullWidth: true,
        indicators: true
      });
});
