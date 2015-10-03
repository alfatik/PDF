describe ('ContactController',function(){
	
	beforeEach(module('starter.controllers'));
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
	describe('contactname',function(){
		it('Tests contactname function of ContactController', function(){
			var $scope={};
			var controller=$controller('ContactController',{$scope : $scope});
			var name='ashok';
			
			expect($scope.contactname(name)).toEqual('ashok');
			
		});
	});
});