# Beep Boop

#### Web application that takes a number from a user and returns some values, 01.24.2020

#### By Fatma Dogan

## Description

This is a web application project that takes a number from a user and returns a range of numbers or some values per specifications.

## Specifications

| Behavior         | input        | output |
| :--------------- |:------------:|:-----|
| The program returns a range of numbers from 0 to the users inputted number  |  |  |
| It replaces all digits with "Beep!" if numbers contain a 1 | 1 | 0, Beep! |
| It replaces all digits with "Boop!" if numbers contain a 2 | 2 | 0, Beep!, Boop!  |
| It replaces with  "I'm sorry, Dave. I'm afraid I can't do that." if numbers contain a 3 | 3 |  0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that. |
|These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.   |   |
| If a user inputs a 6, the program displays a list of values | 6 |0,Beep!,Boop!,I'm sorry, Dave. I'm afraid I can't do that.,4,5,6  |
|If a user inputs a 12, the program displays a list of values | 12  | 0,Beep!,Boop!,I'm sorry, Dave. I'm afraid I can't do that.,4,5,6,7,8,9,Beep!,Beep!,Boop!|


## Setup


* Clone this repository.

* Open a simple HTTP server in the top level of cloned directory. 

* or open in github page [here](https://fc-dogan.github.io/Beep-Boop/)

For a mac, run the following command in your terminal:

* $ git clone https://github.com/fc-dogan/Beep-Boop.git

* Then open your web browser of choice

## Technologies Used 

* HTML

* CSS

* Bootsrap

* JavaScript 

* jQuery