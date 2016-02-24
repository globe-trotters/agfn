angular.module('myApp').controller('homeSearchCtrl', function($scope) {

    //lets search the entire world
    var bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-90, -180),
      new google.maps.LatLng(90, 180));

    //finds the element that's typed into
    var input = document.getElementById('home-search-input');

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
    $scope.homeData = {};
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



    // adds to homeData from Data
    $scope.homeData.address_string = data.formatted_address;
    $scope.homeData.city = city.long_name;
    $scope.homeData.state = state.long_name;
    $scope.homeData.country = country.long_name;
    $scope.homeData.countryShort = country.short_name;
    $scope.homeData.place_id = data.place_id;
    $scope.homeData.lat = data.geometry.location.lat();
    $scope.homeData.lng = data.geometry.location.lng();
    $scope.homeData.location = data.geometry.location;
    $scope.homeData.map_url = data.url;
    $scope.$apply();
    // sends to homeData scope
    console.log($scope.homeData.address_string);
    console.log($scope.homeData.lat);
    console.log($scope.homeData.lng);
    console.log($scope.homeData.location);

    console.log($scope.homeData.city);
    console.log($scope.homeData.state);
    console.log($scope.homeData.country);

    locationString = $scope.homeData.city +", "+ $scope.homeData.state +", "+ $scope.homeData.countryShort;
    $scope.homeData.locationString = locationString;
    console.log($scope.homeData.locationString);
    console.log($scope.homeData);


  };


  // when new place is selected, log results obj of place
  //WITHOUT THIS, DATA IS NOT GRABBED
  autocomplete.addListener('place_changed', getPlaceDetails);

});
