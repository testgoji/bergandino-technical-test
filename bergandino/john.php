<?php


$maxNumber = 100;
$counter = 1;

while ($counter <= $maxNumber) {
	if ($counter % 3 == 0 && $counter % 5 == 0) {
		echo "Fizz Buzz";
	} elseif ($counter % 3 == 0) {
		echo "Fizz";
	} elseif ($counter % 5 == 0) {
		echo "Buzz";
	} else {
		echo $counter;
	}
	echo "\n";
	$counter += 1;
}
