let numbers = [];

for (let i = 0; i <= 50; i++) {
  numbers.push(i);
}

numbers = numbers.filter((num) => {
  return num % 2 != 0;
});

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(numbers);
console.log(sum)
