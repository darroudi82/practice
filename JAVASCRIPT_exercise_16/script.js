c =console.log()

// alert
function a(){
    alert("hello  world")
}

// confirm
var r=  confirm("do you want to go out ?")
if(confirm){
    c(" you want go out ")
}else{
    c(" you want stay")
}

// prompt
var t = Number(prompt("pls enter your age ",18));
c(t);
var q = toString(t);
c(typeof(q));




// first way to made an array
var names = new Array("bita", "sara");
c(names);

// second way to made an array
let information = {
    name: 'mina',
    age: 30,
    email: 'm-30@email.com'
};
c(information);

// third way to made an array
var animals = new Array(3);
courses[0] = "tiger";
courses[1] = "whale";
courses[2] = "lion";
c(animals);


// forth way to made an array
var animals = ["tiger", "whale", "lion"];
c(animals);


// hot to connect two array
var ar1 = ["amir", "ali"];
var ar2 = ["sina", "tina"];
var courses = ar1.concat(ar2);
c(courses)





// task 1
function voloume(x,y,z){
    x*y*z;
}
var x=4;
var y=3;
var z=2;
var cobice1 = new voloume(x,y,z);
c(cobice1);


// task 2
function mohasebe(name,price,discount){
    this.name=name;
    price*(price*discount);
}
var result1 = new mohasebe(name, price, discount);
var name ='mouse';
var price=80000;
var discount=0.08;
c("The result is: " + result1);

var result2 =new  mohasebe("flash",120000,0.12);
c("The result is: " + result2);