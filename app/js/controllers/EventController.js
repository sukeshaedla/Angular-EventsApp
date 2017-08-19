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
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directive Masterclass',
					creatorName: 'Aditya Vishal',
					duration: '1 hour',
					level: 'Abstract',
					abstract: "In this session, you will learn the advanced concepts of directive",
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'Sukesh Aedla',
					duration: '30 minutes',
					level: 'Introductory',
					abstract: "In this session, we will take a closer look at scopes",
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Aditya Vishal',
					duration: '2 hours',
					level: 'Abstract',
					abstract: "In this session, you will learn the advanced concepts of controllers",
					upVoteCount: 0
				}				
			]
		}

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};		
	}
);