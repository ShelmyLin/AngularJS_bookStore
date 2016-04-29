console.log("bookStoreService start");
(function(){
	console.log("data3");
	angular.module("bookStoreUi")
		.service('bookStoreService', bookStoreService);
	
	bookStoreService.$inject = ['$http'];
	console.log("service inject http");

	function bookStoreService($http){

		return {
			getBooksInfo: getBooksInfo,
			delBooksInfo: delBooksInfo
		};

		function getBooksInfo(){
			
			var books = [ ];
			// 注意json文件的格式，变量名需要加""
			$http.get('books.json').success(function(data){
			books = data;
			console.log("after get json: " + books);
			});
			return books;
		}
		function delBooksInfo(bookName){


		}

	}


})();
console.log("bookStoreService end");