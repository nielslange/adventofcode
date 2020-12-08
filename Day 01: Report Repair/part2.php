<?php
$data = file( 'input.txt' );
$start = microtime( true );

for ( $i = 0; $i < count( $data ); $i++ ) {
	for ( $j = 0; $j < count( $data ); $j++ ) {  
		for ( $k = 0; $k < count( $data ); $k++ ) {  
			$a = intval( $data[$i] );
			$b = intval( $data[$j] );
			$c = intval( $data[$k] );
			if ( 2020 == $a + $b + $c ) {
				return var_dump( [
					't' => number_format( microtime( true ) - $start, 5 ) . 'ms',
					'a' => $a,
					'b' => $b,
					'c' => $c,
					'a + b + c' => $a + $b + $c,
					'a * b * c' => $a * $b * $c,
				] );
			}
		}
	} 
}