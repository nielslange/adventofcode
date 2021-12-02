const fs = require( 'fs' );
const data = fs.readFileSync( 'puzzle.txt', 'utf8' ).split( '\n' );

function getAdvancedPosition( array ) {
	let position = 0;
	let depth = 0;
	let aim = 0;

	array.forEach( ( element ) => {
		const command = element.split( ' ' );
		switch ( command[ 0 ] ) {
			case 'forward':
				position += parseInt( command[ 1 ] );
				depth += parseInt( command[ 1 ] ) * aim;
				break;
			case 'down':
				aim += parseInt( command[ 1 ] );
				break;
			case 'up':
				aim -= parseInt( command[ 1 ] );
				break;
		}
	} );

	return position * depth;
}

console.time();
console.info( getAdvancedPosition( data ) );
console.timeEnd();
