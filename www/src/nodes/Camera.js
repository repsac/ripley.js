Ripley.Camera = function ( params, dom, callback ) {

    this.name = params.name;

    if ( params === undefined ) params = {};
    var near = ( params.near === undefined ) ? 0.1 : params.near,
        far = ( params.far === undefined ) ? 2000 : params.far,
        fov = ( params.fov === undefined ) ? 50 : params.fov,
        width = dom.offsetWidth,
        height = dom.offsetHeight,
        camera = new THREE.CombinedCamera( width, height, fov, near, far, near, far ),
        persp = camera.cameraP,
        ortho = camera.cameraO;

    ortho.position = persp.position;
    ortho.rotation = persp.rotation;
    ortho.matrix = persp.matrix;
    ortho.up = persp.up;

    this._position = persp.position;
    this._matrix = persp.matrix
    this._up = persp.up;

    var scope = this;
    //@TODO the Setters will need Getters

    this.__defineGetter__( 'fov', function () {
        
        return camera.fov;

    } );
    this.__defineSetter__( 'fov', function ( val ) {
    
        camera.setFov( val );
        camera.updateProjectionMatrix();

    } );

    //@TODO because of the nature of CombinedCamera this
    //      property is a little dodgy and vague to work with
    //      the implementation almost makes a defineGetter
    //      of the same property name a little unfriendly
    this.__defineSetter__( 'size', function ( val ) {
    
        camera.setSize( val[0], val[1] );
        camera.updateProjectionMatrix();

    } );

    var setters = {

        t: function ( val ) {

            persp.position.set( val[0], val[1], val[2] );
            camera.updateProjectionMatrix();

        },

        tx: function ( val ) { 

            persp.position.x = val;
            camera.updateProjectionMatrix();
        
        },

        ty: function ( val ) { 

            persp.position.y = val;
            camera.updateProjectionMatrix();
        
        },

        tz: function ( val ) { 

            persp.position.z = val;
            camera.updateProjectionMatrix();
        
        },
        
        r: function ( val ) {
            
            x = val[0] * Math.PI / 180;
            y = val[1] * Math.PI / 180;
            x = val[2] * Math.PI / 180;
            //@TODO the order should somehow be configurable
            persp.rotation.set( x, y, x, 'XYZ' );
            camrea.updateProjectionMatrix();
        
        },

        rx: function ( val ) { 

            persp.rotation.x = val * Math.PI / 180;
            camera.updateProjectionMatrix();
        
        },

        ry: function ( val ) { 

            persp.rotation.y = val * Math.PI / 180;
            camera.updateProjectionMatrix();
        
        },

        rz: function ( val ) { 

            persp.rotation.z = val * Math.PI / 180;
            camera.updateProjectionMatrix();
        
        }

    };

    var getters = {

        t: function () {

            return { x: scope.tx, y: scope.ty, z: scope.tz };

        },

        tx: function () { 

            return persp.position.x;
        
        },

        ty: function () { 

            return persp.position.y;
        
        },

        tz: function () { 

            return persp.position.z;
        
        },
        
        r: function () {
            
            return { x: scope.rx, y: scope.ry, z: scope.rz };
        },

        rx: function () { 

            return persp.rotation.x / Math.PI * 180;
        
        },

        ry: function () { 

            return persp.rotation.y / Math.PI * 180;
        
        },

        rz: function () { 

            return persp.rotation.z / Math.PI * 180;
        
        }

    };

    this.__defineSetter__( 'near', function ( val ) {
    
        camera.near = val;
        camera.updateProjectionMatrix();

    } );

    this.__defineSetter__( 'far', function ( val ) {
    
        camera.far = val;
        camera.updateProjectionMatrix();

    } );

    this.__defineGetter__('isPerspective', function () {

        return scope.three.inPerspectiveMode;

    } );
    this.__defineGetter__('isOrthographic', function () {

        return scope.three.inOrthographicMode;

    } );

    this.controller = new Ripley.CameraController( scope );
    Ripley.Transform.call( this, setters, getters );

    this.orbit = new THREE.OrbitControls( this.controller, dom );
    this.orbit.addEventListener( 'change', Ripley.render );

    this.__defineSetter__( 'target', function ( val ) {

        if ( val instanceof Array ) {
         
            val = new THREE.Vector3( val[0], val[1], val[2] );

        }

        persp.lookAt( val );
        ortho.lookAt( val );
        scope.orbit.target = val;
        camera.updateProjectionMatrix();

    } );
    //@TODO hopefully this doesn't break the orbit controller
    //      if so, then just return THREE.Vector3
    this.__defineGetter__( 'target', function () {
        
        return {
            x: scope.orbit.target,
            y: scope.orbit.target,
            z: scope.orbit.target
        }

    } );

    Ripley.ThreeWrapper.call( this, camera, callback ); 

}

Ripley.Camera.prototype = Object.create( Ripley.ThreeWrapper.prototype );

Ripley.Camera.prototype.setOrthographic = function ( state ) {

    if ( state === undefined ) state = true;

    this.__setType( ! ( state ) );

}

Ripley.Camera.prototype.setPerspective = function ( state ) {

    if ( state === undefined ) state = true;

    this.__setType( state );

}

//@TODO temporary, make getter
Ripley.Camera.prototype.isPerspective = function () {

    return this.three.inPerspectiveMode;

}

Ripley.Camera.prototype.__setType = function ( persp ) {

    if ( persp ) this.three.toPerspective();
    else this.three.toOrthographic();

}

Ripley.Camera.prototype.renderable = function () {

    var three = this.three;
    var result = { true: three.cameraP, false: three.cameraO };

    return result[ three.inPerspectiveMode ];

}
