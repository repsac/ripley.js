Ripley.Tab = function ( name, callback ) {

    this.constructor = Ripley.Tab;

    this.name = name;

    Ripley.Widget.call( this, new Ripley.Li(), callback );

}

Ripley.Tab.class = 'Tab';

Ripley.Tab.activeClass = 'TabActive';

Ripley.Tab.prototype = Object.create( Ripley.Widget.prototype );

Ripley.Tab.prototype.__init = function () {

    this.__active = false;

    this.element.setStyles( {
        position: 'relative', 
        float: 'left'
    } );

    this.label = new Ripley.Span();
    this.label.setHTML( this.name ).setClass( 'TabLabel' );

    this.element.appendChild( this.label );

    this.buttonView = new Ripley.ButtonView();

}

Ripley.Tab.prototype.active = function () {

    return this.__active;

}

Ripley.Tab.prototype.setActive = function ( callback ) {

    this.setActiveState( true, callback );

}

Ripley.Tab.prototype.setInactive = function ( callback ) {

    this.setActiveState( false, callback );

}

Ripley.Tab.prototype.setActiveState = function ( state, callback ) {

    var styles = { true: this.activeClass, false: this.class };

    this.element.setClass( styles[ state ] );
   
    if ( state ) this.buttonView.show();
    else this.buttonView.hide();

    this.__active = state;

    if ( callback !== undefined ) callback( this );

}

Ripley.Tab.prototype.addButton = function ( name, callback ) {

    var button = new Ripley.Button();
    button.name = name;

    this.buttonView.addButton( button );

    if ( callback !== undefined ) callback( button );

}
