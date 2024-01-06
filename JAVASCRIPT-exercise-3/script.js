// in first we have ti made window.onload = function () {}

window.onload = function () {

    setTimeout(function () {
        // ابتدا تگهای خود را ایجاد میکنیم 
        var header = document.createElement('header');
        var span = document.createElement('span');
        var text = document.createTextNode(' hi , we wanna made tags width javascript ');
        // به این شکل نیز میتوانیم متن را درون تگ وارد کنیم 
        span.innerHTML = "This is a paragraph which is created by JS";

        // حال باید تگ ها را درون هم جایگذاری کنیم تا تگ جدید به صفحه اضافه شود 
        var body = document.querySelector('body');
        span.appendChild(text);
        header.appendChild(span);
        body.appendChild(header);
        // ما می توانیم به شکل زیر تگ خود را از صفحه حذف کنیم
        header.removeChild(span);
    }, 3000);

}



// افزودن رویداد برای تگ ها

var h1 = document.querySelector('h1');
h1.style.fontSize = '25px';

h1.onmouseover = function () {
    h1.style.color = "40px";
}

h1.onclick = function () {
    h3.style.color = 'blue';
}



// ساخت انیمیشن در جاوااسکریپت  

// ساخت المان ها و صدا زدن تگ body
var body = document.querySelector('body');
var div1 = document.createElement('div');
var div2 = document.createElement('div');


// style for div1
div1.style.background = 'skyblue';
div1.style.width = '500px';
div1.style.height = '500px';
div1.style.border = '5px';
div1.style.position = 'absolute';


// style for div2
div2.style.height = '25px';
div2.style.width = '25px';
div2.style.border = '3px';
div2.style.background = 'blue';
div2.style.position = 'relative';
div2.style.borderRadius = "50%";
div2.id = 'move';

// افزودن تگ های ایجاد شده به تگ body
body.appendChild(div1);
body.appendChild(div2);

// ساخت فانکشن برای برنامه مورد نظر 




function moving() {
    var p = 0;
    // func 1
    var t1 = setInterval(function () {
        if (p >= 109) {
            clearInterval(t1);
        }
        var pow = Math.pow(p / 5, 2);
        var move = document.querySelector('#move');
        move.style.left = `${(p + 2) * 4}px`;
        move.style.top = `${pow}px`;
        p += 1;
        // func 2 
        function moving2() {
            var r = 470;
            var t2 = setInterval(() => {
                if (r = 0) {
                    clearInterval(t2);
                }
                var move = document.querySelector('#move');
                move.style.right = `${r}px`;
                move.style.bottom = `${r}px`;
                r -= 10;
            }, 1);
        }
        moving2();
    }, 100);

}
moving();



// image slider
var image = document.createElement('img');
image.src = 'img1.jpg';
image.style.width = '350px';
image.style.height = '350px';
image.style.position = 'relative';
image.style.left = '570px';
image.style.borderRadius = '8%';
body.appendChild(image);

var count = 1;
var timer = setInterval(function () {
    image.src = `img${count}.jpg`;
    count++;
    if (count > 3) {
        count = 1;
    }
}, 2000);

// image slider with click
var butt = document.createElement('button');
butt.innerHTML = 'pass';
butt.style.background = 'gray';
butt.style.textDecoration = 'Uppercase';
butt.style.position = 'relative';
butt.style.left = '370px';
butt.style.top = '310px';
butt.style.width = '80px';
body.appendChild(butt);

var image2 = document.createElement('img');
image2.src = 'im1.jpg';
image2.style.width = '300px';
image2.style.height = '250px';
image2.style.position = 'relative';
image2.style.left = '170px';
image2.style.top = '280px';
image2.style.borderRadius = '8%';
image2.style.border = '4px solid gray';
body.appendChild(image2);

var num2 = 1;
butt.addEventListener('click', function () {
    num2++;
    if (num2 > 3) {
        num2 = 1;
    }
    image2.src = `im${num2}.jpg`;
})