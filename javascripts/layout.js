// push footer to bottom if the window's height is greater than the height of the content
var pushFooterDown = function() {
  var headerHeight = $('.header').height();
  var footerHeight = $('.footer').height();
  var windowHeight = $(window).height();
  var pageContainerHeight = $('.page-container').height();
  var totalHeight = headerHeight + footerHeight + pageContainerHeight;
  if (totalHeight < windowHeight) {
    $('.page-container').height(windowHeight - footerHeight - headerHeight);
  }
}


$(document).ready(function(){
  pushFooterDown();
})