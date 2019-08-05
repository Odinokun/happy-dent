module.exports = function() {

  // begin bottom menu
  $('.footer-open-btn').on('click', function() {
    $(this).toggleClass('active');
    $('#footer').toggleClass('active');
  });
  // end bottom menu

};