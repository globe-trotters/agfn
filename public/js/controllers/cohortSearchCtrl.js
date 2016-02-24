angular.module('myApp').controller('cohortSearchCtrl', function($scope, $element) {

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
    $scope.cohortData = {};
    var data = autocomplete.getPlace();
    console.log(data);

    // extract state data
    var city = data.address_components[0];
    var state;
    var country;
    var locationString;
    if(data.address_components.length === 3) {
      state = data.address_components[1];
      country = data.address_components[2];
    }
    else{
      state = data.address_components[2];
      country = data.address_components[3];

    }



    // adds to cohortData from Data
    $scope.cohortData.address_string = data.formatted_address;
    $scope.cohortData.city = city.long_name;
    $scope.cohortData.state = state.long_name;
    $scope.cohortData.country = country.long_name;
    $scope.cohortData.countryShort = country.short_name;
    $scope.cohortData.place_id = data.place_id;
    $scope.cohortData.lat = data.geometry.location.lat();
    $scope.cohortData.lng = data.geometry.location.lng();
    $scope.cohortData.location = data.geometry.location;
    $scope.cohortData.map_url = data.url;
    $scope.$apply();
    // sends to cohortData scope
    console.log($scope.cohortData.address_string);
    console.log($scope.cohortData.lat);
    console.log($scope.cohortData.lng);
    console.log($scope.cohortData.location);

    console.log($scope.cohortData.city);
    console.log($scope.cohortData.state);
    console.log($scope.cohortData.country);

    locationString = $scope.cohortData.city +", "+ $scope.cohortData.state +", "+ $scope.cohortData.countryShort;
    $scope.cohortData.locationString = locationString;
    console.log($scope.cohortData.locationString);
    console.log($scope.cohortData);


  };


  // when new place is selected, log results obj of place
  //WITHOUT THIS, DATA IS NOT GRABBED
  autocomplete.addListener('place_changed', getPlaceDetails);

});
