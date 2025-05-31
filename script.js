// var titlefromhtml =document.getElementById("title").innerText;// نجيب العنصر من فوق و نستخدمةهنا و نطبق عليه حاجات
// console.log(titlefromhtml); // hello world

// var allcaps = titlefromhtml.toLocaleUpperCase();
// console.log(allcaps); // HELLO WORLD MAHMOUD
// var replace0= allcaps.replace("O", "y");
// console.log(replace0); // HELLO WORLD MAHMOUD

// document.getElementById("result").innerText = ` ${replace0}--- ${titlefromhtml}--- ${allcaps}`;// نقدر نتحكم ف العنصر و نعمل فيه اي دوال

// ----------------------------------input/button/document-----------------------------------------------------------------------------------------------------
//   document.getElementById("btn").addEventListener("click", function () {
//     //   console.log("clicked");

//     var titlefromhtml = document.getElementById("input-title").value; // نجيب العنصر من فوق و نستخدمةهنا و نطبق عليه حاجات
//     console.log(titlefromhtml); // hello world

//       var allcaps = titlefromhtml.toLocaleUpperCase();
//       console.log(allcaps); // HELLO WORLD MAHMOUD
//       var replace0 = allcaps.replace("O", "y");
//       console.log(replace0); // HELLO WORLD MAHMOUD

//       document.getElementById("result").innerText = ` ${replace0}--- ${titlefromhtml}--- ${allcaps}`; // نقدر نتحكم ف العنصر و نعمل فيه اي دوال
//   });

// ---------------------------------------------------------------------------------------------------------------------------------------
// console.log("Hello World");
// var title= "Hello mahmoud";
// console.log(title);
// =============================================================================
// var x = 5;
// var y = 10;

// console.log( " First number is :" + x);
// console.log( " Second number is :" + y);
// console.log(y);
// var sum = x + y;
// console.log("The sum of x and y is: " + sum);
// var sub = x - y;
// console.log("The sub of x and y is: " + sub);
// var mul = x * y;
// console.log("The mul of x and y is: " + mul);
// var div = x / y;
// console.log("The mul of x and y is: " + div);
// var mod = x % y;
// console.log("The mod of x and y is: " + mod);

// var massage =`first number is : ${x}  second number is : ${y} sum is : ${sum} sub is : ${sub} mul is : ${mul} div is : ${div} mod is : ${mod}`;
// console.log(massage);

// document.getElementById("result").innerHTML = massage;
// =============================================================================

// var name = "mahmoud";
// var age = 25;
// var massage = `Hello ${name} your age is : ${age}`;
// console.log(massage);
// alert(massage);
// alert(massage);
// var name = prompt("inter the first number");

// document.getElementById("massage").innerText = "Hello " + name + " your age is : "
// =============================================================================

// =============================Data Types========================================
// var x = 5; // number
// var y = "5"; // string
// var z = true; // boolean
// var a = null; // null
// var b; // undefined
// console.log(typeof x); // number
// console.log(typeof 5); // number
// console.log(typeof y); // string
// console.log(typeof z); // boolean
// console.log(typeof a); // object
// console.log(typeof b); // undefined

// ============================= String ========================================

//  console.log("Hello World mahmoud".length);//عندك الوج دا دالة بردو

//   var title = "Hello World mahmoud";
//   console.log(title.length); // 20
//   console.log(title.substring(0, 8)); // Hello Wor
//   console.log(title.toLocaleUpperCase()); // HELLO WORLD MAHMOUD
// var replaceText = title.replace("o", "y");
//    console.log(replaceText); // Helylo World mahmoud

// ----revers with numbers
// var numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers.reverse())
//--------------revers with string----------
//  var title = "Hello World mahmoud";
//  var reverseText = title.split(" ").reverse().join(" ");
//  console.log(reverseText)
//  var reversetitle = title.split(" ").reverse().join(" ");
//  console.log(reversetitle)

// [ 'Hello World mahmoud' ]
// console.log(numbers); // [5, 4, 3, 2, 1]
//       console.log(title.toLocaleLowerCase()); // hello world mahmoud
//       console.log(title.indexOf("W")); // 6

//       var titleLowerCase = title.toLocaleLowerCase();
//       console.log(titleLowerCase.replace("mahmoud", "ahmed")); //
//       var toLocaleUpperCase = title.toLocaleUpperCase();
//       console.log(toLocaleUpperCase.replace("MAHMOUD", "AHMED"));

//   console.log(title.charAt); // H
//   console.log(title.charAt(0)); // H
//   console.log(title.charAt(1)); // e
//   console.log(title.charAt(2)); // l
//   console.log(title.charAt(2)); // l
//   var mychar = title.charAt(2);
//   console.log(typeof mychar); // o

//         console.log(title[5]); //  W
//         var name =  "MY js"
//         console.log(title+" "+name);
//         console.log(`hello ${name} ${title}`); // hello MY js Hello World mahmoud
// ---------------challange----------------
//   --------------------------------------------------------------------------------------------------

