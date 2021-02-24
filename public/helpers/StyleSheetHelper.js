/**
 * 
 * @param {string} url 
 */
export function addStylesheet( url ){

    const link = document.createElement("link");
    link.setAttribute( "rel", "stylesheet");
    link.setAttribute( "type", "text/css" );
    link.setAttribute( "href", url );

    document.head.appendChild(link);
}