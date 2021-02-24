const baseUrl = './pages/book-info-page/book-info';

function BookInfoController( $scope, $routeParams, $http) {
    $scope.book = null;
  
    function reloadBookInfo(){
      const { isbn } = $routeParams;
      $http.get(`${api.book}/${isbn}`).then( (book)=>{
        console.log( book, book.data );
        $scope.book = book.data;        
      });    
    }
  
    $scope.reloadBooks = reloadBookInfo;
  
    reloadBookInfo();

    console.log( { $scope , $routeParams, $http });
}  

export const BookInfoPage = {
    css: `${baseUrl}.css`,
    templateUrl: `${baseUrl}.html`,
    controller: [ "$scope", "$routeParams", "$http", BookInfoController ],
    bindings:{
      isbn: "="
    }
};

import { addStylesheet } from "../../helpers/StyleSheetHelper.js"

addStylesheet( BookInfoPage.css );

angular.module("libraryApp").controller( "BookInfoController", BookInfoController );

