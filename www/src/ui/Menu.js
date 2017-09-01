Ripley.Menu = function ( name, callback ) {
   
    if ( this.constructor == Ripley.Node ) this.constructor = Ripley.Menu;

    Ripley.BaseMenu.call( this, name, callback );

}

Ripley.Menu.liClass = 'MenuName';

Ripley.Menu.ulClass = 'Menu';

Ripley.Menu.spanClass = 'MenuLabel';

Ripley.Menu.spanClassOpen = 'MenuLabelOpen';
//@TODO: deprecate the internal styles
Ripley.Menu.liStyle = { float: 'left', position: 'relative' };

Ripley.Menu.spanStyle = { display: 'inline-block' };

Ripley.Menu.ulStyle = {
    
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'none'

}

Ripley.Menu.prototype = Object.create( Ripley.BaseMenu.prototype );

Ripley.Menu.prototype.__init = function () {

    this.element.appendChild( this.label );
    this.ul = new Ripley.Ul();
    this.element.appendChild( this.ul );

    this.setDomElements();

}

Ripley.Menu.prototype.addItem = function ( item, callback ) {

    this._add( item, Ripley.MenuItem, 'Unknown menu item data type: ', callback); 

}

Ripley.Menu.prototype.addSubMenu = function ( menu, callback ) {

    this._add( menu, Ripley.SubMenu, 'Unknown menu data type: ', callback);

}

//@TODO: I don't think I want this, reconsider
Ripley.Menu.prototype.setDomElements = function () {
    
    if ( this.liClass !== undefined ) this.element.setClass( this.liClass );
    if ( this.liStyle !== undefined ) this.element.setStyles( this.liStyle );

    if ( this.spanClass !== undefined ) this.label.setClass( this.spanClass );
    if ( this.spanStyle !== undefined ) this.label.setStyles( this.spanStyle );

    if ( this.ulClass !== undefined ) this.ul.setClass( this.ulClass );
    if ( this.ulStyle !== undefined ) this.ul.setStyles( this.ulStyle );

}

Ripley.Menu.prototype._add = function ( value, kls, msg, callback ) {
    
    if ( typeof( value ) == 'string' ) {
        
        widget = new kls( value );
        
    } else if ( ! ( menu instanceof Ripley.Widget ) ) {
 
        throw msg + typeof( value );

    }
    
    this.ul.appendChild( widget.element );
    
    this.addChild( widget );
    
    if ( callback !== undefined ) callback( widget );

}

Ripley.Menu.prototype.show = function ( callback ) {

    this.ul.setStyle( 'display', 'block');

    if ( this.spanClassOpen !== undefined ) this.label.setClass( this.spanClassOpen );

    if ( callback !== undefined ) callback( this );

}

Ripley.Menu.prototype.hide = function ( callback ) {

    this.ul.setStyle( 'display', 'none');

    this.label.setClass( this.spanClass );

    if ( callback !== undefined ) callback( this );

}

Ripley.Menu.prototype.visible = function () {

    return this.ul.dom.style.display != 'none';

}
