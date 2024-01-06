<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 

    // num 1
    function a(){
        echo"hello . welcom to my website";
    }
    a();
    echo"<br>";

    // num 2
    function b($parametr="my friend"){
        echo "hello $parametr welcom to my website";
    }
    b("ali");
    echo"<br>";
    b();
    echo"<br>";

    // num 3
    function c($num1,$num2){
        $sumation = $num1 + $num2;
        echo $sumation;
    }
    c(4,6);
    echo"<br>";
    
    // num 4
    function d($num2){
        $num1=13;
        echo $num1 * $num2 ;
    }
    $example=14;
    d($example);
    echo"<br>";
    
    // num 5
    function e($enter_your_age){
        return "your age is $enter_your_age";
    }
    echo e(17);
    
    ?>
</body>
</html>