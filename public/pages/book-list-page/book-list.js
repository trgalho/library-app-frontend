import { api, addStylesheet } from '../../helpers';

const baseUrl = './pages/book-list-page/book-list';

function BookListController($scope, $http) {
    $scope.itens = [];
  
    function reloadBooks(){
      $http.get(api.book).then( (books)=>{
        console.log( books, books.data );
        $scope.itens = books.data;        
      });    
    }
  
    $scope.reloadBooks = reloadBooks;
  
    reloadBooks();

    console.log( $scope, $http);
}  

export const BookListPage = {
    css: `${baseUrl}.css`,
    templateUrl: `${baseUrl}.html`,
    controller: [ "$scope", "$http", BookListController ]
};

addStylesheet( BookListPage.css );

angular.module("libraryApp").controller( "BookListController", BookListController );

