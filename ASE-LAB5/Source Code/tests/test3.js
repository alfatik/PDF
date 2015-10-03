describe ('FullNameController',function(){
	
	beforeEach(module('starter.controllers'));
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
	describe('fullname',function(){
		it('Tests fullname function of FullNameController', function(){
			var $scope={};
			var controller=$controller('FullNameController',{$scope:$scope});
			var fname='ashok';
			var lname='yaganti';
			expect($scope.fullname(fname,lname)).toEqual('ashok and yaganti');
			
		});
	});
});