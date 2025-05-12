type SortedArray<T> = T[];
type ComparatorFunction<T> = (element: T) => number;

class Algorithm {
    /**
     * @param sortedArray
     * @param comparator
     * @return {number}
     */
    static binarySearch<T>(sortedArray: SortedArray<T>, comparator: ComparatorFunction<T>): number {
        if (!sortedArray.length) return -1;

        let indexMin = 0,
            indexMax = sortedArray.length - 1,
            indexMid;

        while (indexMin <= indexMax) {
            indexMid = Math.floor((indexMin + indexMax) / 2);

            if (comparator(sortedArray[indexMid]) === 0) return indexMid;
            else if (comparator(sortedArray[indexMid]) < 0) indexMin = indexMid + 1;
            else indexMax = indexMid - 1;
        }

        return -1;
    }

    /**
     * @param sortedArray
     * @param item
     * @return {number}
     */
    static binarySearchByValue<T>(sortedArray: SortedArray<T>, item: T): number {
        return this.binarySearch(sortedArray, (element) => {
            if (element === item) return 0;
            return element < item ? -1 : 1;
        });
    }
}

export default Algorithm;
export { Algorithm, SortedArray, ComparatorFunction };
