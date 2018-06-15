// Question 1 -- sortByStrings(s,t): 
// Sort the letters in the string s by the order they occur in the string t. 
// You can assume t will not have repetitive characters. 
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
// For s = "good"    and t = "odg",      the output should be sortByString(s, t) = "oodg".

const sortByString = (s, t) => {

  return t.split('')
          .map( elT => {
            return s.split('')
                   .reduce( (acc, elS, k) => {
                      return (( elS === elT ) ? acc.concat(k) : acc)
                   }, []);
          })
          .reduce(( acc, elI ) => {
            return acc.concat(elI
                              .map( el => {
                                return s.split('')[el];
                              }));
          },[]).join('');

}

console.log(sortByString('weather', 'therapyw')); // Should be ===> "theeraw"...
console.log(sortByString('good', 'odg'));         // Should be ===> "oodg"...


