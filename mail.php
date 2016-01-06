<?php 
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$message_send = 
    
    
"Jméno: $name 
Email: $email
Zpráva: $message";
mail( 'bazout.p@gmail.com','Website Form', $message_send );
header("HTTP/1.1 200 OK");
?>