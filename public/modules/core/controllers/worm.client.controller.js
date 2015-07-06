'use strict';


angular.module('core').controller('WormController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.init = function(){
			alert("init worm!");
		};
	}
]);