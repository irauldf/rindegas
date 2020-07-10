<?php
$cnx = new mysqli("localhost","root","root","rindegas");
if ($cnx->connect_errno) {
   printf("Falló la conexión: %s\n", $cnx->connect_error);
   exit();
} else {
   //echo '<div class="alert alert-success" role="alert">Conectado a MySql!</div>';
}
?>