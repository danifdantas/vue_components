
<?php 
  include 'connect.php';
  function get_single_user($pdo, $user) {
    $query = "SELECT * FROM tbl_users WHERE id ='$user'";
    
    $get_user = $pdo->query($query);
    $results = array();
    while($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
    }

    return $results;
  }
  function get_all_users($pdo) {
    $query = "SELECT * FROM tbl_users";
    
    $get_users = $pdo->query($query);
    // var_dump($get_users);exit;
    $results = array();
    while($row = $get_users->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
    }

    return $results;
  }

?>