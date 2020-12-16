<?php
session_start();
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
$usuario = $_SESSION['usuario'];
include "conexion.php";
$sql = "select * from academico1.alumnos where ci like '".$usuario."'";
$result = mysqli_query($conn, $sql);
$fila = mysqli_fetch_array($result);
?>
<section class="datos">
<h3>Usuario: <?php echo $usuario?></h3>
<p> Nombre: </p><h4><?php echo $fila[1];?></h4>
<p>Apellido Paterno: </p><h4><?php echo $fila[2];?></h4>
<p>Apellido Materno: </p><h4><?php echo $fila[3];?></h4>
<p>Carnet de Identidad: </p><h4><?php echo $fila[0];?></h4>
<p>Fecha de Nacimiento: </p><h4><?php echo $fila[4];?></h4>
<p>Semestre: </p><h4><?php echo $fila[5];?></h4><br>

<form action="regresar.php" method="GET">
	<input class="boton2" type="submit" name="volver" value="Regresar">
	<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
	<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
</form>
</section>
