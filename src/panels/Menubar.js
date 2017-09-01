Ripley.Menubar = function ( callback ) {
    
    this.constructor = Ripley.Menubar;
    
    Ripley.Panel.call( this, callback );

}

Ripley.Menubar.name = 'Menubar';

Ripley.Menubar.class = 'Menubar';

Ripley.Menubar.ulClass = 'MenuList';

Ripley.Menubar.prototype = Object.create( Ripley.Panel.prototype );

Ripley.Menubar.prototype.__init = function () {

    this.ul = new Ripley.Ul();

    this.ul.setClass( this.constructor.ulClass );

    this.element.appendChild( this.ul );

}

Ripley.Menubar.prototype.addMenu = function ( menu, callback ) {

    if ( typeof( menu ) == 'string' ) {

        menu = new Ripley.Menu( menu );

    } else if ( ! menu instanceof Ripley.Widget ) {

        throw 'Unknown menu data type: ' + typeof( menu );

    }

    var scope = this;
    menu.onClick ( function () {
    
        if ( menu.visible() ) {

            menu.hide();

        } else {

            scope.hideMenus( function() { 
                
                menu.initCallbacks( 'onshow', function () {
                
                    menu.show();

                } );
                
            } );

        }

    } );

    this.ul.appendChild( menu.element );
    
    this.addChild( menu );

    if ( callback !== undefined ) callback( menu );

}

Ripley.Menubar.prototype.hideMenus = function ( callback ) {

    for ( i = 0; i < this.children.length; i ++ ) this.children[ i ].hide();

    if ( callback !== undefined ) callback();

}
