Ripley.CameraRegistry = function () {

    this.constructor = Ripley.CameraRegistry;
    this.cameras = new Array();
    this.__registry = {};

    var scope = this;

    var createCamera = function( params, klass, dom, callback ) {

        scope.create( params, klass, dom, callback );

    };
    Ripley.signals.createCamera.add( createCamera );

    var activeCamera = function( viewportID, callback ) {
    
        callback( scope.__registry[ viewportID ]  );
    
    }
    Ripley.signals.activeCamera.add( activeCamera );

    var registerCamera = function( camera, viewportID, callback ) {

        scope.__registry[ viewportID ] = camera;

        callback( camera );

    };
    Ripley.signals.registerCamera.add( registerCamera );

    var camera = function ( name, callback ) {

        scope.camera( name, callback );

    }
    Ripley.signals.camera.add( camera );

    var cameras = function ( callback ) {

        var collection = new Array();

        for ( key in scope.__registry ) {

            collection.push( {
                name: scope.__registry[ key ].name,
                id: scope.__registry[ key ].id  
            } );

        }

        callback( collection );

    }
    Ripley.signals.cameras.add( cameras );

}

Ripley.CameraRegistry.prototype.create = function ( params, dom, klass, callback ) {

    if ( params === undefined ) params = {};
    if ( params.type === undefined ) params[ 'type' ] = 'persp';

    if ( params.name === undefined ) {

        var index = 1;

        var name = params.type + index;

        while ( true ) {

            if ( this.camera( name ) == null ) break;

            index ++;
            name = params.type + index;

        }

        params[ 'name' ] = name;

    }

    var scope = this;
    var internalCallback = function ( camera ) {
    
        if ( params.type == 'persp' ) {

            camera.setPerspective();

        } else {

            camera.setOrthographic();

        }

        scope.cameras.push( camera );
 
        if ( callback !== undefined ) callback( camera );

    };

    var camera = new klass( params, dom, internalCallback);

}

Ripley.CameraRegistry.prototype.camera = function ( name, callback ) {

    for ( i = 0; i < this.cameras.length; i ++ ) {

        if ( this.cameras[ i ].name === name ) {
            
            callback( this.cameras[ i ] );
            break;

        }

    }

}

