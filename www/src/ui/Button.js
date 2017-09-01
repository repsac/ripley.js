Ripley.Button = function () {

    this.constructor = Ripley.Button;

    Ripley.Widget.call( this, new Ripley.Span() );

    this.img = new Ripley.Img();
    this.img.setStyle( 'width', 'inherit' )
    this.element.appendChild( this.img );

}

Ripley.Button.class = 'Button';

Ripley.Button.style = { display: 'block' };

Ripley.Button.prototype = Object.create( Ripley.Widget.prototype );

Ripley.Button.prototype.setIcon = function ( icon ) {
    
    this.img.setImage( icon );

}
