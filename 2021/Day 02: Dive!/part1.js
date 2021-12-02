const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle.txt', 'utf8' ).split( '\n' );

function getSimplePosition( array ) {
	let position = 0;
	let depth = 0;

	array.forEach( ( element ) => {
		const command = element.split( ' ' );
		switch ( command[ 0 ] ) {
			case 'forward':
				position += parseInt( command[ 1 ] );
				break;
			case 'down':
				depth += parseInt( command[ 1 ] );
				break;
			case 'up':
				depth -= parseInt( command[ 1 ] );
				break;
		}
	} );

	return position * depth;
}

console.time();
console.info( getSimplePosition( data ) );
console.timeEnd();
