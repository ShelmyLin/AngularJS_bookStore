(function(){
	
	// var app = angular.module('bookStore', ['ngTable','store-products']); 

	// app.controller("StoreController", ['$http', ''function($http){
	// 	//this.product = books;

	// 	var store = this;
	// 	store.product = [ ];
	// 	console.log("hello");
	// 	// 注意json文件的格式，变量名需要加""
	// 	$http.get('books.json').success(function(data){
	// 		console.log(data);
	// 		store.product = data;
	// 	});



	// }]);

	var app = angular.module('bookStore', ['ngTable','store-products']); 

	
	app.controller('StoreController', StoreController);

	StoreController.$inject = ['$http', 'NgTableParams'];
	function StoreController($http, NgTableParams){
		console.log("---->>>> go to here ");
		var store = this;
		store.product = [ ];
		// 注意json文件的格式，变量名需要加""
		$http.get('books.json').success(function(data){
			store.product = data;
			console.log("after get json: " + store.product);
			store.bookTable = createTable(data);
			console.log("after createTable: " + data);
		});

		// page setting
		var initpageSize = Number(localStorage.getItem('page_size') || 20);
		store.pageSize   = initpageSize;
		store.pageSizes  = [10, 20, 30, 50, 100];

		// create table 这里store.product为空，是因为上面的$http.get，数据还没回来。使用resolve解决。
		// store.bookTable  = createTable(store.product);
		// console.log("after createTable 2: " + store.product);

		function createTable(data){
			var initParams = {
        		sorting: {name: "asc"},
        		count: store.pageSize
      		};
      		var initSettings = {
        		counts: [],
        		paginationMaxBlocks: 13,
        		paginationMinBlocks: 2,
        		dataset: data
      		};
      		return new NgTableParams(initParams, initSettings);
		}


	}



	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(book){
			book.reviews.push(this.review);
			this.review = {};

		};
		
	});


})();