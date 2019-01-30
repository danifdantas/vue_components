
<?php 

include 'functions.php';

// sanitize any user input using some of the stuff Pan has been showing you like htmlentities, prepare statements, etc
if(isset($_GET['user'])) {
  // pass connection and id to get specific user
  $data = get_single_user($conn, $_GET['user']);
  echo json_encode($data);
} else {
  // else get them all
  $data = get_all_users($conn);
  echo json_encode($data);
  var_dump($data);
}

?>