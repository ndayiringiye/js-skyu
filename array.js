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