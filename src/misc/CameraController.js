/*
 * this this allows a Ripley camera to be interfaced with
 * THREE controller classes such as OrbitControls
*/

Ripley.CameraController = function ( camera ) {

    this.camera = camera;

    this.__defineGetter__( 'up', function () {

        return camera._up;

    } );
    this.__defineGetter__( 'fov', function () {

        return camera.fov;

    } );

    this.__defineGetter__( 'top', function () {

        return camera.three.cameraO.top;

    } );
    this.__defineGetter__( 'position', function () {

        return camera._position;

    } );

    this.__defineGetter__( 'matrix', function() {
    
        return camera._matrix;

    } );

}


Ripley.CameraController.prototype.lookAt = function ( target ) {

    this.camera.target = target;

}
