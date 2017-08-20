'use strict';

describe('EditProfileController', function(){
	var $controllerConstructor, scope, mockGravatarUrlBuilder;

	beforeEach(module("eventsApp"));

	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
		mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function(){}})
	}));

	it('should build gravatar url based on the email provided', function(){
		var email = "sukesh@gmail.com";

		$controllerConstructor('EditProfileController', 
			{'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder})

		scope.getGravatarUrl(email);

		expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
	})
});