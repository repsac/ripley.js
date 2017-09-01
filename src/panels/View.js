Ripley.View = function ( callback ) {

    Ripley.Panel.call( this, callback );

}

Ripley.View.name = 'View';

Ripley.View.class = 'View';

Ripley.View.prototype = Object.create( Ripley.Panel.prototype );
