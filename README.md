
#### 1) What is the difference between var, let, and const?
Answer:
var: variable declared with var keyword can access anywhere in the function.
    It can even console before it is declared.
    value can be changed after initializing.
    Even name of the variable can be changed.
    It can be used without giving a value.
Let: variable declared with let keyword can not access anywhere in the function.It is block scope. So, can not access outside of the {}/block.
     It can not console before it is declared.
     value can be changed after initializing.
     Name of the variable can not be changed.
     It can be accessed without giving a value.
Const:  variable declared with const keyword can not access anywhere in the function.It is block scope. So, can not access outside of the {}/block.
     It can not console before it is declared.
     value can  not be changed after initializing.
     Name of the variable can not be changed.
     It can not be accessed without giving a value.



#### 2) What is the difference between map(), forEach(), and filter()? 
Answer:
Map():Return a new array.
      Do something on the every element of the array.
      No changes on original array.
ForEach():Do not return anything.
      Traverse on the every element of the array.
      No changes on original array.
Filter():Return a new array who passed the given condition/conditions.
       Do something on the element that passed the conditions.
      No changes on original array.

#### 3) What are arrow functions in ES6?
Answer: 
Arrow Function: Anonymous function without name and having an arrow in the function declaration.
'this' on the arrow function does not work on current object. It behave like global/window object.
Must have to use function expression to use arrow function.

#### 4) How does destructuring assignment work in ES6?
Answer:
Destructuring: In this method we give a distinct variable name to the array index element or object property.Then we can access the array element or object properties without using regular way.Example-
const student = {
    name: "karim",
    age: 28
}
const studentAge = student.age;
console.log(studentAge);
output: 28

here we have accessed student object age property with destructuring variable.
We can also use destructuring on array.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer:
Template literals: It is also called backtick. We can dynamically pass variable inside template literals.
`Hello, ${name}! Good Morning.`
While this can be done using string concatenation. But things will be messy and look like below-
"Hello, " + name + "! Good Morning."
Using concatenation instead of template literals being crazy whenever we need to use a large string with lot of variables.
Using template literals we can also write innerHtml like
`<h1>this is heading 1</h1>`

