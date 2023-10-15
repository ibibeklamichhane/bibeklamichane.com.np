---
title: "Closure Function in Javascript."
description: "JavaScript Closure: What is it & How do you use it?"
date: "2021-05-28"
banner:
  src: "../../images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://unsplash.com/@lautaroandreani?utm_source=medium&utm_medium=referral">Florian Olivo</a></u>'
categories:
  - "Closure"
  - "Function"
  - "Javascript"
keywords:
  - "Closure"
  - "Javascript"
  - "Markdown"
  - "Blog"
---





In this post, you will discover what JavaScript Closure is and how to use it in your programming code. You will also learn more than one way to perform closure in JavaScript. Finally, you will see code examples of how to complete your closure to support everything you have learned.

## What is Closure

Closures are a fundamental JavaScript concept that every serious programmer should know inside and out.
Closures are an extremely powerful property of JavaScript.
It is a feature in Javascript where an inner function has access to the outer (enclosing) function's variables

"Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned."

## A Simple Example

```
function OuterFunction() {

    var outerVariable = 10;

    function InnerFunction() {
        alert(outerVariable);
    }

    InnerFunction();
}
const closure = outerFunction();
closure();

```
So as per the definition above, InnerFunction() can access outerVariable even if it will be executed separately

Here the Output is still 10 even though the outer value is already defined as the outer function is still remembered.This action is what we called Closure.


In this example, innerFunction is defined within the scope of outerFunction, and it accesses the outerVariable from its containing function. When outerFunction is called, it returns innerFunction, and the returned function retains access to the outerVariable even though outerFunction has finished executing. This is a closure in action.

