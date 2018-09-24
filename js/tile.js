(function() {
  'use strict';

  angular
    .module('tile.hw.localweather', [])
    .controller('tile.hw.localweather', TileCtrl)
    .dependencies = ['HwLocalweatherService'];

  TileCtrl.$inject = ['$scope', 'HwLocalweatherService'];

  function TileCtrl ($scope, HwLocalweatherService) {

    // The tile object representing this tile is accessed at $scope.tile
    var tile = $scope.tile;

    // var weather = HwLocalweatherService.get(); to rotate on the tile if needed
    // var length = weather.length;

    // Depending on the template, display different content.
    if (tile.template === 'info') {

      HwLocalweatherService.getTileTimesSmall()
      .then(function(content) {
        tile.content = content;
        tile.ready = ready();
      });
    }
    if (tile.template === 'multiline') {
      HwLocalweatherService.getTileTimes()
      .then(function(content) {
        tile.content = content;
        tile.ready = ready();
      });
    }

    //   tile.content.push({
    //     title: 1,
    //     subtitle: 'app.hw-localweather.tile.TITLE1',
    //     translationMap: {
    //       title: false,
    //       subtitle: true
    //     }
    //   });

    //   tile.content.push({
    //     title: 2,
    //     subtitle: 'app.hw-localweather.tile.TITLE2',
    //     translationMap: {
    //       title: false,
    //       subtitle: true
    //     }
    //   });

    // }
    // tile.ready();
  }

})();
