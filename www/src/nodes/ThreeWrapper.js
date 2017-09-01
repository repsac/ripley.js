Ripley.ThreeWrapper = function ( three, callback ) {

    this.three = three;

    Ripley.Node.call( this, callback );

}

Ripley.ThreeWrapper.prototype = Object.create( Ripley.Node.prototype );
