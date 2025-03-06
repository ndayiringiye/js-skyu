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

function isPalindrome(words){
    const title = "umuvumu";
    const newArr = words.split("").reverse().join("");
   return newArr === title ;

}
console.log(isPalindrome("umuvumu"));