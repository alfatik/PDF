describe ('PhoneController',function(){
	
	beforeEach(module('starter.controllers'));
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
	describe('phonenumber',function(){
		it('Tests phonenumber function of PhoneController', function(){
			var $scope={};
			var controller=$controller('PhoneController',{$scope:$scope});
			var phonenum='5713091416';
			
			expect($scope.phonenumber(phonenum)).toEqual('5713091416');
			
		});
	});
});