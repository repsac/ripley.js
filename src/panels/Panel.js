Ripley.Panel = function ( callback ) {

    this.element = new Ripley.Div();

    Ripley.Node.call( this, callback ); 

    if ( this.name === undefined )  throw 'required "name" property not set';
    
}

Ripley.Panel.prototype = Object.create( Ripley.Node.prototype );

Ripley.Panel.prototype.width = function () {
    
    return this.element.dom.offsetWidth;

}

Ripley.Panel.prototype.height = function () {
    
    return this.element.dom.offsetHeight;

}

Ripley.Panel.prototype.aspect = function () {
    
    return this.width() /  this.height();

}

Ripley.Panel.prototype.addPanel = function ( panel, callback ) {

    this.element.appendChild( panel.element );
    
    this.addChild( panel );

    if ( callback !== undefined ) callback( panel, this );
    
}

Ripley.Panel.prototype.show = function () {

    this.element.setStyle( 'display', 'block' );

    return this;

}

Ripley.Panel.prototype.hide = function () {

    this.element.setStyle( 'display', 'none' );

    return this;

}
