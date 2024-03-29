# _Pizza Project_

#### By _**Oscar Gonzalez**_

#### _This website is made for a user to pick a size and select toppings for the pizza they wish to order._

## Technologies Used

*_HTML_
*_CSS_
*_JavaScript_
*_Bootstrap_
*_Markdown_

## Description

_This is my fourth project for Epicodus that is meant to show off my understanding of object-oriented Javascript. The user will pick the size of pizza they would like, the which toppings they want, and get a price total. Here is a [link](https://github.com/OLGON92/A-Pizza-My-Heart) to the repository on GitHub._

## Setup/Installation Requirements
* _Click link above for the gitHub repository_
* _Clone the repository_
* _Save the repository to your computer_
* _Click the index.html file_
* _It should open in your preferred web browser_

## Known Bugs

* _No known bugs_ 

## License

_If you have any questions or concerns please contact me at ogon318@gmail.com
You are also welcome to make any contributions if you'd like_

* _MIT License
Copyright (c) 2022 Oscar Gonzalez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

## Test Driven Development Notes

_Describe: Pizza()_

_Test 1: "The function should return the size and toppings that were entered."_
_Code: let pizza1 = new Pizza('Small', ['Sausage'])_
_Expected Result: Pizza {size: 'Small', toppings: Array(1)}
size: "Small"
toppings: ['Sausage']_

_Test 2: "The function should return the size and toppings that were entered."_
_Code: let pizza3 = new Pizza('Small', ['Saitan', 'Onions'])_
_Expected Result: Pizza {size: 'Small', toppings: Array(2)}
size: "Small"
toppings: (2) ['Saitan', 'Onions']_

_Describe: Pizza.prototype.cost()_

_Test 3: "It should calculate the cost of a small pizza with 2 toppings of Saitan and Onions."_
_Code: pizza3.cost()_
_Expected Result: 14_ 

_Test 4: "It should calculate the cost of a small pizza with 1 topping of Sausage."_
_Code: pizza1.cost()_
_Expected Result: 12_ 
