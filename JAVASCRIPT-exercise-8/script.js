// edit array :

// 1 : connect two array
var array1 = [" mahdi ", "sina", " taha"];
var arary2 = ["bita", " tina", " sasan"];
var total = array1.concat(arary2);
document.write(total);
document.write("</br>");




// 2 : delet item/items from array 

// first way (its better)
var courses = ["HTML", "CSS", "JS"];
var index = 0;
var delete_Count = 1;
var newitem = "Python";
courses.splice(index, delete_Count, newitem);
document.write(courses);
document.write("</br>");

// or
var courses = ["HTML", "CSS", "JS"];
courses.splice(0, 1, "puthon");
document.write(courses);
document.write("</br>");



// second way
var numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
delete numbers[3];
delete numbers[2];
document.write(numbers);
document.write("</br>");


// 3 :  change one item in our array 
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list[0] = "one";
list[8] = " nine";
document.write(list);
document.write("</br>");


// 4 : add one item in our array
var courses = ["HTML", "CSS", "JS"];
var newitem = "PHP";
courses.push(newitem);

