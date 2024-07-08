/* 
    The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
*/

const arr = [];

function replicate(times, num) {
    // base case
    if (times <= 0) return [];

    // recursive case
    return arr.push(num) + replicate(times - 1, num);
}

const tests = [
    [3, 5], // [5, 5, 5]
    [(1, 69)], // [69]
    [-2, 6], // []
];

for (const test of tests) {
    console.log(test);
    console.log(replicate(test[0], test[1]));
}
