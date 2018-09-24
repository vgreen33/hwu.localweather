(function (){
	'use strict';
	
	angular
	    .module('app.hw.localweather')
    	.controller('HwLocalweatherCtrl', HwLocalweatherCtrl);

    function HwLocalweatherSettingsCtrl($scope) {
    	var settingsObj = $scope.modal.app.tenantSettings;

		if(typeof settingsObj.baseUrl === 'undefined'){
			settingsObj.baseUrl = "/api/endpoint/weatherproxy";
		}
	}

})();