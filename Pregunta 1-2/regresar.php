<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
if (isset($_GET['volver'])) {
	header("Location: ".$archivo."P3");
}
?>