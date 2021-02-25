const baseUrl = './components/api-access-error-component/api-access-error';

function ApiAccessErrorController( $element ){
    const element = $element[0];
    element.setAttribute("card", true);
}

const ApiAccessErrorComponent = {
    css: `${baseUrl}.css`,
    templateUrl: `${baseUrl}.html`,
    controller: [ "$element",ApiAccessErrorController ]
};

import { StyleSheetHelper } from "/helpers/index.js"

StyleSheetHelper.addStylesheet( ApiAccessErrorComponent.css );

angular.module("libraryApp").component( "apiAccessError", ApiAccessErrorComponent );