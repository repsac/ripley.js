Ripley.SubMenu = function ( name ) {

    this.constructor = Ripley.SubMenu;

    Ripley.Menu.call( this, name );

    var span = new Ripley.Span();
    span.setHTML( this.arrow ).setStyles( this.arrowStyle );

    this.label.appendChild( span );
    
    var scope = this;
    this.onMouseOver( function() { scope.show() } );
    this.onMouseOut( function() { scope.hide() } );

}

Ripley.SubMenu.arrowStyle = { float: 'right' };

Ripley.SubMenu.arrow = '>';

Ripley.SubMenu.spanStyle = { display: 'block' };

Ripley.SubMenu.liStyle = {

    position: 'relative'

};

Ripley.SubMenu.ulStyle = {

    listStyle: 'none',
    top: '0',
    padding: '0',
    margin: '0',
    display: 'none',
    position: 'absolute',
    left: '100%'

};

Ripley.SubMenu.liClass = 'SubMenuName';

Ripley.SubMenu.ulClass = 'SubMenu';

Ripley.SubMenu.spanClass = 'MenuItemLabel';

Ripley.SubMenu.prototype = Object.create( Ripley.Menu.prototype );
