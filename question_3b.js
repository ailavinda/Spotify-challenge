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

  // Table DP solution:

  const arrTab = [];
  for (let i = 0; i < (amount + 1); i++) {
    arrTab.push([]);
    for (let j = 0; j < numOfDen; j++) {
      if (i === 0) {
        arrTab[i].push(1);
      } else {
        arrTab[i].push(0);
      }
    }
  }

  for (let i = 1; i < (amount + 1); i++) {
    
    for (let j = 0; j < numOfDen; j++) {

      if ( (i - aDenom[j]) >= 0 ) {

        incl = arrTab[i - aDenom[j]][j];
      } else {
        incl = 0;
      }

      if ( j >= 1 ) {
        excl = arrTab[i][j - 1];
      } else {
        excl = 0;
      }

      arrTab[i][j] = incl + excl;

    }
  }

  return arrTab[amount][numOfDen - 1];

  // End of the Table DP solution... 

}

let denomOfCoins = [1, 2, 3];
let numberOfElem = denomOfCoins.length;
let targetAmount = 5;

console.log('Number of ways: ', changePossibilities( denomOfCoins, numberOfElem, targetAmount ));          

// Should be ===> 5


targetAmount = 100;
denomOfCoins = [1, 5, 10, 25, 50];
numberOfElem = denomOfCoins.length;
console.log('Number of ways: ', changePossibilities( denomOfCoins, numberOfElem, targetAmount ));
// Should be ===> 292



