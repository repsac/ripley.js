Ripley.ButtonView = function ( callback ) {

    this.constructor = Ripley.ButtonView;
    
    Ripley.Panel.call( this, callback );

}

Ripley.ButtonView.name = 'ButtonView';

Ripley.ButtonView.class = 'ButtonViewInActive';

Ripley.ButtonView.activeClass = 'ButtonViewActive';

Ripley.ButtonView.prototype = Object.create( Ripley.Panel.prototype );

Ripley.ButtonView.prototype.addButton = function ( button ) {

    this.addChild( button );

    this.element.appendChild( button.element );

    return this;

}

Ripley.ButtonView.prototype.show = function ( callback ) {

    this.setVisible( true, callback );

}

Ripley.ButtonView.prototype.hide = function ( callback ) {

    this.setVisible( false, callback );

}

Ripley.ButtonView.setVisible = function ( visible, callback ) {

    var scope = this;
    var dispatch = {
        true: scope.constructor.activeClass,
        false: scope.constructor.class
    }
    this.element.setClass( dispatch[ visible ] );

    if ( callback !== undefined ) callback( this );

}
