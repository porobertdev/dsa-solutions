function binarySearch(arr, target) {
    console.log(arr);

    // base case
    if (arr.length == 1) {
        return false;
    }

    const middle = Math.floor(arr.length / 2);

    if (arr[middle] == target) {
        return `target value: ${target} found at index ${middle}`;
    }

    return target < arr[middle]
        ? binarySearch(arr.slice(0, middle), target)
        : binarySearch(arr.slice(middle), target);
}

const tests = [
    {
        arr: [1, 2, 3, 4, 5, 6, 7, 8],
        value: 5,
    },
    {
        arr: [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30],
        value: 19,
    },
];

for (test of tests) {
    console.log(binarySearch(test.arr, test.value));
}
