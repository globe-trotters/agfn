angular.module('myApp').controller('afterSearchCtrl', function($scope, $element) {

    //lets search the entire world
    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-90, -180),
      new google.maps.LatLng(90, 180));

    //finds the element that's typed into
    var input = $element[0].children[0];

    var options = {
      bounds: bounds,
      //only places results, no businesses
      types: ['geocode']
    };

  // new autocomplete object that will enable the autocomplete functionality
  var autocomplete = new google.maps.places.Autocomplete(input, options);

  var getPlaceDetails = function() {
    // gets the address data from autocomplete
    // creates object for location (backend requires location to be an object so we can get lat/long)
    $scope.afterData = {};
    var data = autocomplete.getPlace();
    console.log(data);

    // extract state data
    var city = data.address_components[0];
    var state;
    var country;
    var fullLocation;
    if(data.address_components.length === 3) {
      state = data.address_components[1];
      country = data.address_components[2];
    }
    else{
      state = data.address_components[2];
      country = data.address_components[3];

    }



    // adds to afterData from Data
    $scope.afterData.address_string = data.formatted_address;
    $scope.afterData.city = city.long_name;
    $scope.afterData.state = state.long_name;
    $scope.afterData.country = country.long_name;
    $scope.afterData.countryShort = country.short_name;
    $scope.afterData.place_id = data.place_id;
    $scope.afterData.lat = data.geometry.location.lat();
    $scope.afterData.lng = data.geometry.location.lng();
    $scope.afterData.location = data.geometry.location;
    $scope.afterData.map_url = data.url;
    $scope.$apply();
    // sends to afterData scope
    console.log($scope.afterData.address_string);
    console.log($scope.afterData.lat);
    console.log($scope.afterData.lng);
    console.log($scope.afterData.location);

    console.log($scope.afterData.city);
    console.log($scope.afterData.state);
    console.log($scope.afterData.country);

    var locationString = $scope.afterData.city +", "+ $scope.afterData.state +", "+ $scope.afterData.countryShort;
    $scope.afterData.locationString = locationString;
    console.log($scope.afterData.locationString);
    console.log($scope.afterData);


  };


  // when new place is selected, log results obj of place
  //WITHOUT THIS, DATA IS NOT GRABBED
  autocomplete.addListener('place_changed', getPlaceDetails);

});
