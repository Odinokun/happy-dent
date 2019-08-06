module.exports = function () {

  // begin jquery-ui select
  $( ".select" ).selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "custom-select-menu" );
  // end jquery-ui select


  // begin jquery-ui datepicker

  $( ".appointment-form__datapicker" ).datepicker();
  // russian language
  // other lang https://github.com/jquery/jquery-ui/tree/master/ui/i18n
  ( function( factory ) {
    if ( typeof define === "function" && define.amd ) {

      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );
    } else {

      // Browser globals
      factory( jQuery.datepicker );
    }
  }( function( datepicker ) {

    datepicker.regional.ru = {
      closeText: "Закрыть",
      prevText: "&#x3C;Пред",
      nextText: "След&#x3E;",
      currentText: "Сегодня",
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
        "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
        "Июл","Авг","Сен","Окт","Ноя","Дек" ],
      dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
      dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
      dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
      weekHeader: "Нед",
      dateFormat: "dd.mm.yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.ru );

    return datepicker.regional.ru;

  } ) );
  // end jquery-ui datepicker

};