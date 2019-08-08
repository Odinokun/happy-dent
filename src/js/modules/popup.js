module.exports = function() {

  // begin work-popup
  $('.work-popup-open').on('click', function() {
    $('.work-popup, .popup__layer').fadeIn();
    $('body').addClass('no-scroll');
  });
  // end work-popup



  // begin popup open
  // $('.popup-open').on('click', function() {
  //   $('.popup, .popup__layer').fadeIn();
  // });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('.work-popup, .popup, .popup__layer').fadeOut();
    $('body').removeClass('no-scroll');
  });
  // end popup close

  // begin popup scroll
  // $(window).on('scroll', function() {
  //   $('.popup').css({'top': $(window).scrollTop() + 50});
  // }).scroll();
  // end popup scroll

};