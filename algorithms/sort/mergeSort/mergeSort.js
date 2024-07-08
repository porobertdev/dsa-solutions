function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    if (left.length == 0 || right.length == 0) {
        return left.length == 0 ? right[0] : left[0];
    }

    const a = left[0];
    const b = right[0];

    return [a < b ? left.shift() : right.shift()].concat(merge(left, right));
}

const tests = [
    [6, 3, 8, 4, 0, 5, 1],
    [342, 120, 5, 230, 15, 9],
    [1300, 230, 1450, 9, 378, 999, 750, 1320, 80, 34, 91, 27],
];

for (test of tests) {
    console.log(mergeSort(test));
}
