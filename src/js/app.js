$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin Slick slider
  require('./modules/slick')();

  // begin bottom menu
  require('./modules/bottomMenu')();

  // begin phone mask
  require('./modules/maskedinput')();

  // begin jquery ui
  require('./modules/jquery-ui')();

  // begin Popup
  require('./modules/popup')();

  // begin Animate.css
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  require('./modules/waypoints')();
  require('./modules/animateCss')();

  // begin Fancybox3
  // require('./modules/fancybox')();

});