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


// This represents an attempt to collect
// all the sets of coins giving the 
// conditions above.

// The task proved to be incomplete under 
// conditions of [1, 5, 10, 25, 50] denominations
// and the target amount of 100¢... Total number
// of ways is 292...

// But even with target amount of 6¢ another
// recursive run of decomposition procedure
// is required... Total number of ways is 7...


const allCoinsCombinations = ( aDenom, amount  ) => {

  const coinSets = [[amount]];
  const aDenRevers = aDenom.reverse();
  const numCurDen = Math.floor(coinSets[0]/aDenRevers[0]);
  
  const remainTar = coinSets[0]%aDenRevers[0];

  const aDenRevI = 0;
  const curInd = 1;

  const allCoinsRecursive = ( aDenRev, curCnI, cSets, curI, nCurDen, remTar ) => {
    console.log('In allCoinsRecursive: ...');

    cSets.push([]);
    
    const lenSets = cSets.length;

    const breakRemainder = ( newCurCnI, newNumCurDen, newRemTar ) => {

      console.log('In breakRemainder...');

      for (let i = 0; i < newNumCurDen; i++) {

        cSets[lenSets - 1].push(aDenRev[newCurCnI]);

      }

      if ((newRemTar <= aDenRev[newCurCnI + 1]) && (newRemTar != 0)) {

        cSets[lenSets - 1].push(newRemTar);

      } else if (newRemTar != 0) {
        // Next coin denomination...
        const newCuCnI = curCnI + 1;
        // Reset remainder for the next coin...
        const newReTar = remTar%aDenRev[newCuCnI];
        // Reset number of the next coin within remainder...
        const newNuCurDen = Math.floor(remTar/aDenRev[newCuCnI]);

        // Recursively...
        // Breaking the remainder by all coin denominations...
        if ((newCuCnI + 1) < aDenRev.length) {
          breakRemainder( newCuCnI, newNuCurDen, newReTar );
        } else {
          return;
        }

      } else {
        //do nothing...
      }
    }

    breakRemainder( curCnI, nCurDen, remTar);

    // Recursively...
    // Breaking the target by all coin denominations...
    if ((curCnI + 1) < aDenRev.length) {

      // Reset the number of current denomination
      // in original target...
      const nuCurDen = Math.floor(coinSets[0]/aDenRevers[curCnI + 1]);
      // Reset remainder...
      const neRemTar = coinSets[0]%aDenRevers[curCnI + 1];

      allCoinsRecursive( aDenRev, curCnI + 1, cSets, curI + 1, nuCurDen, neRemTar);

    } else {
      // do nothing...
    }

    return coinSets;
  }

  console.log('All basic sets: ', allCoinsRecursive( aDenRevers, aDenRevI , coinSets, curInd, numCurDen, remainTar));
  // All basic sets are done...

  // Array for additional sets...
  const arrAdComb = [];
  const lastIndRev = aDenRevers.length - 1;

  const addCombosRec = ( cnSets, jSet ) => {
    // Add combinations of coins recursively...

    console.log('In addCombosRec...');

    // We have created basic sets of the pattern:
    // 3¢, 2¢ 
    // 2¢, 2¢, 1¢
    // 1¢, 1¢, 1¢, 1¢, 1¢
    
    // And now we need to add more variations on it 
    // like so:

    // 3¢, 2¢       ===> 3¢, 1¢, 1¢ 
    // 2¢, 2¢, 1¢   ===> 2¢, 1¢, 1¢, 1¢

    // where {2¢} replaced with {1¢, 1¢}

    const addVar = ( set, iSet, coin, oldCn ) => {
      // Add variations...
      console.log('In addVar...');

      let curDenInd = aDenRevers.indexOf(set[iSet]);

      if ( curDenInd < lastIndRev ) {

        const newCoin = aDenRevers[curDenInd + 1];

        let mult = Math.floor(coin/newCoin);
        let remain = coin%newCoin;

        if (iSet === 1) {
            
            arrAdComb.push(set);

        } else if (iSet > 1) {
            
            const lastEl = arrAdComb[arrAdComb.length - 1].map( el => el );
            
            arrAdComb.push(lastEl);

        } else {
          // do nothing...
        }
        
        // {2¢} replacement with {1¢, 1¢} is done
        // here...
        let lenArAdCmb = arrAdComb.length;

        arrAdComb[lenArAdCmb - 1].splice( 1, 1 );

        for (let l = 0; l < mult; l++) {

          arrAdComb[lenArAdCmb - 1].push( newCoin );
          
        }

        if ( remain != 0 ) {
          // ...and the new remainer...
          arrAdComb[lenArAdCmb - 1].push(remain);

        }
      }
    }

    for (let j = jSet; j < cnSets.length; j++) {

      const oldCoin = cnSets[j][1];
      const curSet = cnSets[j].map( el => el );

      if (j === (cnSets.length - 1)) {
        break;
      }

      for (let k = 1; k < cnSets[j].length; k++) {

        let curCoin = cnSets[j][k];

        if (oldCoin === curCoin) {
          addVar( curSet, k, curCoin, oldCoin );
        }
      }
    }

    arrAdComb.sort().reverse();

    if ( arrAdComb[0][1] > aDenRevers[lastIndRev] ) {
      console.log('Another run of addCombosRec...');

      return;

      // Second run is unfinished...
      // addCombosRec( arrAdComb, 0 );
    }      
  }

  addCombosRec( coinSets, 1 );

  const arr = coinSets.concat(arrAdComb);

  arr.sort();
  arr.reverse();

  console.log('arr: ', arr);

  return arr;

}

let denomOfCoins = [1, 2, 3];
let targetAmount = 4;

console.log('Coin sets for 4¢: ', JSON.stringify( allCoinsCombinations( denomOfCoins, targetAmount )));
// Should be ===> 4

denomOfCoins = [1, 2, 3];
targetAmount = 5;

console.log('Coin sets for 5¢: ', JSON.stringify( allCoinsCombinations( denomOfCoins, targetAmount )));
// Should be ===> 5

denomOfCoins = [1, 2, 3];
targetAmount = 6;

console.log('Coin sets for 6¢: ', JSON.stringify( allCoinsCombinations( denomOfCoins, targetAmount )));
// Should be ===> 7
// [3, 1, 1, 1]        and
// [2, 1, 1, 1, 1]     are require second run...

// targetAmount = 100;
// denomOfCoins = [1, 5, 10, 25, 50];

// console.log('Coin sets for 100¢: ', JSON.stringify( allCoinsCombinations( denomOfCoins, targetAmount )));
// Should be ===> 292


