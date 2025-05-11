type SearchableArray<T> = T[];

class Algorithm {
    static binarySearch<T>(sortedArrayOfNumbers: SearchableArray<T>, item: T): number {
        if (!sortedArrayOfNumbers.length) return -1;

        let indexMin = 0,
            indexMax = sortedArrayOfNumbers.length - 1,
            indexMid;

        while (indexMin <= indexMax) {
            indexMid = Math.floor((indexMin + indexMax) / 2);

            if (sortedArrayOfNumbers[indexMid] === item) return indexMid;
            else if (item > sortedArrayOfNumbers[indexMid]) indexMin = indexMid + 1;
            else indexMax = indexMid - 1;
        }

        return -1;
    }
}

export default Algorithm;
export { Algorithm, SearchableArray };
