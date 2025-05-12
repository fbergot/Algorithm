type SearchableArray<T> = T[];
type ComparatorFunction<T> = (element: T) => number;

class Algorithm {
    static binarySearch<T>(sortedArrayOfNumbers: SearchableArray<T>, comparator: ComparatorFunction<T>): number {
        if (!sortedArrayOfNumbers.length) return -1;

        let indexMin = 0,
            indexMax = sortedArrayOfNumbers.length - 1,
            indexMid;

        while (indexMin <= indexMax) {
            indexMid = Math.floor((indexMin + indexMax) / 2);

            if (comparator(sortedArrayOfNumbers[indexMid]) === 0) return indexMid;
            else if (comparator(sortedArrayOfNumbers[indexMid]) < 0) indexMin = indexMid + 1;
            else indexMax = indexMid - 1;
        }

        return -1;
    }

    /**
     * Original binary search for direct value comparison (for backward compatibility)
     */
    static binarySearchByValue<T>(sortedArray: SearchableArray<T>, item: T): number {
        return this.binarySearch(sortedArray, (element) => {
            if (element === item) return 0;
            return element < item ? -1 : 1;
        });
    }
}

export default Algorithm;
export { Algorithm, SearchableArray, ComparatorFunction };
