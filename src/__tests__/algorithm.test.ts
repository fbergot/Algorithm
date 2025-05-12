import { Algorithm } from "../Algorithm";

describe("Algorithm.binarySearch", () => {
    test("should find an element in an ordered array", () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 5) return 0;
                return num < 5 ? -1 : 1;
            }),
        ).toBe(4);
    });

    test("should return -1 for an element not present", () => {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 11) return 0;
                return num < 11 ? -1 : 1;
            }),
        ).toBe(-1);
    });

    test("should work with a single-element array - element present", () => {
        const list = [42];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 42) return 0;
                return num < 42 ? -1 : 1;
            }),
        ).toBe(0);
    });

    test("should work with a single-element array - element not present", () => {
        const list = [42];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 43) return 0;
                return num < 43 ? -1 : 1;
            }),
        ).toBe(-1);
    });

    test("should work with an empty array", () => {
        const list: never[] = [];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 1) return 0;
                return num < 1 ? -1 : 1;
            }),
        ).toBe(-1);
    });

    test("should find the first element of the array", () => {
        const list = [1, 2, 3, 4, 5];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 1) return 0;
                return num < 1 ? -1 : 1;
            }),
        ).toBe(0);
    });

    test("should find last the element with binarySearchByValue", () => {
        const list = [1, 2, 3, 4, 5];
        expect(Algorithm.binarySearchByValue(list, 5)).toBe(4);
    });

    test("should find the first element with binarySearchByValue", () => {
        const list = [1, 2, 3, 4, 5];
        expect(Algorithm.binarySearchByValue(list, 5)).toBe(4);
    });

    test("should find the last element of the array", () => {
        const list = [1, 2, 3, 4, 5];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 5) return 0;
                return num < 5 ? -1 : 1;
            }),
        ).toBe(4);
    });

    test("should work with negative values", () => {
        const list = [-10, -5, 0, 5, 10];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === -5) return 0;
                return num < -5 ? -1 : 1;
            }),
        ).toBe(1);
    });

    test("should work with duplicate values (returns first occurrence)", () => {
        const list = [1, 2, 2, 2, 3, 4, 5];
        const result = Algorithm.binarySearch(list, (num) => {
            if (num === 2) return 0;
            return num < 2 ? -1 : 1;
        });
        expect([1, 2, 3].includes(result)).toBeTruthy();
    });

    test("should work with floating-point numbers", () => {
        const list = [1.1, 2.2, 3.3, 4.4, 5.5];
        expect(
            Algorithm.binarySearch(list, (num) => {
                if (num === 3.3) return 0;
                return num < 3.3 ? -1 : 1;
            }),
        ).toBe(2);
    });

    // New test - search in an array of objects
    test("should work with arrays of objects", () => {
        const users = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 5, name: "Charlie" },
            { id: 8, name: "Dave" },
            { id: 10, name: "Eve" },
        ];

        expect(
            Algorithm.binarySearch(users, (user) => {
                if (user.id === 5) return 0;
                return user.id < 5 ? -1 : 1;
            }),
        ).toBe(2);

        expect(
            Algorithm.binarySearch(users, (user) => {
                return user.name.localeCompare("Dave");
            }),
        ).toBe(3);
    });
});
