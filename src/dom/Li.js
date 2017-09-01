Ripley.Li = function ( value ) {

    Ripley.Element.call( this, 'li' );

    if ( value !== undefined ) this.setText( value );

}

Ripley.Li.prototype = Object.create( Ripley.Element.prototype );
