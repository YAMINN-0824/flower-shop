<?php

    $postData = [];
    $postData["uname"] = filter_input(INPUT_POST, "uname");
   
    $postData["mail"] = filter_input(INPUT_POST, "mail");
  
    $postData["tel"] = filter_input(INPUT_POST, "tel");
   
    $postData["checkDM"] = filter_input(INPUT_POST, "checkDM");

    // var_dump($postData); 
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CUSTOMER ORDERS</title>
</head>
<body>
    <h1>CUSTOMER ORDERS</h1>
        <p>
            Name : <?php echo $postData["uname"]; ?>
        </p>
        
        <p>
            Gmail : <?= $postData["mail"] ?>
        </p>
        
        <p>
            Tel : <?= $postData["tel"] ?>
        </p>
        
        <p>
            Message : <?= $postData["checkDM"] ?>
        </p>
</body>
</html>
 
   