
<?php 
    // if , else , elseif 
    $q="5";
    if(3<$q<7){
        echo " grade B";
    }
    elseif(0<$q<3){
      echo" garde A";
    }
    else{
        echo "dont have any grade ";
    }

    // loops
    // for
    $w= array("bita","ala","aye","mahdi","ghasem");

    for ($a=0;$a<=4;$a++){
        echo " person $a is $w[$a]";
    }
    // while
    $b=0;
    while($b<5){
    echo" person $a is $w[$a] ";
    $b++;
    }
    // foreach
    $fiend = array("cloth"=>array("amir", "taha", "dara"),
    "casual"=>array("tina", "kamran"));

    foreach ($friend as $key=>$value){
        echo  " $key ";
        foreach ($friend[$key] as $c) {
            echo " $c ";
        } 
    }
?>

<?php include("header.php") ?>
<?php include("footer.php") ?>

  
