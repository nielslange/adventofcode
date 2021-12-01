const fs = require( 'fs' );
const data = fs.readFileSync( 'input.txt', 'utf8' ).split( '\n' );
console.time( 'Execution time' );

for ( let i = 0; i < data.length; i++ ) {
	for ( let j = 1; j < data.length; j++ ) {
		for ( let k = 1; k < data.length; k++ ) {
			let a = parseInt( data[i] );
			let b = parseInt( data[j] );
			let c = parseInt( data[k] );
			if ( 2020 == a + b + c ) {
				console.timeEnd( 'Execution time' );
				return console.log( { a: a, b: b, c: c, product: a * b * c } );
			}
		}
	}	
}