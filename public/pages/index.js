import { BookListPage } from "./book-list-page/book-list.js";
import { BookInfoPage } from "./book-info-page/book-info.js";

const libraryApp = angular.module("libraryApp");

libraryApp.config( function pagesConfig( $routeProvider){

    $routeProvider
    .when('/book/:isbn', BookInfoPage )
    .when('/', BookListPage )
    //.otherwise( BookInfoPage );
});

