/* scripts/services/time.js */

(function() {
	
	'use strict';
	
	angular
		.module('timeTracker')
		.factory('time', time);
		
		
		function time($resource) {
			
			// ngResource call to the static data
			var Time = $resource('data/time.json');
			
			
			function getTime() {
				
				// $promise.then allows interception of the results
				return Time.query().$promise.then(function(results) {
					return results;
				}, function(error) {
					console.log(error);
				});
				
			}
			
			return {
				getTime: getTime
			};
			
		}
	
})();
