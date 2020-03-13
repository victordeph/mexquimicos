<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-6">
	<title>Controlador</title>
</head>
<body>

<?php 
 
 require "funcionesPro.php";
 $p1=$_POST['Nombre'];
 $p2=$_POST['Medida'];
 $p3=$_POST['Cantidad'];
 $p4=$_POST['Precio'];
 $p5=$_POST['Stock'];
 $p6=$_POST['Fecha'];
 
 
 if (isset($_POST['btnPOST'])) {
 	guardar($p1,$p2,$p3,$p4,$p5);
 }


 ?>

</body>
</html>