module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!

  $(".works-gallery__item").waypoint(function() {
    $(this).addClass("animated bounceInUp");
  }, {
    offset: "100%"
  });

  // end Animate CSS + WayPoints javaScript Plugin

};