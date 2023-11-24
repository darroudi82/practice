// in ES6 we can write variables in 3 way :

// it is used without restrictions
var sname = "saman";
// it can only be used in the part that is made
let sage = 12;
// only one name can be made with it and never edited 
const sfamily = "armani";



// _______________________________________________________________________________



// in ES6 we can write easyer form of loops

// use loop for in array's
var arrey = new Array('semnan', 'alborz', 'tehran');

// forEach loop
array.forEach((item) => {
    console.log(item);
})
// for loop
for (let item of array) {
    console.log(item);
}


// ________________________________________________________________________________

// use loop for in object's
const nationality = {
    country: 'labenan',
    city: 'beirut',
    street: 'st-15'
}
for (let na in nationality) {
    // for getting value
    console.log(nationality[na]);
    //  for getting key
    console.log(na);
}


// _________________________________________________________________________________


// in ES6 we can use function faster (arrow function)
// type 1
const ArFu1 = (time) => {
    console.log("It is now " + time + " oclock ");
}
ArFu1(12);

// type2
function ArFu2(time) {
    console.log("It is now " + time + " oclock ");
}
ArFu2(6);


// _____________________________________________________________________________________


let object = (num1, num2, num3) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
object(42, 15, 65);


let number = new Array("saman", "kamran", "tara", "tina");
changenumber(number[0], number[1], number[2], "soosan");
changenumber(...number, "mohammad");


var n1 = "mahdi";
var n2 = "mortaza";
[student1, student2] = [n1, n2];
console.log("student1 is" + student1);
console.log("student2 is" + student2);


let values = { value: 1400, value: 2500, value: 7600, value: 5550 };
console.log(values.value);


// _____________________________________________________________________________________
// async
// it is used when the site wants to be used by several users .



// call back function
// in this function , the execution of the first item must be finished first , and then the second item start to be executed
setTimeout(() => {
    console.log("first-entry");
    setTimeout(() => {
        console.log("second-entry");
    }, 3500);
}, 4000);


// promises
// this section , which was added to javascrpt in ES6 , in addition to asyncing the site , checks the input and tells us whether the process succesed or failed . 
function prom(entry) {
    return new Promise(function (resolve, reject) {
        if (entry === '') {
            reject(Error(" you have not entered anything "));
        } else if (typeof entry === "string") {
            reject(Error(" you have not to enter a number "))
        }
        setTimeout(function () {
            resolve(entry);
        }, 1500);
    })
}

// when you called this function , you also pass it a vlue and it checks your input value is true or false
prom(21)
    .then(function (resolve) {
        log(resolve);
        prom()
            .then(function (resolve) {
                log(resolve);
                prom("mahdi")
                    .then(function (resolve) {
                        log(resolve);
                        prom("asia")
                            .then(function (resolve) {
                                log(resolve);
                            }, function (error) {
                                log(error);
                            })
                    }, function (error) {
                        log(error);
                    })
            }, function (error) {
                log(error);
            })
    }, function (error) {
        log(error);
    })
