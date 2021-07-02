<?php
$email = trim($_POST["campo_suscripcion"]);

if ($email != "") {
    header("Location:gracias-suscripcion.html");
} else {
    header("Location:error-suscripcion.html");
}
?>