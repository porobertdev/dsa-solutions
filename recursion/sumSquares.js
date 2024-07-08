/*
    Write a function that sums squares of numbers in list that may contain more lists
*/

/*

    Algorithm:

    Loop over all elements.
    If element is a number, add it to the sum: sum += n^2
    else if it's an array, then repeat by making a new recursive call with that array.

    Example:
    arr = [10, [[10], 10], [10]], // 400

    sumSquares(arr, 0)
        => arr[0] != array
            => arr
*/

/* 

[ [1, 2], 3 ]

arr.length != 0
    => [1, 2] == array
        => sumSquares([1, 2])
            => arr.length != 0
                => sum += 1^2 = 1
                    sum += 2^2 = 5
            return sum; // 5
    => 3 != arr
        => sum += 3^2 => 
*/

function sumSquares(arr, sum = 0) {
    // console.log(arr);

    // base case
    if (arr.length == 0) return 0;

    // recursive case
    for (const item of arr) {
        if (Array.isArray(item)) {
            sum += sumSquares(item);
        } else {
            sum += Math.pow(item, 2);
        }
    }

    return sum;
}

const tests = [
    [1, 2, 3], // 14
    [[1, 2], 3], // 14
    [[[[[[[[[1]]]]]]]]], // 1
    [10, [[10], 10], [10]], // 400
];

for (const test of tests) {
    console.log(sumSquares(test));
}
