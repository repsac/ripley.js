Ripley.Viewport = function ( callback ) {

    this.constructor = Ripley.Viewport;

    this.cameras = new Array();

    Ripley.Panel.call( this, callback );

}

Ripley.Viewport.name = 'Viewport';

Ripley.Viewport.class = 'Viewport';

Ripley.Viewport.color = 0xb8b8b8;

//@TODO viewport alpha

Ripley.Viewport.gridVisible = true;

Ripley.Viewport.gridWidth = 10;

Ripley.Viewport.gridStep = 2.5;

Ripley.Viewport.prototype = Object.create( Ripley.Panel.prototype );

Ripley.Viewport.prototype.__init = function () {

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer( {antialias: true} );
    this.renderer.setSize( this.width(), this.height() );
    this.renderer.setClearColor( this.color, 1);
    this.element.appendChild( this.renderer.domElement );

    this.grid = new THREE.GridHelper( this.gridWidth, this.gridStep );
    this.scene.add( this.grid );

    var scope = this;

    Ripley.render = function () {

        var callback = function ( camera ) {

            scope.renderer.render( scope.scene, camera.renderable() );
        };
        Ripley.signals.activeCamera.dispatch( scope.id, callback ); 

    };
 
    window.addEventListener( 'resize', function () {
        
        var callback = function ( camera ) {
            camera.size = [ scope.width(), scope.height() ];
            camera.updateProjectionMatrix();
        
            scope.renderer.setSize( scope.width(), scope.height() );
            Ripley.render();
        };

        Ripley.signals.activeCamera.dispatch( scope.id, callback );

    }, false );

    this.setupDefaultCameras();

}

Ripley.Viewport.prototype.setupDefaultCameras = function () {

    // top y 50 r x -90
    // front z 50
    // top x 50 r y 90
    // var scope = this;
    var params = { name: 'persp', type: 'persp', viewport: this.id },
        callback = function ( camera ) { 
            camera.t = [ 5, 5, 5 ];
            camera.target = [ 0, 0, 0 ];
            Ripley.render();
        };

    this.createCamera( params, callback );

}

Ripley.Viewport.prototype.createCamera = function ( params, callback ) {

    var dom = this.element.dom,
        klass = Ripley.Camera,
        scope = this;
    var creationCallback = function ( camera ) {

        Ripley.signals.registerCamera.dispatch( camera, scope.id, callback );

    };

    Ripley.signals.createCamera.dispatch( params, dom, klass, creationCallback );

}

//@TODO temporary method?
Ripley.Viewport.prototype.activeCamera = function () {

    //@TODO this is only for testing purposes
    var camera = this.cameras[ 0 ];

    return camera.renderable();

}

Ripley.Viewport.prototype.fitToContainer = function () {

    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.width = this.renderer.offsetWidth;
    this.renderer.height = this.renderer.offsetHeight;

}
