module.exports = function() {

  // begin menu
  $('#burger input').on('click', function () {
    $('#menu').slideToggle();
  });

  $('.menu__link-btn').on('click', function() {
    var item = $(this).parents('.menu__item');
    $(item).toggleClass('active');
    $(item).children('.menu__sublist-wrap').slideToggle();
  });

  $('.menu__sublink-btn').on('click', function() {
    var item = $(this).parents('.menu__subitem');
    $(item).toggleClass('active');
    $(item).children('.menu__sub-sublist-wrap').slideToggle();
  });
  // end menu

};