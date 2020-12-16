<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
$usuario = $_GET['usuario'];
$pass = $_GET['pass'];

session_start();
if(isset($_SESSION['usuario'])){
	if($usuario==$pass){
		header("Location: ".$archivo."P2");
	}
	else{
		header("Location: ".$archivo."P3");
	}
}else{
	header("Location: ".$archivo."P1");
}
include "conexion.php";
$mensaje = "";
if(!empty($usuario)&&!empty($pass)){
	$sql = "SELECT user, pass from academico1.usuarios where user like '$usuario' and pass like '$pass'";
	$result = mysqli_query($conn, $sql);
	$fila = mysqli_fetch_array($result);

	if(!empty($fila)&&$fila[0]==$usuario&&$fila[1]==$pass){
		$_SESSION['usuario'] = $usuario;
		if($fila[0]==$fila[1]){
			header("Location: ".$archivo."P2");
		}
		else{
			header("Location: ".$archivo."P3");
		}
	}
	else{
		$mensaje.= "<li>Usuario no registrado</li>";
	}
}else{
	$mensaje.="<li>Debe de llenar los espacios</li>";
	header("Location: ".$archivo."P1");
}
?>