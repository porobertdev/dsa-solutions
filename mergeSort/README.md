```
/*
arr = [50, 1, 399, 0, 10]

mergeSort(arr)
    arr.length != 1 && arr.length > 2
        half = 2.5

        leftHalf = [50, 1]
        rightHalf = [399, 0, 10]

        mergeSort(leftHalf)
            => arr.length == 2
                => merge( [50], [1])
                    a = 50
                    b = 1
                    return [1]
                        => merge( [50], [])
                            a = 50
                            b = [] aka nothing
                            return [50]
                    return [1].concat([50])
                return [1, 50]

        mergeSort(rightHalf)
            => arr.length > 2
                half = 1.5

                leftHalf = [399]
                rightHalf = [0, 10]

                mergeSort(leftHalf)
                    => arr.length == 1
                        return [399]
                
                mergeSort(rightHalf)
                    => arr.length == 2
                        => merge( [0], [10])
                            a = 0
                            b = 10
                            return [0]
                                => merge( [], [10])
                                    a = [] aka nothing
                                    b = 10
                                    return [10]
                            return [0].concat([10])
                        return [[0], [10]]
                
                // NESTED
                merge([399], [0, 10])
                    a = 399
                    b = 0
                    return [0]
                        => merge( [399], [10])
                            a = 399
                            b = 10
                            return [10]
                                => merge( [399], [])
                                    a = 399
                                    b = [] aka nothing
                                    return [399]
                            return [10].concat([399])
                    return [0].concat([10, 399])
                return [0, 10, 399]


        // MAIN
        merge( [1, 50], [0, 10, 399])
            a = 1
            b = 0
            return [0]
                => merge( [1, 50], [10, 399])
                    a = 1
                    b = 10
                    return [1]
                        => merge( [50], [10, 399])
                            a = 50
                            b = 10
                            return [10]
                                => merge( [50], [399])
                                    a = 50
                                    b = 399 aka nothing
                                    return [50]
                                        => merge( [], [399])
                                            a = [] aka nothing
                                            b = 399
                                            return => [399]
                                    return [50].concat([399])
                            return [10].concat([50, 399])
                    return [1].concat([10, 50, 399])
            return [0].concat([1, 10, 50, 399])
    
    // SOLUTION
    return [0, 1, 10, 50, 399]        
*/
```