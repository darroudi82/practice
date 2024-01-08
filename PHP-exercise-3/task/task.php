<?php 
    // make a temprature

    $num = 0;
    if($num > 30) {
        echo "<p> High Temprature </p>";
    }

    elseif ($num < 20 && $num >= 0) {
        echo "<p> Low Temprature </p>";
    }

    elseif ($num < 0) {
        echo "<p> Freezing Temprature </p>";
    }

    else {
        echo "<p> Normal Temprature </p>";
    }
    echo "<h1> End </h1>";?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php task </title>
</head>
<body>
    
</body>
</html>