<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
if(!empty($mensaje)){
	session_start();
	if(isset($_SESSION['usuario'])){
		header("Location: ".$archivo."P3");
	}
	else{
		header("Location: ".$archivo."P1");
	}
}
?>
<section class="formulario">
<h1>Bienvenido</h1>
<h2>Iniciar Sesión</h2>
<div>
	<form action="controlarsesion.php" method="GET">
		<input class="controles" type="text" name="usuario" placeholder="Usuario"><br><br>
		<input class="controles" type="password" name="pass" placeholder="Contraseña"><br><br>
		<input class="boton" type="submit" Value="Iniciar Sesión">
		<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
		<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
		<?php
		if (!empty($mensaje)){?>
			<div>
				<?echo $mensaje;?>
			</div>
		<?php
		}
		?>
	</form>
</div>
</section>