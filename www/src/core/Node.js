Ripley.Node = function( callback, parent ) {

    for ( key in this.constructor ) this[ key ] = this.constructor[ key ];

    if ( this.name === undefined) this.name = '';
 
    if ( this.element !== undefined ) {
    
        if ( this.style !== undefined  ) this.element.setStyles( this.style );
        if ( this.class !== undefined ) this.element.setClass( this.class );
    
    }

    this.parent = ( parent === undefined ) ? null : parent;

    this.children = new Array();

    Object.defineProperty( this, 'id', {
        value: THREE.Math.generateUUID(),
        writeable: false
    } );

    //this.__init();

    if ( callback !== undefined ) callback( this );

}

Ripley.Node.prototype.addChild = function ( child ) {

    if ( child instanceof Ripley.Node ) {
       
       child.parent = this;

    }

    this.children.push( child );

    if ( child.__init !== undefined ) child.__init();

}

Ripley.Node.prototype.child = function ( value, key ) {

    if ( key === undefined ) key = 'name';

    for ( i = 0; i < this.children.length; i ++ ) {
    
        if ( this.children[ i ][ key ] === value ) {
        
            return this.children[ i ];
        
        }
    
    }
}

Ripley.Node.prototype.__init = function () { }
