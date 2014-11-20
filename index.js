var methods = {
	amd: 'toAmd',
	cjs: 'toCjs',
	umd: 'toUmd'
};

module.exports = function esperantoBundle ( inputdir, outputdir, options, callback ) {
	var fs = require( 'fs' ),
		path = require( 'path' ),
		esperanto = require( 'esperanto' ),
		method = methods[ options.type ] || 'toAmd';

	if ( !options.entry ) {
		throw new Error( "The gobble-esperanto-bundle config must specify an entry module (e.g. `{ entry: 'main' }`)" );
	}

	options.base = path.join( inputdir, options.base || '' );

	esperanto.bundle( options ).then( function ( bundle ) {
		var result = bundle[ method ]( options ),
			dest = path.join( outputdir, ( options.dest || options.entry ).replace( /\.js$/, '' ) + '.js' );

		fs.writeFile( dest, result, callback );
	}).catch( callback );
};
