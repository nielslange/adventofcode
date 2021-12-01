const fs = require( 'fs' );
const data = fs.readFileSync( 'input.txt', 'utf8' ).split( '\n' );
console.time( 'Execution time' );
let valid = 0;
let invalid = 0;

data.forEach( element => {
	const part = element.split( /-|:| / );
	const min = part[0];
	const max = part[1];
	const char = part[2];
	const pass = part[4];
	const match = pass.split( char ).length-1;
	match >= min && match <= max ? valid++ : invalid++;
} );

console.timeEnd( 'Execution time' );
console.log( { valid: valid, invalid: invalid } );