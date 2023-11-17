// Object :

// 1:math
// برای این بخش میتوانیم تعیین کنیم که کدام عملیات ریاضی را نیاز است که برایای آبجکت انجام دهیم

console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.LN10);
console.log(Math.LOG2E);


// 2:date
//  برای زمان نیز میتوانیم بخش های مختلفی از جمله ثانیه ، ساعت ، دقیقه و ... را بدست آوریم

console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getSeconds());


// 3:document
// از این آبجکت برا گرفتن المانها میتوانیم استفاده کنیم 


var a = document.getElementById("id1");
var b = document.getElementsByClassName("cls1");
var c = document.getElementsByTagName("span");
var d = document.querySelector(".cls2");
var e = document.querySelectorAll("div");


// settimeout function :
// تعیین میکنیم که فانکشن نوشته شده در آن ، در زمانی که به آن داده ایم دوباره بازخوانی شود

setTimeout(function () {
    a.className = 'cls3';
    b.style.textSize = '15px';
    a.innerHTML = "hi . are you okay ?";
}, 5000);

// با استفاده از کدهای زیر ، از بین تگهایی که درون ، بالاتر ، پایین تر و ... نسبت به المان مورد نظر قرار دارند انتخاب شوند 
console.log(b.childNodes);
console.log(b.nextElementSibling);
console.log(b.previousElementSibling);
console.log(b.hasChildNodes);
