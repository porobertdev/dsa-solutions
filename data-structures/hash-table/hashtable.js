import { LinkedList } from '../linkedListRecursive.js';

/**
 * Creates a Hash Table/Map.
 * @constructor
 * @param {number} [size] - The size of the table.
 */
class Hashmap {
    constructor(size = this.#initialSize) {
        this.size = size;
        this.table = Array(this.size);
    }

    #initialSize = 16;
    #loadFactor = 0.75;

    /**
     * Generates a hash code for the key.
     * @function
     * @param {string} key - The name of the key.
     */
    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (const char of key) {
            hashCode += primeNumber * hashCode + char.charCodeAt(0);
        }

        // console.log(hashCode);
        return hashCode % this.size;
    }

    /**
     * Checks the growth rate and resize the Hash Table automatically.
     * @function
     */
    #checkGrowth() {
        const usedBuckets = this.table.filter((bucket) => !!bucket).length;

        // extend the table (double in size);
        if (usedBuckets >= this.size * this.#loadFactor) {
            console.warn('\n[Growth Factor] Triggered, resizing table...\n');
            this.size *= 2;
            this.table = this.table.concat(Array(this.size / 2));
        }
    }

    /**
     * Returns all keys/values/entries of the Hash Table.
     * @function
     * @param {string} type - The type of values to get: key/values/entries
     */
    #getObjValues(type) {
        const nodes = {};

        for (const bucket of this.table) {
            // if bucket is not empty
            if (bucket) {
                // if it's a linked list
                if (bucket.head) {
                    this.#traverse(bucket, (node) => {
                        Object.assign(nodes, node.value);
                    });
                } else {
                    Object.assign(nodes, bucket);
                }
            }
        }

        return Object[type](nodes);
    }

    /**
     * Traverses the linkedList.
     * @function
     * @param {array} bucket - The bucket array.
     * @param {function} cb - Callback to run for each node
     */
    #traverse(bucket, cb) {
        let node = bucket.head;
        let isNodeFound = false;

        while (node !== null) {
            isNodeFound = cb(node);

            if (isNodeFound) {
                break;
            }

            // move to next node
            node = node.next;
        }

        return isNodeFound;
    }

    /**
     * Add a key/value pair in the hash table
     * @function
     * @param {string} key - The name of the key.
     * @param {string} value - The value for the key.
     */
    set(key, value) {
        this.#checkGrowth();

        // generate hash code
        const index = this.#hash(key);
        let bucket = this.table[index];

        // stop if the bucket already has the key
        if (this.has(key, index, bucket)) {
            console.warn(
                `[SET]-[${key}] already exists at bucket index: ${index}`
            );
            return;
        }

        console.log(`[SET] - Adding {${key}:${value}} pair at index ${index}`);

        const obj = { [key]: value };

        // if it's empty bucket or the key is present & not a linked list
        if (!bucket || bucket[key]) {
            // create or update the key-pair value
            this.table[index] = obj;
        } else {
            // if bucket has one value and needs to store more, and isn't a linked list
            if (!bucket.head) {
                const lnkList = new LinkedList();
                lnkList.prepend(bucket);
                this.table[index] = lnkList;
            }

            this.table[index].prepend(obj);
        }
    }

    /**
     * Returns the value of the key or null
     * @function
     * @param {string} key - The name of the key.
     */
    get(key) {
        // return the value of that key or null if doesn't exist
        const index = this.#hash(key);
        const bucket = this.table[index];
        let keyValue = null;

        if (bucket) {
            if (bucket.head) {
                keyValue = this.#traverse(bucket, (node) => {
                    if (node.value[key]) {
                        return node.value[key];
                    }

                    return null;
                });
            } else if (bucket[key]) {
                keyValue = bucket[key];
            }
        }

        return keyValue;
    }

    /**
     * Check if key exists and return boolean.
     * @function
     * @param {string} key - The name of the key.
     * @param {number} [index] - The hash code.
     * @param {array} [bucket] - The bucket of the hash code.
     */
    has(key, index = this.#hash(key), bucket = this.table[index]) {
        /*
        The function take use of default values for the parameters,
        so it doesn't run the hash function again when it's called
        by `set()` function
        */

        let isKeyFound = false;

        if (bucket) {
            if (bucket.head) {
                isKeyFound = this.#traverse(
                    bucket,
                    (node) => node.value[key] !== undefined
                );
            } else {
                // it's a simple bucket (arr) with one item, not a linked list
                isKeyFound = bucket[key] !== undefined;
            }
        }

        return isKeyFound;
    }

    /**
     * Remove key and return boolean
     * @function
     * @param {string} key - The name of the key.
     */
    remove(key) {
        const index = this.#hash(key);
        const bucket = this.table[index];
        let isKeyRemoved = false;

        if (bucket) {
            if (bucket.head) {
                isKeyRemoved = this.#traverse(bucket, (node) => {
                    console.log(node);
                    if (node.value !== null && node.value[key]) {
                        if (node.next === null) {
                            node.value = null;
                        } else {
                            node.value = node.next.value;
                            node.next = node.next.next;
                        }

                        return true;
                    }
                });
            } else if (bucket[key]) {
                this.table[index] = null;
                isKeyRemoved = true;
            }
        }

        return isKeyRemoved;
    }

    /**
     * Return the number of all keys in the hash table.
     * @function
     */
    length() {
        let keys = 0;

        this.table.forEach((bucket) => {
            console.log(bucket);

            if (bucket !== null) {
                // if it's a linked list
                if (bucket.head) {
                    this.#traverse(bucket, (node) => {
                        if (node.value !== null) {
                            keys += 1;
                        }
                    });
                } else {
                    // not empty bucket, but also not a linked list => holds one key
                    keys += 1;
                }
            }
        });

        return `Total number of keys in the Hash Map: ${keys}`;
    }

    clear() {
        this.size = this.#initialSize;
        this.table = Array(this.size);
    }

    keys() {
        // return an array containing all keys
        return this.#getObjValues('keys');
    }

    values() {
        // return an array containing all values
        return this.#getObjValues('values');
    }

    entries() {
        // return an array containing all key-value pairs; e.g.  [[key1, value2], [key2, value3]]
        return this.#getObjValues('entries');
    }
}

