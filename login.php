<?php
$curso = "Desarrollo Web";
$CURSO = "Desarrollo Web";
$a = 5;
$b = $a * 5;

echo "<p align='center'>Hola, este es el Curso de: <b>" .$curso ."</b></p>";
echo "<p align='center'>El resultado de la variable 'b' es: " .$b ."</b></p>";

if ($b > 10) {
    echo "Si, es válido!";
} else {
    echo "No, no es válido!";
}

?>