<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";


if (isset($_GET['datos'])) {
	header("Location: ".$archivo."P4");
}
if (isset($_GET['notas'])) {
	header("Location: ".$archivo."P7");
}
if (isset($_GET['elegir'])) {
	header("Location: ".$archivo."P5");
}
if (isset($_GET['verificar'])) {
	header("Location: ".$archivo."P6");
}
if (isset($_GET['salir'])) {
	session_destroy();
	header("Location: ".$archivo."P1");
}


?>