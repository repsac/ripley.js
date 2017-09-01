Ripley.TabBar = function ( callback ) {

    this.constructor = Ripley.TabBar;

    Ripley.Panel.call( this, callback );

}


Ripley.TabBar.name = 'TabBar';

Ripley.TabBar.class = 'TabBar';

Ripley.TabBar.ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
};

Ripley.TabBar.prototype = Object.create( Ripley.Panel.prototype );

Ripley.TabBar.prototype.__init = function () {

    this.ul = new Ripley.Ul();
    this.element.appendChild( this.ul );
    
    this.ul.setStyles( this.constructor.ulStyle );

}

Ripley.TabBar.prototype.addTab = function ( tab, callback ) {

    if ( typeof( tab ) == 'string' ) tab = new Ripley.Tab( tab );

    tab.onClick( function () { } );
    this.addChild( tab );
    this.ul.appendChild( tab.element );

    var scope = this;
    tab.onClick( function () {
        
        var active = scope.activeTab();
        if ( active !== undefined ) active.setInactive();
        tab.setActive();

    } );

    this.element.appendChild( tab.buttonView.element );

    if ( callback !== undefined ) callback( tab );

}

Ripley.TabBar.prototype.tab = function ( name ) {

    return this._findTab( 'name', name );

}

Ripley.TabBar.prototype.activeTab = function () {

    return this._findTab( 'active', true );

}

Ripley.TabBar.prototype.setActive = function ( arg ) {
    
    if ( typeof arg == "number" ) {

        this.children[ arg ].setActive();

    } else if ( typeof arg == "string" ) {

        this.tab( arg ).setActive();

    } else if ( arg instanceof Ripley.Tab ) {

        arg.setActive();

    } else {

        throw "Unsupported argument type: " + typeof arg;
    
    }

}

Ripley.TabBar.prototype._findTab = function ( key, value ) {

    for ( i = 0; i < this.children.length; i ++ ) {
        
        var child = this.children[ i ];

        if ( ! ( child instanceof Ripley.Tab ) ) continue;
        
        var match = false;

        if ( typeof child[ key ] == 'function' ) {

            match = child[ key ]() == value;

        } else {
        
            match = child[ key ] == value;
        
        }

        if ( match ) return child;

    }

}
