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

  $('#team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.work-popup__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });

  // end Slick slider

};