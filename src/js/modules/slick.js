module.exports = function() {

  // begin Slick slider

  $('#top-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });

  $('#slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed:5000,
    cssEase: 'linear'
  });

  // end Slick slider

};