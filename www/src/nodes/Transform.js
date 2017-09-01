Ripley.Transform = function ( setters, getters ) {

    if ( getters.t !== undefined ) {
    
        this.__defineGetter__( 't', getters.t );
        this.__defineGetter__( 'translate', getters.t );

    }
    if ( setters.t !== undefined ) {

        this.__defineSetter__( 't', setters.t ); 
        this.__defineSetter__( 'translate', setters.t ); 

    }

    if ( getters.tx !== undefined ) {
    
        this.__defineGetter__( 'tx', getters.tx );
        this.__defineGetter__( 'translateX', getters.tx );

    }
    if ( setters.tx !== undefined ) {

        this.__defineSetter__( 'tx', setters.tx ); 
        this.__defineSetter__( 'translateX', setters.tx ); 

    }

    if ( getters.ty !== undefined ) {
    
        this.__defineGetter__( 'ty', getters.ty );
        this.__defineGetter__( 'translateY', getters.ty );

    }
    if ( setters.ty !== undefined ) {

        this.__defineSetter__( 'ty', setters.ty ); 
        this.__defineSetter__( 'translateY', setters.ty ); 
    
    }

    if ( getters.tz !== undefined ) {
    
        this.__defineGetter__( 'tz', getters.tz );
        this.__defineGetter__( 'translateZ', getters.tz );

    }
    if ( setters.tz !== undefined ) {

        this.__defineSetter__( 'tz', setters.tz ); 
        this.__defineSetter__( 'translateZ', setters.tz ); 

    }

    if ( getters.r !== undefined ) {
    
        this.__defineGetter__( 'r', getters.r );
        this.__defineGetter__( 'rotate', getters.r );

    }
    if ( setters.r !== undefined ) {

        this.__defineSetter__( 'r', setters.r ); 
        this.__defineSetter__( 'rotate', setters.r ); 

    }

    if ( getters.rx !== undefined ) {
    
        this.__defineGetter__( 'rx', getters.rx );
        this.__defineGetter__( 'rotateX', getters.rx );

    }
    if ( setters.rx !== undefined ) {

        this.__defineSetter__( 'rx', setters.rx ); 
        this.__defineSetter__( 'rotateX', setters.rx ); 

    }

    if ( getters.ry !== undefined ) {
    
        this.__defineGetter__( 'ry', getters.ry );
        this.__defineGetter__( 'rotateY', getters.ry );

    }
    if ( setters.ry !== undefined ) {

        this.__defineSetter__( 'ry', setters.ry ); 
        this.__defineSetter__( 'rotateY', setters.ry ); 
    
    }

    if ( getters.rz !== undefined ) {
    
        this.__defineGetter__( 'rz', getters.rz );
        this.__defineGetter__( 'rotateZ', getters.rz );

    }
    if ( setters.rz !== undefined ) {

        this.__defineSetter__( 'rz', setters.rz ); 
        this.__defineSetter__( 'rotateZ', setters.rz ); 

    }

    if ( getters.s !== undefined ) {
    
        this.__defineGetter__( 's', getters.s );
        this.__defineGetter__( 'scale', getters.s );

    }
    if ( setters.s !== undefined ) {

        this.__defineSetter__( 's', setters.s ); 
        this.__defineSetter__( 'scale', setters.s ); 

    }

    if ( getters.sx !== undefined ) {
    
        this.__defineGetter__( 'sx', getters.sx );
        this.__defineGetter__( 'scaleX', getters.sx );

    }
    if ( setters.sx !== undefined ) {

        this.__defineSetter__( 'sx', setters.sx ); 
        this.__defineSetter__( 'scaleX', setters.sx ); 

    }

    if ( getters.sy !== undefined ) {
    
        this.__defineGetter__( 'sy', getters.sy );
        this.__defineGetter__( 'scaleY', getters.sy );

    }
    if ( setters.sy !== undefined ) {

        this.__defineSetter__( 'sy', setters.sy ); 
        this.__defineSetter__( 'scaleY', setters.sy ); 
    
    }

    if ( getters.sz !== undefined ) {
    
        this.__defineGetter__( 'sz', getters.sz );
        this.__defineGetter__( 'scaleZ', getters.sz );

    }
    if ( setters.sz !== undefined ) {

        this.__defineSetter__( 'sz', setters.sz ); 
        this.__defineSetter__( 'scaleZ', setters.sz ); 

    }

}
