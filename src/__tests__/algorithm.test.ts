import { Algorithm } from "../Algorithm";

describe("Algorithm.binarySearch", () => {
    test("should find an element in an ordered array", () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(Algorithm.binarySearch(list, 5)).toBe(4);
    });

    test("should return -1 for an element not present", () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(Algorithm.binarySearch(list, 11)).toBe(-1);
    });

    test("should work with a single-element array - element present", () => {
        const list = [42];
        expect(Algorithm.binarySearch(list, 42)).toBe(0);
    });

    test("should work with a single-element array - element not present", () => {
        const list = [42];
        expect(Algorithm.binarySearch(list, 43)).toBe(-1);
    });

    test("should work with an empty array", () => {
        const list: never[] = [];
        expect(Algorithm.binarySearch(list, 1)).toBe(-1);
    });

    test("should find the first element of the array", () => {
        const list = [1, 2, 3, 4, 5];
        expect(Algorithm.binarySearch(list, 1)).toBe(0);
    });

    test("should find the last element of the array", () => {
        const list = [1, 2, 3, 4, 5];
        expect(Algorithm.binarySearch(list, 5)).toBe(4);
    });

    test("should work with negative values", () => {
        const list = [-10, -5, 0, 5, 10];
        expect(Algorithm.binarySearch(list, -5)).toBe(1);
    });

    // Note: in this case, the algorithm may return any index
    // where element 2 is present, typically the first one found
    test("should work with duplicate values (returns first occurrence)", () => {
        const list = [1, 2, 2, 2, 3, 4, 5];
        const result = Algorithm.binarySearch(list, 2);
        expect([1, 2, 3].includes(result)).toBeTruthy();
    });

    test("should work with floating-point numbers", () => {
        const list = [1.1, 2.2, 3.3, 4.4, 5.5];
        expect(Algorithm.binarySearch(list, 3.3)).toBe(2);
    });
});
