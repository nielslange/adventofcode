<?php
$data = file( 'input.txt' );
$start = microtime( true );

for ( $i = 0; $i < count( $data ); $i++ ) {
	for ( $j = 0; $j < count( $data ); $j++ ) {  
		$a = intval( $data[$i] );
		$b = intval( $data[$j] );
		if ( 2020 == $a + $b ) {
			return var_dump( [
				't' => number_format( microtime( true ) - $start, 5 ) . 'ms',
				'a' => $a,
				'b' => $b,
				'a + b' => $a + $b,
				'a * b' => $a * $b
			] );
		}
	} 
}