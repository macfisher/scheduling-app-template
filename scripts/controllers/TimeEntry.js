/* scripts/controllers/TimeEntry.js */

(function() {
	
	'use strict';
	
	angular
		.module('timeTracker')
		.controller('TimeEntry', TimeEntry);
		
		
		// inject time dependency (time service)
		function TimeEntry(time) {
			
			// ViewModel, the capture variable
			var vm = this;
			
			vm.timeentries = [];
			
		}
	
})();
