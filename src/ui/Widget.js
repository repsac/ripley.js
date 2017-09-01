Ripley.Widget = function ( element, callback ) {

    this.element = element;

    this.__callbacks = {};

    Ripley.Node.call( this, callback );
   
}

Ripley.Widget.prototype = Object.create( Ripley.Node.prototype );

Ripley.Widget.prototype.onClick = function ( callback ) {

    this.element.dom.onclick = callback;

    return this;

}

Ripley.Widget.prototype.onMouseOver = function ( callback ) {

    this.element.dom.onmouseover = callback;

    return this;

}

Ripley.Widget.prototype.onMouseOut = function ( callback ) {

    this.element.dom.onmouseout = callback;

    return this;

}


Ripley.Widget.prototype.registerCallback = function ( trigger, priority, callback ) {

    if ( this.__callbacks.trigger === undefined ) {
        
        this.__callbacks[ trigger ] = new Array();

    }

    this.__callbacks[ trigger ].push( {

        callback: callback,
        priority: priority

    } );

}

Ripley.Widget.prototype.initCallbacks = function( trigger, callback ) {

    if ( this.__callbacks[ trigger ] === undefined ) {

        callback();

    } else {

        this._dispatchTrigger( trigger, callback );

    }

}

Ripley.Widget.prototype._dispatchTrigger = function ( trigger, callback ) {

    var registered = this.__callbacks[ trigger ];
    var order = {};

    for ( i = 0; i < registered.length; i ++ ) {

        var reg = registered[ i ];

        if ( reg.priority == -1 ) {

            reg.callback( this );

        } else {

            if ( order[ reg.priority ] === undefined ) {

                order[ reg.priority ] = new Array();

            }

            order[ reg.priority ].push( reg.callback );
    
        }

    }

    callback();

    var keys = function ( object ) {
    
        var array = new Array();

        for ( key in object ) array.push( key );

        array.sort();

        return array;
    
    }

    var ordered = keys( order );

    var scope = this;

    for ( i = 0; i < ordered.length; i ++ ) {

        var callbacks = order[ ordered[ i ] ];

        for ( j = 0; j < callbacks.length; i ++ ) {

            callbacks[ j ]( scope ); 

        }

    }

}
