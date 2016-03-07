angular.module("myApp").controller("navCtrl", function($scope, $window) {

  var  mn = $(".main-nav");
      mns = "main-nav-scrolled";

  $(window).scroll(function() {
    if( $(this).scrollTop() > "1" ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });


});