// ============================= Numbers========================================
//    NAN ---> not a number
//  var x ="hello"
//  var y ="mamoud"
// var z = x + y
// console.log(z); // hello mahmoud
// console.log(typeof z); // string
// console.log(isNaN(z)); // true
// // console.log(X*Y);// NaN
// var s = "20"
// var f = "2"
// var o = 9
// console.log(s + f); // 202020//   "string" and thes process name is concatenation +work as a string  first
// console.log(typeof s); // string
// var multiply = s * f
// console.log(multiply); // 400
// var divide = s / f
// console.log(divide); // 100
// var sub = s - f
// console.log(sub); // 0
// var mod = s % f
// isNaN(s)
// console.log(isNaN(o)); // false
// // console.log(isNaN(f)); // false
// // console.log(isNaN(z)); // true

// Math.min(5, 10, 15, 20, 25); // 5
// Math.max(5, 10, 15, 20, 25); // 25
// Math.abs(-5); // 5
// Math.sqrt(25); // 5
// Math.pow(2, 3); // 8

// =============================Boolean========================================
// var x = true;
// var h = "true";
// console.log(h); //

// var y = false;
// console.log(typeof(x)); // string
// console.log(x=h); // false
// console.log(typeof(y)); // booleanl
// console.log(x && y); // false
// console.log(x || y); // true
// console.log(!x); // false
// console.log(!y); // true
// // لو الأنواع مختلفة، بيحاول يحوّلهم لنفس النوع قبل المقارنة
// console.log(x == y); // false  --> d x =y بيقارن القيمة فقط.

// console.log(x === y); // false  --> strict equality بيقارن القيمة و النوع
// console.log(x != y); // true
// console.log(x !== y); // true
// console.log(x > y); // true
// console.log(x < y); // false
// console.log(x >= y); // true
// console.log(x <= y); // false

// =============================Casting========================================

//  var x ="50"
// var y = "30"
// console.log(x + y); // 5030
// console.log(typeof(x)); // string
// console.log(typeof(y)); // string
// console.log(Number(x) + Number(y)); // 80--> it convert the string to number
// console.log(typeof(x)); // string  and it will stay string
// console.log(typeof(y)); // stringand it will stay string
// // to convert x,y to num in all the code we can use Number()
// // to covert the string to number we can use Number() or parseInt() or parseFloat()
// // parseInt() will convert the string to integer
// // parseFloat() will convert the string to float
// x= Number(x)
// y= Number(y)
// console.log(typeof(x)); // number
// console.log(typeof(y)); // number
// console.log(x + y); // 80
// // to convert the number to string we can use String() or toString()
// // toString() will convert the number to string

// console.log(typeof(String(x)));
// console.log(typeof(String(y)));
// console.log(x+y);// 80
// x= String(x)
// y= String(y)
// console.log(typeof(x)); // string
// console.log(typeof(y)); // string
// console.log(x + y); // 5030

// console.log(Boolean(x)); // true
// console.log(Boolean(y)); // true

// x= Number(x)
// y= Number(y)

// var x= true
// var y= false

// console.log(Boolean(x)); // true
// console.log(Boolean(y)); // false

// console.log(String(x)); // true
// console.log(String(y)); // false

// ===============================================Conditions============================================================
// ===================================================IF==================

// var age = 80;
// // console.log(age);
// console.log("this man is old his age is :"+age);

// var age2=20
// if(age2 >= 70)// the condition
//     {// the answer
// console.log("this man is old his age is :"+age2);
// }
// if(age2 <= 70)// the condition
//     {// the answer
// console.log("this man is not old his age is :"+age2);
// }

// var age=20
// if(age >= 70)// the condition
//     {// the answer
// console.log("this man is old his age is :"+age);
// }else if (age >= 50 && age <60)// the condition
//     {// the answer
// console.log ( "u are in the midle age and ur age is :"+age);
// }
// else{
// console.log("the man is small and his age is :"+age);
// }
// // if any condition is done the other conditions will not be executed

// ============================================Switch case ==============

// var age = 20;
// var healthy = "strong";
// switch (
//   healthy // the condition i want to cheeck // if the first condition is true the other conditions will not be executed and will doing
// ) {
//   // the answer of the condition / in condition healthy = strong
//   case "strong": // the answer of the condition / in condition healthy = strong
//     console.log("your healthy is strong and ur age is :" + age);

//   case "weak": // the answer of the condition / in condition healthy = weak
//     console.log("your healthy is weak and ur age is :" + age);
//   default: // the answer of the condition / in condition healthy = default
//     console.log("your healthy is Good and ur age is :" + age);
// }
// -------------------------------------

// var age = 20;
// var healthy = "weak";
// switch (
//   healthy // the condition i want to cheeck // if the first condition is true the other conditions will not be executed and will doing
// ) {
//   // the answer of the condition / in condition healthy = strong
//   case "strong": // the answer of the condition / in condition healthy = strong
//     console.log("your healthy is strong and ur age is :" + age);
//     break; // to stop the execution of the other conditions

//   case "weak": // the answer of the condition / in condition healthy = weak
//     console.log("your healthy is weak and ur age is :" + age);
//     break; // to stop the execution of the other conditions
//   default: // the answer of the condition / in condition healthy = default
//     console.log("your healthy is Good and ur age is :" + age);
// }


//--------------

// var age = 70
// var healthy = "normal"
// switch (true){
//   case (age >70 ):
//     console.log("old");
//     break;  
    
//      case (age <70 ):
//     console.log("young");
//     break;   
//     default:
//     console.log("noemal");
// }


