Ripley.MenuItem = function ( label, callback ) {

    this.constructor = Ripley.MenuItem;

    Ripley.BaseMenu.call( this, label, callback );
    
}

Ripley.MenuItem.class = 'MenuItem';

Ripley.MenuItem.labelClass = 'MenuItemLabel';

Ripley.MenuItem.prototype = Object.create( Ripley.BaseMenu.prototype );

Ripley.MenuItem.prototype.__init = function () {

    this.element.appendChild( this.label );
    this.element.setClass( Ripley.MenuItem.class );
    this.label.setClass( Ripley.MenuItem.labelClass );

}