// TESTING
const table = new Hashmap();

// SET TESTS
table.set('apple', 'red');
table.set('apple', 'red');
table.set('banana', 'yellow');
table.set('carrot', 'orange');
table.set('dog', 'brown');
table.set('elephant', 'gray');
table.set('frog', 'green');
table.set('grape', 'purple');
table.set('hat', 'black');
table.set('ice cream', 'white');
table.set('jacket', 'blue');
table.set('kite', 'pink');
table.set('lion', 'golden');
table.set('moon', 'silver');
table.set('moon', 'silver');

// GET TEST
console.log(table.get('lion'));
console.log(table.get('banana'));
console.log(table.get('moon'));
console.log(table.get('apple'));
console.log(table.get('nope'));
console.log(table.get("this doesn't exist"));
console.log(table.get('carrot'));

// HAS TEST
console.log(table.has('lion'));
console.log(table.has('banana'));
console.log(table.has('moon'));
console.log(table.has('apple'));
console.log(table.has('nopzze'));
console.log(table.has('wtf'));
console.log(table.has('ice cream'));

// REMOVE TEST
console.log(table.remove('jacket'));
console.log(table.remove('elephant'));
console.log(table.remove('carrot'));
console.log(table.remove('carrot'));
console.log(table.remove('doesnt exist'));

table.set('fausufas', 'askrkaks');
table.set('igdsignids', 'omgg');
table.set('saroasroo', 'fdsoo');
table.set('asdasida', 'oksksk');
table.set('omgg', 'yess');
table.set('testing askdasi', 'opups');
table.set('calisthenics', 'cool af');
table.set('lets goo bro', 'oguggugu');
table.set('asdlasodasodasiodasisaidas', 'oguggugu');
table.set('zxzxifiw', 'oguggugu');

console.log(table);

// LENGTH TEST
console.log(table.length());

console.log(table.keys());
console.log(table.values());
console.log(table.entries());

// CLEAR TEST
table.clear();
console.log(table);
