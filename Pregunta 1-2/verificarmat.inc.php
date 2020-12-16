<?php
session_start();
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
//$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
$usuario = $_SESSION['usuario'];
include "conexion.php";
$sql = "select * from academico1.registromat where ci like '".$usuario."'";
$result = mysqli_query($conn, $sql);
$fila = mysqli_fetch_array($result);
?>
<section class="tablas1">
<h3>Usuario: <?php echo $usuario?></h3>
<table>
	<thead>
		<tr>
			<td>Sigla</td>
			<td>Materia</td>
			<td>Paralelo</td>
		</tr>
	</thead>	
<?php
$result = mysqli_query($conn, $sql);
while ($fila = mysqli_fetch_array($result)){
	echo "<tr>";
	echo "<td>$fila[1]</td>";
	echo "<td>$fila[2]</td>";
	echo "<td>$fila[3]</td>";
	echo "</tr>";
}

?>
</table>
<form action="regresar.php" method="GET">
	<input class="boton2" type="submit" name="volver" value="Regresar">
	<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
	<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
</form>
</section>
