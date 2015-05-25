/* scripts/controllers/TimeEntry.js */

(function() {
	
	'use strict';
	
	angular
		.module('timeTracker')
		.controller('TimeEntry', TimeEntry);
		
		
		// inject time service (time.js)
		function TimeEntry(time) {
			
			// ViewModel, the capture variable
			var vm = this;
			
			vm.timeentries = [];
			
			// fetch time entries from static JSON file
			// place results in vm.timeentries array
			time.getTime().then(function(results) {
				vm.timeentries = results;
				console.log(vm.timeentries);
			}, function(error) {
				console.log(error);
			});
			
			
			// updates values in the 'total time' box by
			// calling getTotalTime method on the time service
			function updateTotalTime(timeentries) {
				vm.totalTime = time.getTotalTime(timeentries);
			}
			
		}
	
})();
