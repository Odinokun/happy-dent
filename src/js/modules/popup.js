module.exports = function() {

  // begin work-popup
  $('.work-popup-open').on('click', function() {
    $('.work-popup').addClass('active');
    $('.work-popup__layer').fadeIn();
    $('body').addClass('no-scroll');
  });

  $('.work-popup__layer, .work-popup__close').on('click', function() {
    $('.work-popup').removeClass('active');
    $('.work-popup__layer').fadeOut();
    $('body').removeClass('no-scroll');
  });
  // end work-popup

  // begin work-popup
  // $('.work-popup-open').on('click', function() {
  //   $('.work-popup, .popup__layer').fadeIn();
  //   $('body').addClass('no-scroll');
  // });
  // end work-popup

  // begin popup close
  // $('.popup__layer, .popup__close').on('click', function() {
  //   $('.work-popup').removeClass('active');
  //   $('.popup__layer').fadeOut();
  //   $('body').removeClass('no-scroll');
  // });
  // end popup close

};