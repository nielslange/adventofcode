<?php
$data = file( 'input.txt' );
$start = microtime( true );
$valid = 0;
$invalid = 0;

foreach( $data as $entry ) {
	$part = preg_split( '/-|:| /', $entry );
	$min = $part[0];
	$max = $part[1];
	$char = $part[2];
	$pass = $part[4];
	$match = substr_count( $pass, $char );
	$match >= $min && $match <= $max ? $valid++ : $invalid++;
}

var_dump( [
	'time' => number_format( microtime( true ) - $start, 5 ) . 'ms',
	'pass' => $valid,
	'fail' => $invalid,
] );