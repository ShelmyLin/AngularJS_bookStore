(function(){
	
	var app = angular.module('bookStore', []); 

	app.controller('StoreController', StoreController);

		StoreController.$inject = ['$http'];
		function StoreController($http){
	    var vm = this;
	    vm.teachers = 
	      [
	        {
	          "name":"Tom",
	          "student":
	          [
	            {
	              "name":"stuA",
	              "project":"projectA"
	            },
	            {  
	              "name":"stuB",
	              "project":"projectB"
	            }
	          ]
	        },
	        {
	          "name":"Jerry",
	          "student":
	          [
	            {
	              "name":"stuC",
	              "project":"projectC"
	            },
	            {
	              "name":"stuD",
	              "project":"projectD"
	            },
	            {"name":"stuE",
	            "project":"projectE"
	            }
	          ]
	        },
	        {
	          "name":"Lee",
	          "student":
	          [
	            {"name":"stuF",
	            "project":"projectF"
	            }
	          ]
	        }
	      ];
	}
})();
