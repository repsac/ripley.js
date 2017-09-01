Ripley.Label = function ( text ) {

    Ripley.Widget.call( this, new Ripley.Span( text ) );

}

Ripley.Label.prototype = Object.create( Ripley.Element.prototype );
