// ITERATION
function fibs(n) {
    const arr = [0, 1];

    for (let i = 0; i < n - 2; i++) {
        arr.push(arr.at(-1) + arr.at(-2));
    }

    return arr;
}

console.log('Iteration: \n', fibs(8));

// RECURSION
function fibsRec(n, arr = [0, 1]) {
    // base case
    if (n == 2) {
        return arr;
    } else {
        // recursive case
        return fibsRec(n - 1, arr.concat(arr.at(-1) + arr.at(-2)));
    }
}

console.log('Recursion: \n', fibsRec(8));
