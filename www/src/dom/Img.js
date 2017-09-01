Ripley.Img = function ( img ) {

    Ripley.Element.call( this, 'img' );
 
    if ( img !== undefined ) this.setImage( img );

}

Ripley.Img.prototype = Object.create( Ripley.Element.prototype );

Ripley.Img.prototype.setImage = function ( img, callback ) {

    this.dom.src = img;

    if ( callback !== undefined ) callback( this );

}
