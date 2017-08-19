'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){

		$scope.sortorder = 'name';
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1288323623006',
			time: '12:00 pm',
			price: 34,
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
					duration: '1',
					level: 'Abstract',
					abstract: "In this session, you will learn the advanced concepts of directive",
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'Sukesh Aedla',
					duration: '2',
					level: 'Intermediate',
					abstract: "In this session, we will take a closer look at scopes",
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Aditya Vishal',
					duration: '4',
					level: 'Advanced',
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