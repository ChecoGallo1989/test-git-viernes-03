<?php

if(isset($_POST['register'])){
    if(strlen($_POST['nombre'])>= 1 && strlen($_POST['email'])>=1){
        $nombre = trim($_POST['nombre']);
        $apellido =trim($_POST['apellido']);
        $email =trim($_POST['email']);
        $contraseña = trim($_POST['contraseña']); 
        
        $consulta = "INSERT INTO usuarios(nombre, apellido, email, contraseña) values ('$nombre','$apellido', '$email', '$contraseña')";

        $resultado = mysqli_query($conex, $consulta);

   

    }else{
        ?>
        "<script>alert('Por favor complete los campos');</script>"
        <?php
    }


}

?>
