```
MergeSort Algorithm:

1. Sort left half.
    if arr.length != 1
        sort left half
        sort right half
        merge
2. Sort right half.
3. Merge.
    compare first number of left with first number of right
    if left[0] < right[0] => return left
    repeat with left[1] & right[0] until a list has length 0;


arr = [50, 1, 399, 0, 10]

arr = [7, 2, 5, 4, 1, 6, 0, 3]

    // LEFT
    mergeSort(left = 7, 2, 5, 4)
        => mergeSort(left = 7, 2)
            => mergeSort(left = 7)
                => sorted, return 7
            => mergeSort(right = 2)
                => sorted, return 2

            => merge(left, right)
                => 2 < 7, return 2,7

        => mergeSort(right = 5, 4)
            => mergeSort(left = 5)
                => sorted, return 5
            => mergeSort(right = 4)
                => sorted, return 4

            => merge(left, right)
                => 5 > 4 => return 4, 5

        => merge(left, right)
            => 2,7   &     4, 5
                => 2 < 4 => return 2
                => 7 > 4 => return 4
                => 7 > 5 => return 5
                => 7 or nothing => return 7

    => return 2, 4, 5, 7


    // RIGHT
    mergeSort(right = 1, 6, 0, 3)
        => mergeSort(left = 1, 6)
            => mergeSort(left = 1)
                => sorted, return 1
            => mergeSort(right = 6)
                => sorted, return 6

            => merge(left, right)
                => 1 < 6 => return 1, 6

        => mergeSort(right = 0, 3)
            => mergeSort(left = 0)
                => sorted, return 0
            => mergeSort(right = 3)
                => sorted, return 3

            => merge(left, right)
                => 0 < 3 => return 0, 3

        => merge(left, right)
            => 1, 6  &    0, 3
                => 1 > 0 => return 0
                => 1 < 3 => return 1
                => 6 > 3 => return 3
                => 6 or nothing => return 6

    => 0, 1, 3, 6

    merge(left, right)
        => 2, 4, 5, 7   &   0, 1, 3, 6
            => 2 > 0 => return 0
            => 2 > 1 => return 1
            => 2 < 3 => return 2
            => 4 > 3 => return 3
            => 4 < 6 => return 4
            => 5 < 6 => return 5
            => 7 > 6 => return 6
            => 7 or nothing => return 7

    => finally, return 0, 1, 2, 3, 4, 5, 6, 7
```
