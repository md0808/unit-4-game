# Crystal Collector

https://md0808.github.io/unit-4-game/


## Summary

This game requires a little luck, a little logic, and a decent memory. A number is randomly generated that the user has to try to match by clicking the magic crystals that contains hidden values. Each crystal is also assigned a random value at the beginning of each game. In order to win, the user has to observe the value that each crystal adds, and continue to add values together until the number to find is met.
![crystals](https://user-images.githubusercontent.com/51139840/67817158-722cbf00-fa7a-11e9-9e69-793c3200a217.gif)

## Problem

Create a game that requires a user to try to match a number that is randomly predetermined at the beginning of each game. The user must begins by randomly selecting a crystal, and must observe the value being added each time the crystal is clicked to understand which combinations of crystals to select to create the winning sum.

## Solution

Global Variables include an object containing each crystal, the "Magic Number", the user's number (sum of crystals clicked), and the number of wins and losses.

When start game is clicked, it triggers a function that randomly generates the magic number, and a value for each crystal, and resigns that value to those variables. As the user begins clicking crystals, the sum of the crystals accumulates as the "user number". If the user number becomes equal to the magic number, the user wins. If the user number becomes greater than the magic number, the user loses. The game continues as long as the user number is smaller than the magic number.




## Technologies Used
- JavaScript
- JQuery
- CSS
- Bootstrap Framework
- HTML
- Google Fonts
