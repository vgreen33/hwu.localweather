(function () {
  'use strict';

  angular
    .module('app.hw.localweather')
    .controller('HwLocalweatherCtrl', HwLocalweatherCtrl);

  HwLocalweatherCtrl.$inject = ['HwLocalweatherService', 'App', '$scope'];

  function HwLocalweatherCtrl (HwLocalweatherService, App, $scope) {
    var vm = this;

    HwLocalweatherService.getWeather()
    .then(function(services) {
    	vm.services = services;
    });
  }

})();
