// Question 3 -- changePossibilities(amount,amount): 
// Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something 
// they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, 
// computes the number of ways to make the amount of money 
// with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
// your program would output 4 — the number of ways to make 4¢ 
// with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/

const changePossibilities = ( aDenom, numOfDen, amount  ) => {

  // Recursive solution: 

  const aDen = aDenom.slice(0, -1);

  if (amount === 0) {
    return 1;
  }

  if (amount < 0) {
    return 0;
  }

  if ((amount >= 1) && ( numOfDen <= 0 )){
    return 0;
  }

  return changePossibilities(aDen, aDen.length , amount ) 
         + changePossibilities(aDenom, numOfDen , amount - aDenom[numOfDen - 1] );

  //  End of the Recursive solution...

}

let denomOfCoins = [1, 2, 3];
let numberOfElem = denomOfCoins.length;

let targetAmount = 4;
console.log('Number of ways: ', changePossibilities( denomOfCoins, numberOfElem, targetAmount ));
// Should be ===> 4

targetAmount = 5;
console.log('Number of ways: ', changePossibilities( denomOfCoins, numberOfElem, targetAmount ));
// Should be ===> 5

targetAmount = 100;
denomOfCoins = [1, 5, 10, 25, 50];
numberOfElem = denomOfCoins.length;
console.log('Number of ways: ', changePossibilities( denomOfCoins, numberOfElem, targetAmount ));
// Should be ===> 292


