Ripley.Span = function ( value ) {

    Ripley.Element.call( this, 'span' );
 
    if ( value !== undefined ) this.setText( value );

}

Ripley.Span.prototype = Object.create( Ripley.Element.prototype );
