// Question no 1
let str = "AbdulMueed"
function findlenght(){
    return str.length
}
console.log(str.length);
// Question no 2
let str1 = "chMueed"
let str2 = "Zafar"
const newstr = str1.concat(str2)
console.log(newstr);
// Question no 3
let string = " "
if (string){
    console.log("string is not empty" );
}
else{
    console.log("string is empty")
}
// Question no 4
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// Example usage:
const inputString = "Hello, how are you?";
console.log("Number of vowels:", countVowels(inputString));
// Question no 5
function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalstr = "mueed";
const reversedstr = reverseString(originalstr);
console.log(reversedstr);
// Question no 6
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
const stringToCheck = "A man a plan a canal Panama";
if (isPalindrome(stringToCheck)) {
    console.log(`${stringToCheck} is a palindrome.`);
} else {
    console.log(`${stringToCheck} is not a palindrome.`);
}
