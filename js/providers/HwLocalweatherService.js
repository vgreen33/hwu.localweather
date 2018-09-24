(function () {
  'use strict';

  angular
  .module('providers.hw.localweather')
  .service('HwLocalweatherService', HwLocalweatherService);

  HwLocalweatherService.$inject = ['$q', '$http'];

  function HwLocalweatherService ($q, $http) {

    var STORAGE_ID = "hw.localweather";
    var endPointURL  = "https://api.myday.cloud/legacy/api/endpoint/";
    var _endPoint = "weatherproxy";

    this.getWeather = function(){
      var defered = $q.defer();
      var services = JSON.parse(localStorage.getItem(STORAGE_ID)) || [];

      var FIVE_MINUTES = 5 * 60 * 1000; // ms

      var msSinceCache = (new Date().getTime() - services.cacheTime)
      if(services && (msSinceCache <= FIVE_MINUTES)){
        services.currentTime = new Date().getTime();
        defered.resolve(services);
        return defered.promise;
      }

      services = {};
      services.allWeather = [];
      $http.get(endPointURL + _endPoint)
      .then(function(allWeather){

      angular.forEach(allWeather.data.query.results.channel, function(item){  
        var serviceInstance = {};
        serviceInstance.city = item.location.city;
        serviceInstance.temp = Math.round((item.item.condition.temp - 32) * (5/9)) + "°C";
        serviceInstance.conditions = item.item.condition.text;
        services.allWeather.push(serviceInstance);
      });
      services.cacheTime = services.currentTime = new Date().getTime();

      localStorage.setItem(STORAGE_ID, JSON.stringify(services));
      defered.resolve(services);
          console.log(services);
    });
    return defered.promise;
  };
 }  

})();