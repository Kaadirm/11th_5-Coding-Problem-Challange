/*
------   1   -------

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

SOLUTION

function validatePIN (pin) {
    const RegExp = /(^[0-9]{4}$)|(^[0-9]{6}$)/;
    if (pin.length === 5 || pin.length > 6){
        return false 
    }
    else{
    return RegExp.test(pin)
    }
}
 
------   2   -------

Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26

SOLUTION

function lowercaseCount(str){
    const regExp = /[a-z]/g
    const matched = str.match(regExp);
    return !matched ? 0 : matched.length
}

------   3   -------

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.


SOLUTION

function isToday(date) {
  return new Date().toDateString() === date.toDateString() ? true : false
}

------   4   -------

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.


SOLUTION 

function capitalize(s){
    const evenArray = [];
    const oddArray = [];
    const totalArray = [];
    for(let i=0; i<s.length; i++){
      if(i % 2 === 0 || i === 0){
        evenArray.push(s[i].toUpperCase());
        oddArray.push(s[i])
      }
      else {
        oddArray.push(s[i].toUpperCase());
        evenArray.push(s[i])
      }
    }
    totalArray.push(evenArray.join(''))
    totalArray.push(oddArray.join(''))
    return totalArray
};

------   5   -------

Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

maxNumber (213) ==> return (321)


SOLUTION

Number(n.toString().split("").sort((a,b)=> b-a).join(""))

*/