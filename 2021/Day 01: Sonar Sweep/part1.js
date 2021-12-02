const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle.txt', 'utf8' ).split( '\n' );

function getSimpleCount( array ) {
	let count = 0;

	for ( let i = 1; i < array.length; i++ ) {
		if ( parseInt( array[ i ] ) > parseInt( array[ i - 1 ] ) ) count++;
	}

	return count;
}

console.time();
console.info( getSimpleCount( data ) );
console.timeEnd();
