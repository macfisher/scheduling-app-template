/* scripts/services/time.js */

(function() {
	
	'use strict';
	
	angular
		.modules('timeTracker')
		.factory('time', time);
		
		
		function time($resource) {
			
			// ngResource call to the static data
			var Time = $resource('data/time.json');
			
			return {};
			
		}
	
})();
