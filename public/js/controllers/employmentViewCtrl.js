angular.module('myApp').controller('employmentViewCtrl', function($scope) {
  $('.cohortsCounter').each(function() {
    var $this = $(this);
    jQuery({
      Counter: 0
    }).animate({
      Counter: $this.text()
    }, {
      duration: 3900,
      easing: 'swing',
      step: function() {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
  $('.studentsCounter').each(function() {
    var $this = $(this);
    jQuery({
      Counter: 0
    }).animate({
      Counter: $this.text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function() {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
  $('.statesCounter').each(function() {
    var $this = $(this);
    jQuery({
      Counter: 0
    }).animate({
      Counter: $this.text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function() {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
});
