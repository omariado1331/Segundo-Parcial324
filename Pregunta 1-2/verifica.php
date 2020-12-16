<?php 
session_start();
if (isset($_SESSION['usuario'])){
	header("Location: bandejaent.inc.php");
}
else{
	header("Location: inisesion.inc.php");}
 ?>