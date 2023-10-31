<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script language="php">
    echo "Hello World!";
    </script>
</body>
<?php

// echo in php

echo " hello everyone ";
echo " <p> it is a file about <strong> php </strong> languege </p>";

// متغیرها
$name = "mahdi";
$family = "darroudi";
$age = 19;
$NAME = "ali";
$_family = "niazi";
$Age = 19;

// انواع متغیر 

$str = "ABC";
$int = 15;
$boolean = true;
$float_1 = 15.75;
$float_2 = 19.73;

// عملیات ریاضی

$num_1 = 15;
$num_2 = 5;

$num = $num_1 - $num_1;
$num = $num_1 + $num_1;
$num = $num_1 * $num_1;
$num = $num_1 / $num_1;
$num = $num_1 % $num_1;

echo $num;
echo "<br>";

// توابع

function a()
{
    $q = 1;
    $w = "one";
    echo "$q. '' .$w ";
    echo "&q++";
    echo "&w--";
    $a_1 = ++$q;
    echo "$a_1";
    $a_2 = --$w;
    echo "$a_2";
}
a();

//آرایه نویسی  array

// tyoe 1
$are = array("amir", "saman", "dina", "bita", "mahdi");
$are[0] = "amir";
$are[1] = "saman";
$are[2] = "dina";
$are[3] = "bita";
echo $are[1];

//or

$my1[0] = "bita";
$my2[1] = "mahdi";
$my3[2] = 21;
echo "$my1[0] is $my2[2] and she is $my3[1] years old ";

//type 2

$people = array("bita" => "18", "mahdi" => "19", "pet" => "3");
// or
$people['bita'] = "18";
$people['mahdi'] = "19";
$people['pet'] = "3";


//array in array

$class_members = array(
    'apsent' => array('tina', 'tara'),
    'present' => array('sina', 'sobhan', 'zhila'),
);
echo $class_members['apsent'][1];
echo "<br>";


//if , else , elseif

$a = 15;
if (a >= 10) {
    echo " it is a douible digit number ";
} elseif (0 <= a <= 9) {
    echo "it is a member of digit ";
} else {
    echo "it is not a natural number ";
}

?>

</html>