# Code Documentation

This HashMap implementation generates a hash code for each key, and supports both simple objects/buckets or Linked Lists.

By default, it assigns the key/value pair as a plain object to that bucket (index) of the array.

Then, if another **different** key has the same hash code, it creates a Linked List with the previous key/value pair, and *prepends()* the new pair.
Thus, I can say it creates Linked Lists dynamically.


All methods of the `Hashmap` class are documented in the code, including their **Time and Space Complexities**.

The only additional info I can add here is that:

1. most of them checks if the bucket is empty, a linked list or a plain object. If it's a linked list, it uses `traverse()` private method to run a callback on each node.

2. `keys()`, `values()`, `entries()` uses the private method `getObjValues()`, that generates a `nodes` object by traversing the whole table, then it uses JavaScript's inbuilt methods to get the result.
