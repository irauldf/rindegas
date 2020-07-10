<?php
include 'conexion.php';

$nombre = $_POST["nombre"];
$gasPara = $_POST["gasPara"];
$correo = $_POST["correo"];
$recibirOfertas = $_POST["recibirOfertas"];

$sql = "Insert into pedidos values(null, '$nombre', '$gasPara', '$correo', '$recibirOfertas');";

$mensaje = mysqli_query($cnx, $sql);

if (!$mensaje) {
   echo json_encode(array("exito" => "false", "mensaje" => $mensaje, "query" => $sql));
} else {
   echo json_encode(array("exito" => "true"));
}

mysqli_close($cnx);
?>
