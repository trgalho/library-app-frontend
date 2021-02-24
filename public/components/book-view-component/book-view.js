const baseUrl = './components/book-view-component/book-view';

function BookViewController( $scope, $location, $rootScope ){
    function viewDetails(){
        $location.path( `/book/${$scope.$ctrl.book.isbn}`);
    }

    $scope.viewDetails = viewDetails;
}

const BookViewComponent = {
    css: `${baseUrl}.css`,
    bindings: {
        book:'='
    },
    templateUrl: `${baseUrl}.html`,
    controller: [ "$scope", "$location", BookViewController ]
};

import { addStylesheet } from "../../helpers/StyleSheetHelper.js"

addStylesheet( BookViewComponent.css );

angular.module("libraryApp").component( "bookView", BookViewComponent );