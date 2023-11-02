<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $my_studeny=array(12,3,25,-4,0);
        for ($a=0;$a<=4;$a++){
            if($a>=10 && $a<=20){
                echo" student num $a with $my_student[$a] is passed ";
            }
            elseif($a>20){
                echo" this score is not true ";
            }
            elseif($a<0){
                echo" this score is not true ";
            }
            else{
                echo" student num $a  with $my_student[$a] is castaway ";
            }
        }    
    ?>
</body>
</html>
