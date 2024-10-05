let numbers = [10, 35, 1, 90, 150, 7]
console.log(numbers);

console.log(numbers[3]);

console.log(numbers[5]);

console.log(numbers.length);

numbers.push("68");
console.log(numbers);


let first = numbers.find(numbers => numbers >= 1)
console.log(first);

numbers.sort ((a,b)=> a-b);
console.log(numbers);

let foods = ["burger", "pizza", "taco", "steak"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
    
}

let [firstFood, secondFood] = foods;
console.log(firstFood);
console.log(secondFood);

