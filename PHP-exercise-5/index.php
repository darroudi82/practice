<?php 

// Constants
// To create a constant, use the define() function:
// define(name, value, case-insensitive)

define("a" , "hello its a consonant");
echo a ;


define("MSG", " Hi Hello World ", true);
echo msg ;


// Variable scope ------------------------------------------------------------------------

// echo 
$name = "mahdi " ;
function tit(){
    echo $name ;
}
tit();
// This script will produce an error 


// global
$family = "darroudi" ;
function fam(){
    global $family ;
    echo $family ;
}
fam();




// نوشتن عدد ، قبل و بعد از عملگر حسابی  ----------------------------------------------------------------

//  post-increment
$a_1 = 2; $b_1 = $a_1++; // $a=3, $b=2
// pre-increment
$a_2 = 2; $b_2 = ++$a_2; // $a=3, $b=3




//  how to write a class -------------------------------------------------------------------------------
class a {
    public $name ; 
    public $family ;
    public function b(){
        echo " its first class that i wrote . ";
    }
    }
    $example = new a() ;
    $example ->name = "amir_ali" ;
    echo $example->name ;
    echo "<br />";
    $example-> b();



?>