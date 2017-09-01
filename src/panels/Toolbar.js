Ripley.Toolbar = function ( callback ) {
    
    this.constructor = Ripley.Toolbar;

    Ripley.Panel.call( this, callback );

}

Ripley.Toolbar.name = 'Toolbar';

Ripley.Toolbar.class = 'Toolbar';

Ripley.Toolbar.prototype = Object.create( Ripley.Panel.prototype );
