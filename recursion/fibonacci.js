// regular function
function fibs(n, arr = [0, 1, 1]) {
    while (arr.length != n) {
        arr.push(arr.at(-1) + arr.at(-2));
    }

    return arr;
}

console.log(fibs(8));

// recursive function
/* function fibsRec(n, arr = [0, 1, 1]) {
    // base case
    if (arr.length == n) {
        return arr;
    }

    // recursive case
    arr.push(arr.at(-1) + arr.at(-2));

    return fibsRec(n, arr);
} */

function fibsRec(n, arr = [0, 1, 1]) {
    // base case
    if (n - 3 <= 0) {
        return arr;
    }

    // recursive case

    return fibsRec(n - 1, arr.concat(arr.at(-1) + arr.at(-2)));
}

console.log(fibsRec(8));
