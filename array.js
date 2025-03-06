function reverseString(str){
    const newArray = str.split("").reverse().join("")
    return newArray;
}
console.log(reverseString("happy coding and great job"));