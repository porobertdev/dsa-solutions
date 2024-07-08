/* 
 Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
*/

function sumRange(n) {
    if (n == 0) {
        return n;
    }

    return n + sumRange(n - 1);
}

console.log(sumRange(5));
