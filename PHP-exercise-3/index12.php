<?php

    // switch 
    $n=2;
    switch ($n) {
        case 1:
            echo "$n is our number";
            break;
        case 2:
            echo "$n is our number";
            break;
        case 3:
            echo "$n is our number";
            break;
        case 4:
            echo "$n is our number";
            break;
        default:
            echo "Unknown number";
            break;
    }

    // If 


    $score = 0;
    if($score = 20) {
        echo "<p> your score is complete </p>";
    }

    if($score < 20 && $score >=18)  {
        echo "<p> your score is very well </p>";
    }

    elseif ($score < 18 && $score >= 14) {
        echo "<p> your score is well </p>";
    }

    elseif ($score < 14 && $score > 10) {
        echo "<p> your score is not bad </p>";
    }

    elseif ($score < 10) {
        echo "<p> you are run out </p>";
    }

    else {
        echo "<p> your score dont exist </p>";
    }

    echo "<h1> End </h1>";


    // loops
    // point : we can use if in loops .



    // while
    $number = 7;
    while($number<15) {
        echo $number;
        if($number == 10 ){
            break;
        }
        echo "<br>";
        $number++;
    }
    echo "<h1> End </h1>";


    // do-while
    $counter = 0;
    do {
     
        echo "{$counter} \n";
     
        $counter++;
     
    } while (0 < $counter && $counter <= 10);
    

    // For loops
    for ($i=0; $i<5; $i++) {
        echo $i;
        echo "<br>";
    }
    echo "<h1> End </h1>";


    // Foreach loops
    
    // example :

    // foreach ($ind as $key=>$value){
    //     echo "<p>".$key."</p>";
    //     foreach ($ind[$key] as $cell) {
    //         echo "<p>".$cell."</p>";
    //     } 
    // } 


    $names = ["mahdi", "sina", "taha","saber" ," soosan"];
    echo "<p>".$names[0]."</p>";
    echo "<p>".$names[1]."</p>";
    echo "<p>".$names[2]."</p>";


    for ($i=0; $i<5; $i++){
        echo "<p>"."my classmate name is : ".$names[$i]."</p>"; 
    }
    echo "<h1> End for loop</h1>";

    foreach ($names as $name){
        echo "<p>".$name."</p>"; 
    }
    echo "<h1> End foreach loop</h1>";



    $people = array("online_people"=>array("mahdi", "taha", "sina"),
    "offline_people"=>array("Saeed", "kamran"));

    foreach ($people as $key=>$value){
        echo "<p>".$key."</p>";
        foreach ($people[$key] as $cell) {
            echo "<p>".$cell."</p>";
        } 
    }
    echo "<h1> End foreach loop </h1>";



    // Example 1
    $scores = [19,20,3,11];
    for ($num=1; $num<=4; $num++){
        if ($scores[$num-1] >= 10){
            echo "<p> Student ".$num." with the score of ".$scores[$num-1]." has passed </p>"; 
        }
        else {
            echo "<p> Student ".$num." with the score of ".$scores[$num-1]." has failed </p>"; 
        }
    }

?>


<?php include("header.php") ?>
<main>
    <h3> its main section for our website</h3>
</main>  
<?php include("footer.php") ?>   
    