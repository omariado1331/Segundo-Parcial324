<?php
include "cabecera.php";
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
include "conexion.php";
$sql = "select * from procesos where codflujo='$codFlujo' and codproceso = '$codProceso'";
$result = mysqli_query($conn, $sql);
$fila = mysqli_fetch_array($result);
$codprocesosiguiente= $fila['codProcesoSiguiente'];
$archivo= $fila['pantalla'];
include "$archivo";
?>
</body>
</html>