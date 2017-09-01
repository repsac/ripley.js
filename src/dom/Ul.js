Ripley.Ul = function () {

    Ripley.Element.call( this, 'ul' );

}

Ripley.Ul.prototype = Object.create( Ripley.Element.prototype );

Ripley.Ul.prototype.addItem = function ( value ) {

    var li = new Ripley.Li( value );

    this.appendChild( li );

    return li;

}
