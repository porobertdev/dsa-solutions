/*
 Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
*/

/* Algorithm

  Check if the object has keys.
  
  Check each key.
    If the first key contains the target value, return it.
    else if the key is an object, recursive call with obj[key]
*/

function contains(obj, target) {
    // base case
    if (Object.keys(obj).length == 0) {
        return;
    }

    // recursive case
    for (const key in obj) {
        if (obj[key] === target) {
            return `value found in key: ${key}`;
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj)) {
            return contains(obj[key], target);
        }
    }
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2',
                    },
                },
            },
        },
    },
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, 'foo'); // false

console.log(hasIt, doesntHaveIt);
