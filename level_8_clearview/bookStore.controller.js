console.log("bookStore.controller start");
(function(){
	console.log("data1");
	// angular.module('bookStoreUi', ['ngTable','store-products', 'bookStoreService'])
	// 	.controller('StoreController', StoreController);

	angular.module('bookStoreUi', ['ngTable','store-products'])
		.controller('StoreController', StoreController);

	//StoreController.$inject = ['$http', 'NgTableParams', 'bookStoreService'];
	StoreController.$inject = ['$http', 'NgTableParams'];

	// function StoreController($http, NgTableParams, bookStoreService)
	function StoreController($http, NgTableParams){   // ????? 这句不能
		console.log("---->>>> go to here ");  // 这个显示不出来，而level_7项目中，这里可以打印出来，说明上面这句注入有问题。
		var store = this;
		store.product = [ ];
		// 注意json文件的格式，变量名需要加""
		$http.get('books.json').success(function(data){
			store.product = data;
			console.log("after get json: " + store.product);
			store.bookTable = createTable(data);
			console.log("after createTable: " + data);
		});
		
		// bookStoreService.getBooksInfo().then(function(data){

		// 		store.product = data;
		// 		store.bookTable = createTable(data);
		// 		console.log(data);
		// 	}, function(error){

		// 	}
		// );

		// var result = bookStoreService.delBooksInfo("hello");
		// console.log("delBooksInfo: " + result);

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