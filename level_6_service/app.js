(function(){
	
	var app = angular.module('bookStore', ['store-products']); 

	app.controller("StoreController", ['$http', function($http){
		//this.product = books;

		var store = this;
		store.product = [ ];
		console.log("hello");
		// 注意json文件的格式，变量名需要加""
		$http.get('books.json').success(function(data){
			console.log(data);
			store.product = data;
		});

	}]);


	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(book){
			book.reviews.push(this.review);
			this.review = {};

		};
		
	});


})();