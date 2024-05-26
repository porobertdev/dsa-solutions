/*
A recursive function that searches for a value
in an object, no matter how deep-nested the value is.

Time Complexity using Big O Notation is O(N) aka
linear complexity, because the .forEach() loops
over each element (key) in the array from Object.keys()
*/
function searchRecursive(obj, value) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] == value) {
            console.log('Value found in key:', key);
        } else if (typeof obj[key] == 'object') {
            return searchRecursive(obj[key], value);
        }
    });
}

const data = {
    personOne: {
        name: 'Robert',
        location: 'Romania',
        programming: {
            status: 'learning',
            lesson: 'Time Complexity',
        },
    },
    personTwo: {
        name: 'John',
        location: 'USA',
    },
    persons: [
        {
            name: 'Bob',
            location: 'UK',
        },
        {
            name: 'Alice',
            location: 'Sweden',
        },
    ],
};

searchRecursive(data, 'learning');
