---
title: "Hoisting in Javascript."
description: "JavaScript Closure: What is it & How do you use it?"
date: "2023-10-15"
banner:
  src: "../../images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://unsplash.com/@lautaroandreani?utm_source=medium&utm_medium=referral">Florian Olivo</a></u>'
categories:
  - "Tutorial"
 
keywords:
  - "Closure"
  - "Javascript"
  - "Markdown"
  - "Blog"
---



In this post, you will discover what Hoisting in javsacript is and how to use it in your programming code

## Introduction
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

In other words; a variable can be used before it has been declared.The interpreter processes these declarations first and makes them available throughout the entire scope.

```
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

n this case, the function declaration function sayHello() is hoisted to the top, so it can be called before the actual declaration in the code. 
```
console.log(x); // undefined
var x = 5;
console.log(x); // 5

```
In this code snippet, even though the console.log(x) appears before the declaration of var x = 5;, the variable declaration is hoisted to the top, so the first console.log(x) outputs undefined rather than throwing an error.

```
myFunction(); // TypeError: myFunction is not a function

var myFunction = function() {
  console.log("I am a function expression!");
};

```
Function expressions are not hoisted in the same way. The variable myFunction is hoisted, but it is assigned the value undefined until the line where it's assigned the function expression is reached. Therefore, trying to call it before the assignment results in a TypeError.
