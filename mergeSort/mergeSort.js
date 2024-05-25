function mergeSort(arr) {
    // base case
    if (arr.length == 1) {
        return arr;
    } else if (arr.length == 2) {
        return merge([arr[0]], [arr[1]]);
    } else {
        const half = arr.length / 2;

        const leftHalf = arr.slice(0, half);
        const rightHalf = arr.slice(half);

        return merge(mergeSort(leftHalf), mergeSort(rightHalf));
    }
}

function merge(left, right) {
    // console.log('left:', left, ' - right:', right);

    if (left == '' || right == '') {
        return left == '' ? right : left;
    } else {
        const a = left[0];
        const b = right[0];
        // console.log(`a: ${a}, b: ${b} \n`);

        return [a < b ? left.shift() : right.shift()].concat(
            merge(left, right)
        );
    }
}

const tests = [
    [3, 2, 1, 13],
    [105, 79, 100, 110],
    [3, 2, 1, 13, 8, 5, 0, 1],
    [50, 1, 399, 0, 10],
    [50, 1, 399, 0, 150, 200, 40, 35, 500, 10, 25, 3, 65, 80]
];

for (const arr of tests) {
    console.log('\n\n === SORTING ===');
    console.log(arr, '\n');

    console.log('\n === RESULT ===');
    console.log(mergeSort(arr), '\n');
}
