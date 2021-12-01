const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle-input.txt', 'utf8' ).split( '\n' );
let counter = 0;

for ( let i = 1; i < data.length; i++ ) {
	if ( parseInt( data[ i ] ) > parseInt( data[ i - 1 ] ) ) counter++;
}

console.info( counter );
