const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle.txt', 'utf8' ).split( '\n' );

function getAdvancedCount( array ) {
	let count = 0;

	for ( let i = 3; i < array.length; i++ ) {
		const first =
			parseInt( array[ i - 3 ] ) +
			parseInt( array[ i - 2 ] ) +
			parseInt( array[ i - 1 ] );
		const second =
			parseInt( array[ i - 2 ] ) +
			parseInt( array[ i - 1 ] ) +
			parseInt( array[ i ] );
		if ( second > first ) count++;
	}

	return count;
}

console.time();
console.info( getAdvancedCount( data ) );
console.timeEnd();
