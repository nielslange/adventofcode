const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle-input.txt', 'utf8' ).split( '\n' );
let counter = 0;

for ( let i = 2; i < data.length - 1; i++ ) {
	const first =
		parseInt( data[ i - 2 ] ) +
		parseInt( data[ i - 1 ] ) +
		parseInt( data[ i ] );
	const second =
		parseInt( data[ i - 1 ] ) +
		parseInt( data[ i ] ) +
		parseInt( data[ i + 1 ] );
	if ( second > first ) counter++;
}

console.info( counter );
