<?php
// we can make variable with $ dollar sib=gn in php

    $x = 4;
    $y = 15;

    // first way :
    $z = $x+$y;
    echo  $z;
    echo "<br>";

    // second way :
    echo $x+$y;
    echo "<br>";


    echo $x-$y;
    echo "<br>";
    echo $x/$y;
    echo "<br>";
    echo $x%$y;
    echo "<br>";
    echo $x*$y;
    echo "<br>";

    $firstname = "mahdi";
    $family = "darroudi";
    $phone = "+98 915 456 4556";
    $age = 19;

    echo $age;
    echo "<br>";
    echo "my phone number is : ". $phone;
    echo $firstname;
    echo "<br>";
    echo $lastname;
    echo "<br>";
    echo $firstname." - ".$family;

    // how to write an array in php ? 

    // number 1 : 
    $studens["online"] = "bita";
    $studens["offline"] = "tina";
    $studens[0] = 19;
    
    echo $studens["online"];
    echo "<br>";
    echo $studens[0];
    echo "<br>";

    // number 2 :
    $friends = array ("amir" , "sina" , "saman" , " sadegh" , "arain") ;
    echo $friends[3];
    echo "<br>";
    
    // number 3 : 
    $names[0] = "mahdi";
    $names[1] = "amir";
    $names[2] = "ali";
    echo $names[0];
    echo "<br>";




    // number 4 : () Associative Arrays )

    // first example 
    $a = array("online"=>array("mohammad", "tara" , "sara"),
    "offline"=>array("ali", "shayan"));
    echo $a["online"][0];
    echo "<br>";

    // second example
    $ages = array ("name"=>"mahdi", "family"=>"darroudi", "age"=>19, 0=>array("ali"));
    echo $ages["name"];
    echo "<br>";
    echo $ages[1][0];
    echo "<br>";



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php</title>

</head>
    <style>  

      p{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 19px;
        color: blue;
        }

    </style>
<body>
    <h1 style="color: brown;">i love php </h1>
    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus    libero aspernatur vel, incidunt voluptas cupiditate, quod excepturi corporis  assumenda quidem quae iste, dolore eos provident error nam a magnam doloremque.</p>
    <?php 
        echo "<p>hi friends . in <strong>PHP</strong>we can use <strong>HTML tags </strong> <br></p>";
    ?>
    
</body>

</html>