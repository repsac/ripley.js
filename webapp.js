
function primitivesMenu( menu ) {

    menu.addItem( 'Cube' );
    menu.addItem( 'Sphere' );
    menu.addItem( 'Cylinder' );

}

function lightsMenu( menu ) {
    
    menu.addItem( 'Point Light' );
    menu.addItem( 'Directional Light' );

}

function createMenu( menu ) {

    menu.addSubMenu( 'Primitives', function ( menu ) {
        
        primitivesMenu( menu )

    } );

    menu.addSubMenu( 'Lights', function ( menu ) {
        
        lightsMenu( menu )

    } );
}

function setupMenubar( menuBar ) {

    menuBar.addMenu( 'Create', function ( menu ) {
    
        createMenu( menu );

    } );

}


function primitivesTab( tab ) {

    tab.addButton( 'CreateCube', function ( button ) {
        
        button.setIcon('icons/primitive_cube.png');

    } );

    tab.addButton( 'CreateCylinder', function ( button ) {
        
        button.setIcon('icons/primitive_cylinder.png');

    } );

    tab.addButton( 'CreateSphere', function ( button ) {
        
        button.setIcon('icons/primitive_sphere.png');

    } );

}

function setupTabBar( tabBar ) {
    
    tabBar.addTab( 'Primitives', function ( tab ) {

        primitivesTab( tab );

    } );
    tabBar.addTab( 'Lights' );

    tabBar.setActive( 0 );

}

function camerasMenu( menu ) {

    menu.spanClass = 'ViewMenuLabel';

    menu.spanClassOpen = 'ViewMenuLabelOpen';

    menu.liClass = 'ViewMenuName';

    menu.setDomElements();

    var update = function ( cameras ) {

        menu.clear( function ( scope ) {
        
            for ( i = 0; i < cameras.length; i ++ ) {

                var camera = cameras[ i ];

                menu.addItem( camera.name, function () {

                    //console.log( camera.id );

                } );

            }
        
        } );

    }

    var onshow = function () {

        Ripley.signals.cameras.dispatch( update );

    };

    menu.registerCallback( 'onshow', -1, onshow );
    //menu.addItem( 'Persp', function ( ) { } );
    //menu.addItem( 'Top', function ( item ) { } );
    //menu.addItem( 'Left', function ( item ) { } );
    //menu.addItem( 'Right', function ( item ) { } );

}

function viewMenubar( menubar ) {

    menubar.element.setClass( 'ViewMenubar' );

    menubar.addMenu( 'Cameras', function ( menu ) {

        camerasMenu( menu );

    } );

}

function setupView( view ) {

    view.element.setId( 'ThreeView' );

    new Ripley.ViewMenubar( function ( menubar ) {

        view.addPanel( menubar );

        viewMenubar( menubar );

    } );

    new Ripley.Viewport( function ( viewport ) {

        view.addPanel( viewport );

    } );

}

function init() {

    var app = new Ripley.WebApp( { title: 'WebApp' } );

    new Ripley.Menubar( function ( menuBar ) {

        app.addPanel( menuBar );

        setupMenubar( menuBar );

    } );
    
    new Ripley.TabBar( function ( tabBar ) {
    
        app.addPanel( tabBar );

        setupTabBar( tabBar );

    } );

    new Ripley.Toolbar( function ( toolbar ) {
    
        app.addPanel( toolbar );

    } );

    new Ripley.View( function ( view ) {

        app.addPanel( view );

        setupView( view );

    } );

    console.log( app );
}
