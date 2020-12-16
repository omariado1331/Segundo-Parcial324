<?php
session_start();
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
if (isset($_SESSION['usuario'])){
?>
<section class="cont-botones">
	<form action="manejo.php" method="GET">
		<input class="boton2" type="submit" name="datos" value="Ver Datos de Usuario">
		<input class="boton2" type="submit" name="notas" value="Consultar Notas">
		<input class="boton2" type="submit" name="elegir" value="Inscripciones">
		<input class="boton2" type="submit" name="verificar" value="Verificar Materias Inscritas">
		<input class="boton2" type="submit" name="salir" value="Cerrar Sesion">
		<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
		<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
	</form>
</section>	
<?php
}
else{
	header("Location: ".$archivo."P1");
}
?>
</body>
</html>