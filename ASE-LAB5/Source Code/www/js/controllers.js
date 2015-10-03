angular.module('starter.controllers', [])



   .controller('ContactController',function($scope){
	   
	   $scope.cnames=[{name:'gebreel'},
		   {name:'ashok'},
		   {name:'mohamed'},
		   {name:'sasi'}];
		   $scope.contactname=function(name){
			   return name;
			   
		   }
   })
   
   
    .controller('FullNameController',function($scope){
	   
	   $scope.fnames=[{fname:'ashok', lname:'yaganti'},
		   {fname:'mohamed', lname:'gharibi'},
		  
		   ];
		   $scope.fullname=function(fname,lname){
			   return fname + " " + "and" + " " + lname;
			   
		   }
   })
   
    .controller('PhoneController',function($scope){
	   
	   $scope.phone=[{phonenum:'5713091416'},
		   {phonenum:'8494897668'},
		  
		   ];
		   $scope.phonenumber=function(phonenum){
			   return phonenum;
			   
		   }
   })

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})




.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
