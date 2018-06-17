// Question 2 -- decodeString(s): 
// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], 
// where the encoded_string inside the square brackets is repeated exactly k times. 
// Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]c]", the output should be decodeString(s) = "baaacbaaac"

const decodedString = (s) => {

  const arrMult = [];
  const arrSubStr = [];

  let newBrInd = 0;
  let lastInd = 0;

  let oldSubStr = s;
  let newSubStr = '';

  let leftSubStr = '';

  let decSubStr = '';

  let mult = '';
  let pattern = '';
  
  // Parse original string collecting multipliers
  // and respective sub-strings in separate arrays.
  // Sub-strings are stripped of outward "[]"...
  for (let i = 0; i < s.length; i++) {

    newBrInd = oldSubStr.indexOf( '[' );
    lastInd = oldSubStr.lastIndexOf( ']');

    if (lastInd === -1) {
      break;
    }

    leftSubStr = oldSubStr.substring(0, newBrInd);

    mult = leftSubStr.replace(/^\D+/g, '');
    arrMult.push(mult);

    newSubStr = oldSubStr.substring(newBrInd + 1, lastInd);
    arrSubStr.push(newSubStr);

    oldSubStr = newSubStr;

  }

  // Decode all the sub-strings in reverse manner...
  for (let j = arrMult.length - 1; j >= 0; j--) {


    decSubStr = arrSubStr[j].repeat(1*arrMult[j])
    
    pattern = new RegExp(arrMult[j] + "\\[" + ".+" + "\\]");

    if ((j - 1) >= 0) {

      arrSubStr[j - 1] = arrSubStr[j - 1].replace(pattern, decSubStr);

    }

    if (j === 0) {

      arrSubStr[j] = decSubStr;

    }

  }

  return arrSubStr[0];

}

console.log('The result: ', decodedString( '4[ab]' ));          // Should be ===> "abababab"...
console.log('The result: ', decodedString( '2[b3[a]c]' ));      // Should be ===> "baaacbaaac"...
console.log('The result: ', decodedString( '4[z2[b3[a]c]]' ));  // Should be ===> "zbaaacbaaaczbaaacbaaaczbaaacbaaaczbaaacbaaac"...
