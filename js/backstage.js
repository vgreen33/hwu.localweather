(function () {
  'use strict';

  angular
    .module('app.hw.localweather', [])
    .config(['$stateProvider', config]);

  config.$inject = ['$stateprovider'];
  
  function config ($stateProvider) {

    var main = {
      appId: 'hw.localweather',
      html: 'main',
      controller: 'HwLocalweatherCtrl as vm',
      resolve: {
          $title: function () { return 'weather'; },
          $flex: function () { return true },
          $search: function () { return true },
      },
      dependencies: ['HwLocalweatherService']
    };

    $stateProvider.appState(main);
  }


})();
