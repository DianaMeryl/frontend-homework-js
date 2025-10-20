// 1 - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const result1 = goals(1,5,3);
console.log(result1);

// 2 - In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return ( num < 0 || num == 0 ) ? num : - num; 
}

const result2 = makeNegative(55);
console.log(result2);

// 3- In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move(position, roll) {
    return position + 2*roll;
}

const result3 = move(7, 5);
console.log(result3);

// 4- Create a function that gives a personalized greeting. This function takes two parameters: name and owner. 
function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
}
const result4 = greet("Ben", "Ben");
console.log(result4);

// 5 - Nathan loves cycling Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

function litres(time) {
    return Math.floor(time * 0.5);      
}

const result5 = litres(3);
console.log(result5);

// 6 - Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0)  ){
    return true;
  }
  return false;
}
const result6 = lovefunc(67, 62);
console.log(result6);
