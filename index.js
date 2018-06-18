/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './public' folder
 */

var port = process.env.PORT || 3000

// modules
var static = require( 'node-static' ),
    port = port,
    http = require( 'http' );

// config
var file = new static.Server( './legalco', {
    cache: 3600,
    gzip: true
} );



// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );