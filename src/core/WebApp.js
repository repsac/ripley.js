Ripley.WebApp = function ( params ) {

    this.constructor = Ripley.WebApp;
 
    Ripley.Node.call( this );
    
    params = ( params === undefined ) ? {} : params;

    this.container = ( params.container !== undefined ) ? params.container : document.body;

    if ( params.title !== undefined ) {
        
        this.setTitle( params.title );
        this.name = document.title;

    }

    this.cameraRegistry = new Ripley.CameraRegistry();

}

Ripley.WebApp.name = 'WebApp';

Ripley.WebApp.prototype = Object.create( Ripley.Node.prototype );

Ripley.WebApp.prototype.addPanel = function ( panel ) {
    
    this.addChild( panel );

    this.container.appendChild( panel.element.dom );

    return this;

}

Ripley.WebApp.prototype.panel = function ( name ) {

    for ( i = 0; i < this.children.length; i ++ ) {
    
        if ( children[ i ].name === name ) return children[ i ];
    
    }

}

Ripley.WebApp.prototype.setTitle = function ( title ) {

    document.title = title;

}
