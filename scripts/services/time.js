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
			
			
			// use Moment.js to get the duration of the time entry
			function getTimeDiff(start, end) {
				
				var diff = moment(end).diff(moment(start));
				var duration = moment.duration(diff);
				
				return {
					duration: duration
				}
				
			}
			
			
			// add up the total time for all time entries
			function getTotalTime(timeentries) {
				
				var totalMilliseconds = 0;
				
				angular.forEach(timeentries, function(key) {
					totalMilliseconds += key.loggedTime.duration._milliseconds;
				});
				
				// after 24hrs, the Moment.js duration obj. reports the next
				// unit up, which is days.
				// using the asHours method and rounding down with Math.floor
				// gives us the total hour, instead.
				return {
					hours: Math.floor(moment.duration(totalMilliseconds).asHours()),
					minutes: moment.duration(totalMilliseconds).minutes()
				}
				
			}
			
			return {
				getTime: getTime,
				getTimeDiff: getTimeDiff,
				getTotalTime: getTotalTime
			}
			
		}
	
})();
