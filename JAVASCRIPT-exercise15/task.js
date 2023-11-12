// task 1
var x = 7;
var y = x * 2;
console.log(y);

var q = 7;
console.log(q * 2);



// task 2
var a = 10;
if (a >= 88) {
    console.log('excellent');
} else if (a <= 87 && a >= 40) {
    console.log('good');
} else if (a >= 0 && a <= 39) {
    console.log('fail');
} else {
    console.log('error');
}





// task 3
var b = 13
var c = 12
if (b >= 0 && b <= 12) {
    console.log('tim is :' + b + 'a.m');
} else if (b >= 13 && b <= 24) {
    console.log('tim is :' + (b - 12) + 'p.m');
    console.log('tim is :' + (b - c) + 'p.m');
} else {
    console.assertlog('error')
}




// task 4
var e = azar
if (e == faravardin) {
    console.log('you can go to vecation');
} else {
    console.log('you must stay in your work');
}




// task 5
var num1 = 4;
var num2 = 13;
var num3 = 15;
var nu = num1 + num2 + num3;
var result = nu / 3
console.log(result);




// task 6
var age = 17;
if (age >= 0 && age < 18) {
    console.log("you are not a adult")
} else if (age >= 18 && age >= 150) {
    console.log("you are a adult person")
} else {
    console.log("your age is false")
}





// task 7
var globalrecord = 2.45;
var userrecord = 1.73;
if (userrecord > globalrecord) {
    console.log("your record is not enuogh")
} else {
    console.log("you can break global record")
}




// task 8
var learn = 12;
for (learn = 0; learn <= 3; learn++) {
    console.log(learn)
}





// task 9
var time = 12;
while (time >= 0) {
    console.log(time);
    time--;
}


// task 10
var z = 12;
z = 0;
while (z < 15) {
    if (z == 10) {
        continue;
    }
    console.log(z);
    z++;
}
