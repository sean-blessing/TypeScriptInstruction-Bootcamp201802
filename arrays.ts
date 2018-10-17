let numbers: number[] = [1, 3, 5, 7, 9];

console.log(numbers);

numbers.push(2,4,6,8);

console.log(numbers);

numbers[numbers.length] = 100;

console.log(numbers);

numbers.pop();

console.log(numbers);

//get rid of one element
numbers.splice(4,1);

console.log(numbers);

numbers.shift();

console.log(numbers);