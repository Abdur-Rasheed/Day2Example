
//alert("Hello World");
//one line comment 
/*THis is how yo do a comment in js
External JS
We need a JS file
We need to link that JS file to our html. We still need to use
the script tag
*/

//alert("we are now using external JS");

/*
Variables

As of ES6, We do have two ways of creating a varaible and also one way for creating a constant.

original method for creating varibles is to use var

Syntax

var variableName;

Declaring variables with let
this was introduced in 2015 in ES6

let variableName;



*/

var num;
let num2;

//Assignment statements
num=9;
num2=10;

//Variable initialization statement
let total=num+num2;

const PI=3.14;

let name1='"I like programming". HE said';

/*
Escape characters
\' single quote
\" double quote
\\ backward slash
\n new line
*/
console.log(name1);

//console.log(num);

/*

Data Types in Java Script
Primitive types
1.String e.g. "THis is a string"
A string is a sequence of characters that are enclosed in single quotes or double quotes
2. Number e.g. 12/Infinity/3.14 In JS, akk numbers are floats
3.Boolean=> true or false
4.null
5.undefined

Objects e.g. {key:value},/ array[1,2,4], function

null vs undefined

undefined this means a variable has been declared but has not been assigned a value yet.Also
 if a function deos not explicitly return a value, then it ends up returning undefined

 null this is an assignment value. THis is used to represent the absence of a vaule. In JS null means nothing
*/
let sum;
console.log(sum);

/*

Type coercion:
The process of converting one data type to another. THis can be implicitly or explicitly

JS is a weakly-typed language


2+2=4
2+'2'="22"
'2'+2="22"
'2'+'2'='22'
'2'-0=2

*/


/*Functions

A function is  a block of code that is desgined to perdorm an particular task.
A function ha a name.
and a function is executed when something invokes it.

Because of ES6, we have three different ways of declaring functions in Java Script
1. function keyword decalration
2. function expression saved in a variable
3. ES6 Arrow functions

The function keyword declaration
with this, a function is defined with teh function keyword, followed by the function name, followed by parentheses()
Function name can contain letters,digits,underscores, dollar signs. A function name cannot start with a number

function functionName(parameter1,parameter2,parameter3..parameterM){
    function body. this is the code to be executed when the function is called

    In java, this is a method.
}

*/
function test(){
    alert("hello world");
    
}


function getSum(num1,num2){
    return num+num2;
}

/*
Hoisting

Hoisting is JS's default behaviour of moving declarations to the top.

Whn using function functionName(parameters){...} to declare a function,
this function will hoist to the top of the script.

*/



// to call a function. you just use the function name and arguments



//test();
getSum(90,20);


x=10;
console.log(x);
var x;

/*

In Js, a varaibale can be declared after it has been used.This means a 
variable can be used before it has been declared.


Function expressions (function expression saved in a variable)

A function can also be defined using an expression.
A function expression can be stored into a variable.
After a function has been stored into a variable, the variable can be used 
as a function

let variableName=function(parameters){code to be executed goes here};

variableName(arguement);

*/
let getTotal=function(a,b,c){return a+b+c};

let y=getTotal(1,3,12);
console.log(y);

/*
Arrow functions
Arrow functions is another new way of creating functions. This was added in ES6
Arrow functions allow us to write a shorter function syntax.



Syntax for arrow functions
arrowFunctionName=(parameters)=>{
    code to be executed goes here
}



Given the following function expression,
let hello =function(){
    alert("hellow world)");
}

convert it into an arrow function.
solution


*/

let hello=()=>{
    let carName="Toyota";//This is a local variable 
   // alert("hello world"+ carName);
}
/*Global variables
Variables declared outside of any function  have global scope.

*/
//console.log("otuside"+carName)
//hello();

/*


Scope
Local scope and global scope


Local JS Variables
Variables declared within a function, they are local to the funciton
Local variables have a function scope. Local variables can only 
be accessed witht he function where they are declared.

Arrays

Arrays are used to hold a collection of data and in JS arrays can be able to hold data of different types.

let arrayName=[];//This is an empty array
let arrayName1=[value1,value2,value3,..]

to change a value
arrayName[index]=newValue;


*/
let cunySchool=["LC","CCNY","BCC","Hostos","Hunter",1];

/* to access vlues from an array, you need the array name and an index.
arrayName[index]
*/
console.log(cunySchool[0]);
console.log(cunySchool.length);

cunySchool[0]="Lehman College";
console.log(cunySchool[0]);
console.log(cunySchool[cunySchool.length-1]);

/*
Objects
This is a way of organizing data using key/value pairs
Objects can contain many values

*/

const car={make: "Toyota",
 model: "Matrix"};

/*
Accesing data from objects
bracket notation

obejctName["key"]

dot notation

objectName.keyName
*/

//bracket notation
console.log(car['make']);

//dot notation
console.log(car.model);



/*
Functions

Higher order functions
A higher order funtioon is a function that operaties on any other function
 either as an argurments(actual parameters) or return them

 function outerFunc(cb){
     return cb();
 }

From the example above which one is the higher order funtion
OuterFunc. This is because the outerFunc takes in cb and returns the call of the cb inside it

Callback Function
A callback function is any functipon that is passed into anoher function as an arguments,
which is then called inside the outer function to complete some action

Callback functions can be declared as functions, function expressions, or even anonymous
functions.

function outerFunc(cb){
     return cb();
 }

 What is callback function in the above example?
 cb()is the callback function and outerFunc is the higher order function
*/

function firstFunction(){
    
displayAlert("hello one");
}
function secondFunction(){
displayAlert("Hello two");
}
function displayAlert(text){
alert(text);
}
function calculate(num1,num2, callBackFunction){
    var t=num1+num2;
    callBackFunction(t);
}
secondFunction();
firstFunction();
calculate(30,20, displayAlert);
