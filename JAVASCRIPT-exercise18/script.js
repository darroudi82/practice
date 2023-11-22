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
div1.style.border = '3px';
div2.style.background = 'blue';
div2.style.position = 'relative';


// افزودن تگ های ایجاد شده به تگ body
body.appendChild(div1);
body.appendChild(div2);

// ساخت فانکشن برای برنامه مورد نظر 
function setTimeout(animate(){
};)
btn.addEventListener('click', f1);