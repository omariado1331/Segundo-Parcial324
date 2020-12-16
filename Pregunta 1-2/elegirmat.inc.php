<?php
session_start();
$codFlujo=$_GET['codflujo'];
$codProceso=$_GET['codproceso'];
$archivo="gestion.php?codflujo=".$codFlujo."&codproceso=";
$usuario = $_SESSION['usuario'];
include "conexion.php";
$sql = "select * from academico1.alumnos  where ci like '".$usuario."'";
$result = mysqli_query($conn, $sql);
$fila = mysqli_fetch_array($result);
$semestre= $fila[5];


$sql = "select * from academico1.materias where semestre like '".$semestre."' and codmateria not in (select sigla from academico1.registromat)";
$result = mysqli_query($conn, $sql);
$fila = mysqli_fetch_array($result);

?>
<section class="tablas1">
<h3>Usuario: <?php echo $usuario?></h3>
<form action='inscribir.php' method='GET'>
<table>
	<thead>
		<tr>
			<td>Sigla</td>
			<td>Materia</td>
			<td>Semestre</td>
			<td>Inscribir</td>
		</tr>
	</thead>
<?php
$result = mysqli_query($conn, $sql);
	//echo "<form action='inscribir.php' method='GET'>";
while ($fila = mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td>$fila[0]</td>";
		echo "<td>$fila[1]</td>";
		echo "<td>$fila[2]</td>";
		echo "<td>";
		echo "<input type='checkbox' name= materias[]";
		echo " value='$fila[0]'";
		echo "></input>";
		echo "</td>";
		echo "</tr>";	
}
	//echo "<input type='submit' name='inscribir' value='inscribir'>";
	//echo "</form>";
?>
</table>
<input class="boton2" type='submit' name='inscribir' value='Inscribir'>
<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
</form>
<br>
<form action="regresar.php" method="GET">
	<input class="boton2" type="submit" name="volver" value="Regresar">
	<input type="hidden" value="<?php echo $codFlujo; ?>" name="codflujo">
	<input type="hidden" value="<?php echo $codProceso; ?>" name="codproceso">
</form>

</section>