Ripley.Element = function ( type ) {

    Ripley.Node.call( this );

    // if not a string assume an existing dom was passed
    if ( typeof type == 'string' ) type = document.createElement( type );
    this.dom = type;

    this.setId( this.id );

}

Ripley.Element.prototype = Object.create( Ripley.Node.prototype );

Ripley.Element.prototype.setStyle = function ( style, value ) {

    this.dom.style[ style ] = value;

    // Compensate for a stupid firefox bug
    if ( style == 'float' && /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) ) this.dom.style[ 'cssFloat' ] = value;

    return this;

}

Ripley.Element.prototype.setStyles = function ( style ) {

    for ( var key in style ) this.setStyle( key, style[ key ] );

    return this;

}

Ripley.Element.prototype._setDomProperty = function ( prop, value ) {

    this.dom[ prop ] = value;

    return this;

}

Ripley.Element.prototype.setId = function ( value ) {

    this._setDomProperty( 'id', value );

    return this;

}

Ripley.Element.prototype.setClass = function ( value ) {

    this._setDomProperty( 'className', value );

    return this;

}

Ripley.Element.prototype.setHTML = function ( value ) {

    this._setDomProperty( 'innerHTML', value );

    return this;

}

Ripley.Element.prototype.setText = function ( value ) {

    this._setDomProperty( 'innerText', value );

    return this;

}

Ripley.Element.prototype.addEventCallback = function( event, callback ) {
    
    this._setDomProperty( event, callback );

    return this;

}

Ripley.Element.prototype.removeChild = function ( child ) {

    this.dom.removeChild( child.dom );

    this.children.pop( child );

}

Ripley.Element.prototype.appendChild = function( child ) {
    
    if ( ! ( child instanceof Ripley.Element ) && typeof child == 'object' ) child = new Ripley.Element( child );

    this.dom.appendChild( child.dom );
    
    this.addChild( child );

    return this;

}
