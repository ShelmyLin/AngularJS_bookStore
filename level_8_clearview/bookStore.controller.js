console.log("bookStore.controller start");
(function(){
	console.log("data1");
	angular.module('bookStoreUi', ['ngTable','store-products', 'bookStore-service'])
		.controller('StoreController', StoreController);

	StoreController.$inject = ['$http', 'NgTableParams','bookStoreService'];

	function StoreController($http, NgTableParams, bookStoreService){   
		console.log("---->>>> go to here ");  // 这个显示不出来，而level_7项目中，这里可以打印出来，说明上面这句注入有问题。 解决：bookStoreService的声明有问题
		var store = this;
		store.product = [ ];

		// //注意json文件的格式，变量名需要加""
		// $http.get('books.json').success(function(data){
		// 	store.product = data;
		// 	console.log("after get json: " + store.product);
		// 	store.bookTable = createTable(data);
		// 	console.log("after createTable: " + data);
		// });
		

		store.product = bookStoreService.getBooksInfo();
		console.log(store.product.length);
		store.bookTable = createTable(store.product);
		// create table 这里store.product为空，是因为上面的service数据还没回来。使用resolve解决。


		// page setting
		var initpageSize = Number(localStorage.getItem('page_size') || 20);
		store.pageSize   = initpageSize;
		store.pageSizes  = [10, 20, 30, 50, 100];


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

		function sleep(milliseconds) {
			console.log("i will sleep for " + milliseconds + " milliseconds");
  			var start = new Date().getTime();
  			for (var i = 0; i < 1e7; i++) {
   			if ((new Date().getTime() - start) > milliseconds){
      			break;
    		}
  		}
}


	}

	angular.module('bookStoreUi')
		.controller('ReviewController', ReviewController);

	function ReviewController(){
		this.review = {};
		this.addReview = function(book){
			book.reviews.push(this.review);
			this.review = {};
		};
	}




	// angular.module("bookStoreUi")
	// 	.service('bookStoreService', bookStoreService);
	
	// bookStoreService.$inject = ['$http'];
	// console.log("service inject http");

	// function bookStoreService($http){

	// 	return {
	// 		getBooksInfo: getBooksInfo,
	// 		delBooksInfo: delBooksInfo
	// 	};

	// 	function getBooksInfo(){
			
	// 		var books = [ ];
	// 		// 注意json文件的格式，变量名需要加""
	// 		$http.get('books.json').success(function(data){
	// 			books = data;
	// 			console.log("after get json: " + books);
	// 		});
	// 		return books;
	// 	}
	// 	function delBooksInfo(bookName){
	// 		return bookName;

	// 	}

	// }




})();

console.log("bookStore.controller end");