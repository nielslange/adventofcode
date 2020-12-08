<?php
$data = file( 'input.txt' );
$start = microtime( true );
$valid = 0;
$invalid = 0;

foreach( $data as $entry ) {
	$part = preg_split( '/-|:| /', $entry );
	$pos1 = $part[0];
	$pos2 = $part[1];
	$char = $part[2];
	$pass = $part[4];
	$char1 = substr( $pass, $pos1 - 1, 1 );
	$char2 = substr( $pass, $pos2 - 1, 1 );
	( $char == $char1 ) != ( $char == $char2 ) ? $valid++ : $invalid++;
}

var_dump( [
	'time' => number_format( microtime( true ) - $start, 5 ) . 'ms',
	'pass' => $valid,
	'fail' => $invalid,
] );