<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
$usuario = $_GET['usuario'];
$pass1 = $_GET['pass1'];
$pass2 = $_GET['pass2'];

if(isset($_SESSION['usuario'])){
	header("Location: ".$archivo."P3");
}
else{
	header("Location: ".$archivo."P1");
}

include "conexion.php";

if(!empty($usuario)&&!empty($pass1)&&!empty($pass2)){
	if($pass1==$pass2){
		$sql = "UPDATE academico1.usuarios SET pass='$pass1' WHERE user LIKE '$usuario'";
		$result=mysqli_query($conn,$sql);
		session_destroy();
		header("Location: ".$archivo."P1");
	}

}
else{
	header("Location: ".$archivo."P2");
}

?>