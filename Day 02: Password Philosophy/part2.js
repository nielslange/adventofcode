const fs = require( 'fs' );
const data = fs.readFileSync( 'input.txt', 'utf8' ).split( '\n' );
console.time( 'Execution time' );
let valid = 0;
let invalid = 0;

data.forEach( element => {
	const part = element.split(/-|:| /);
	const pos1 = part[0];
	const pos2 = part[1];
	const char = part[2];
	const pass = part[04];
	const char1 = pass.charAt(pos1-1);
	const char2 = pass.charAt(pos2-1);
	( char == char1 ) != ( char == char2 ) ? valid++ : invalid++;
} );

console.timeEnd( 'Execution time' );
console.log( { valid: valid, invalid: invalid } );