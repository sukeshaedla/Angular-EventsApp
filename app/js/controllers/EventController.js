'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '08/23/2017',
			time: '12:00 pm',
			location: {
				address: 'Google HeadQuarters',
				city: 'Mountain View',
				state: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png'
		}
	}
);