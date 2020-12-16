<?php
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
//$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
?>
<section class="formulario">
<h1>Bienvenido</h1>
<h2>Cambio de Contraseña</h2>
<div>
	<form action="controlarcambio.php" method="GET">
		<input class="controles" type="text" name="usuario" placeholder="Usuario"><br><br>
		<input class="controles" type="password" name="pass1" placeholder="Nueva Contraseña"><br><br>
		<input class="controles" type="password" name="pass2" placeholder="Confirmar Nueva Contraseña"><br><br>
		<input class="boton" type="submit" Value="Cambiar Contraseña">
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