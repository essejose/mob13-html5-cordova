<?php
header('Content-Type: text/event-stream; charset=utf-8');
header('Cache-Control: no-cache');

switch(rand(1, 4))
{
	case 1:
		$cor = "red";
		echo "data: ".$cor."\n\n";
	break;
	case 2:
		$cor = "blue";
		echo "data: ".$cor."\n\n";
	break;
	case 3:
		$cor = "green";
		echo "data: ".$cor."\n\n";
	break;
	case 4:
		echo "retry: 10000\n";
}

ob_flush();
flush();
?>
