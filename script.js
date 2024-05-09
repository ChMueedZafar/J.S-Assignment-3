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
// Question 7 
let originalstring = "abdul mueed";
let uppercasestring = originalstring.toUpperCase();
console.log(uppercasestring);
// Question no 8
let str4 = "mueed"
let firstchar = str4.charAt(0);
console.log(firstchar);
// Question no 9
let str5 = "mueed"
let replacestr5 = str5.replace("mueed","zafar")
console.log(replacestr5);
// Question no 10
let str6 ="     mueed      ";
let trimedstr6 = str6.trim();
console.log(trimedstr6);
// Question no 11
let str7 = "mueed 5588 zafar"
let count =str7.split(" ").length
console.log(count);
// Question no 12
const mystring = "12345";
function isnumericstring(mystring){
    return / ^[0-9]+$/.test(mystring);
}
console.log(isnumericstring(mystring));
// Question no 13
function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
var email = "mueed@example.com";
if (isValidEmail(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}
// Question no 14
function extractdomain(url){
    let urlobject = new URL(url)
    return urlobject.hostname
}
let url = "https://www.mueed.com/path/to/resource";
let domain = extractdomain(url);
console.log(domain);
// Question 15
let text = "abdul mueed zafar";
let titlecasetext = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log (titlecasetext);
// Question 16
let str8 = "Mueed! 5588 zafar"
let textclean = str8.replace(/ \b[^a-zA-Z]+\b /g,'');
console.log(textclean);
// Question 17
function isPalindromePermutation(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s+/g, '').toLowerCase();

    // Count frequency of each character
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Count the number of characters with odd frequency
    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    // For an even length string, no character should have an odd frequency
    // For an odd length string, only one character can have an odd frequency
    if ((str.length % 2 === 0 && oddCount === 0) || (str.length % 2 !== 0 && oddCount === 1)) {
        return true; // Valid palindrome permutation
    } else {
        return false; // Not a valid palindrome permutation
    }
}
console.log(isPalindromePermutation("Tact Coa")); 
console.log(isPalindromePermutation("hello"));
// Queation no 18
function areAnagrams(str1, str2) {
    // Remove spaces and punctuation, and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("astronomer", "moon starer")); 
console.log(areAnagrams("hello", "world"));        
// Question no 19
function findLongestWord(str) {
    // Split the string into individual words
    const words = str.split(/\s+/);

    // Initialize variables to track the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word
    for (let word of words) {
        // Remove any punctuation marks
        word = word.replace(/[^\w]/g, '');

        // Check if the current word is longer than the current longest word
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord;
}
const sentence = "The quick brown fox jumped over the lazy dog.";
console.log(findLongestWord(sentence));
// Question no 20
function compressString(str) {
    let compressedString = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedString += str[i] + count;
            count = 1;
        }
    }
    return compressedString.length < str.length ? compressedString : str;
}
const originalString = "aaabbbccccc";
console.log(compressString(originalString));



