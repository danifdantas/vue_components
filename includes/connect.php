<?php

  $user = "root";
  $pw = "root";

  try {
    $conn = new PDO('mysql:host=localhost;dbname=db_tempusers', $user, $pw);
    // var_dump($conn);
  } catch(PDOException $exception) {
    echo "connection error!" .$exception->getMessage();
    exit();
  }