Ripley.BaseMenu = function ( value, callback ) {

    this.label = new Ripley.Span();
    this.label.setHTML( value );

    Ripley.Widget.call( this, new Ripley.Li(), callback );

}

Ripley.BaseMenu.prototype = Object.create( Ripley.Widget.prototype );

Ripley.BaseMenu.prototype.clear = function ( callback ) {

    while ( this.children.length > 0 ) {

        this.removeItem( this.children[ i ] );

    }

    if ( callback !== undefined ) callback( this );

}

Ripley.BaseMenu.prototype.removeItem = function ( item ) {

    this.children.pop( item );
    this.ul.removeChild( item.element );

}


