function reverseString(str) {
    const newArray = str.split("").reverse().join("")
    return newArray;
}
console.log(reverseString("happy coding and great job"));

function countVowels(strin) {
    let count = 0;
    const vowels = "aeiou"
    for (let char of strin) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}
console.log(countVowels("a e i o u"));

function isPalindrome(words) {
    const title = "umuvumu";
    const newArr = words.split("").reverse().join("");
    return newArr === title;

}
console.log(isPalindrome("umuvumu"));

function largestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(largestWord("you're welcome into programming life"));
console.log(largestWord("Find the longest word in this sentence"));
console.log(largestWord("Hello world"));


const numbers = [3, 4, 6, 7, 89];
numbers.forEach(function (number) {
    if (number % 2 === 0) {
        number -= 1
        console.log(number)
    } else {
        number += 2
        console.log(number);
    }

})
function titleCase(string) {
    return string.split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" "); 
}
console.log(titleCase("we are reach on luach time")); 

