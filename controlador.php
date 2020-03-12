<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-6">
	<title>Controlador</title>
</head>
<body>

<?php 
 
 require "funciones.php";
 $p1=$_POST['Nombre'];
 $p2=$_POST['Marca'];
 $p3=$_POST['Cantidad'];
 $p4=$_POST['Precio'];
 $p5=$_POST['Stock'];
 $p6=$_POST['Fecha'];
 $pu1=$_POST['putNombre'];
 $pu2=$_POST['putMarca'];
 $pu3=$_POST['putCantidad'];
 $pu4=$_POST['putPrecio'];
 $pu5=$_POST['putStock'];
 $pu6=$_POST['putFecha'];
 



 
 if (isset($_POST['btnPOST'])) {
 	guardar($p1,$p2,$p3,$p4,$p5);
 }

if (isset($_POST['btnPUT'])) {
    modificar($pu1,$pu2,$pu3,$pu4,$pu5);
}





 ?>

</body>
</html>