<?php 
// connect to database
$a= mysqli_connect('localhost', 'practice', 'practice', 'practice1');
if($a){
    echo'connected';
}else{
    echo'could not connect';
}


// get data
$b = 'SELECT * FROM practice14';


$c = mysqli_query( $a , $b );
$a = mysqli_fetch_all( $c , MYSQLI_ASSOC );
print_r( $a ); 


// put data
$name='';
$pass='';
$c= "INSERT INTO prectice14( name , pass ) VALUES ('$name' , '$pass')"; 
$c = mysqli_query( $a , $c);
if ($c){
    echo"puted";
}else{
    echo "dont puted";
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>