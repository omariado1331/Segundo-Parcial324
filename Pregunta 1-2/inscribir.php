<?php
session_start();
$usuario = $_SESSION['usuario'];
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
include "conexion.php";
if (isset($_GET['inscribir'])) {
	echo "$archivo";
	if (!empty($_GET["materias"])) {
		foreach ($_GET["materias"] as $materias) {
				$sql = "select * from academico1.materias where codmateria like '".$materias."'";
				$result = mysqli_query($conn, $sql);
				$fila = mysqli_fetch_array($result);
				$sql = "insert into academico1.registromat (`ci`, `sigla`, `materia`, `paralelo`) values ('$usuario','$fila[0]','$fila[1]','A')";
				echo "$sql";
				$result = mysqli_query($conn, $sql);
				$fila = mysqli_fetch_array($result);
			}	
	}
	header("Location: ".$archivo."P6");
}else{
	header("Location: ".$archivo."P3");
}

?>