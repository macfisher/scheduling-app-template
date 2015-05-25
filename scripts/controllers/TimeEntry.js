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
		
		
		// submits time entry via ng-click(Log Time)
		vm.logNewTime = function() {
			
			// check that clock-in time isn't after clock-out time
			if (vm.clockOut < vm.clockIn) {
				alert("You can't clock out before you clock-in!");
				return;
			}
			
			// check if time entry is > 0
			if (vm.clockOut - vm.clockIn === 0) {
				alert("Your time entry has to be greater than zero!");
				return;
			}
			
			vm.timeentries.push(
				{
					"user_id":1,
					"user_firstname":"TestFirstName",
					"user_lastname":"TestLastName",
					"start_time":vm.clockIn,
					"end_time":vm.clockOut,
					"loggedTime": time.getTimeDiff(vm.clockIn, vm.clockOut),
					"comment":vm.comment
				}
			);
			
			updateTotalTime(vm.timeentries);
			
			vm.comment = "";
			
		}
	
})();
