// * ===  Write a function to split a string and convert it into an array of words. ===
function stringToArray(string){
	return string.split(" ");
}
// const arr = stringToArray("Hello world from Diana");
// console.log(arr);


// ** Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). Create a function which translates a given DNA string into RNA 

function DNAtoRNA(dna) {
    const arrRna = dna.replace(/T/g, "U");
    return arrRna;
}
// const rna = DNAtoRNA("GCAT");
// console.log(rna);



// * === Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number. ===
var min = function(list){
    
    return Math.min(...list);
}
var max = function(list){
    
    return Math.max(...list);
}
// console.log(min([4,6,2,1,9,63,-134,566]));
// console.log(max([4,6,2,1,9,63,-134,566]));


// * === Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'. ===
function min(arr, toReturn) { 
    const result = Math.min(...arr);

    if(toReturn === "value"){
        return result;
    }
    else if(toReturn === "index"){
        return arr.indexOf(result);
    }
}
// const result = min([1,2,3,4,5], "value");
// console.log(result);


// * === Code as fast as you can! You need to double the integer and return it. ===
function doubleInteger(i) {
    return i*2;
}
// const double = doubleInteger(5);
// console.log(double);


// * ===  Your function takes two arguments:current father's age (years) current age of his son (years) Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.===
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld*2);
}
// const years = twiceAsOld(55, 30);
// console.log(years);


// * === Return the Nth Even Number ===
function nthEven(n){
    const arr = [];

    for(let i = 0; arr.length <= n; i++){
        if(i % 2 === 0){
        arr.push(i);
        }
    }
    return arr[n-1];
}
// const even = nthEven(100);
// console.log(even);


// * === With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.===
function getRealFloor(n) {
    if(n <= 0){
    return n;
    }
    if(n < 13){
    return n-1;
    }
    return n-2;
}
// const flor = getRealFloor(20);
// console.log(flor);


// * === Clock shows h hours, m minutes and s seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds. ===
function past(h, m, s){
    return ((h*60 + m)*60 + s)*1000;
}
// const time = past(3,20,50);
// console.log(time);


// * === Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers. ===
function isDivisible(n, x, y) {
    if(Number.isInteger(n / x) && Number.isInteger(n / y)){
    return true;
    }
    return false;
}
// const divisible = isDivisible(100, 5, 3);
// console.log(divisible);