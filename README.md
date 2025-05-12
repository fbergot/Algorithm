# Binary Search Algorithm - TypeScript Implementation

[![NPM Version](https://img.shields.io/npm/v/ts-binary-search-algo.svg)](https://www.npmjs.com/package/ts-binary-search-algo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An optimized implementation of binary search algorithm in TypeScript. This library provides an efficient way to search for elements in sorted arrays.

## 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Performance](#performance)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)

## 🚀 Installation

You can install this package using npm, yarn, or pnpm:

```bash
# Using npm
npm install ts-binary-search-algo

# Using yarn
yarn add ts-binary-search-algo

# Using pnpm
pnpm add ts-binary-search-algo
```

## 📊 Usage

```typescript
import { Algorithm } from "ts-binary-search-algo";

// Create a sorted array
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Search using the comparator function
const index = Algorithm.binarySearch(sortedArray, (num) => {
    if (num === 5) return 0;
    return num < 5 ? -1 : 1;
});
console.log(index); // Output: 4 (index of element 5)

// Or use the simpler binarySearchByValue for direct comparison
const simpleIndex = Algorithm.binarySearchByValue(sortedArray, 5);
console.log(simpleIndex); // Output: 4 (index of element 5)
```

## 📖 API Reference

### `Algorithm.binarySearch<T>(sortedArrayOfNumbers, comparator)`

Performs a binary search using a comparator function.

#### Parameters:

- `sortedArrayOfNumbers`: A sorted array of elements
- `comparator`: A function that takes an element and returns:
    - `0` when the element matches
    - `-1` when the element is less than the target
    - `1` when the element is greater than the target

#### Return Value:

- The index of the found element in the array
- `-1` if the element is not found

### `Algorithm.binarySearchByValue<T>(sortedArray, item)`

Simpler version that performs a binary search with direct value comparison.

#### Parameters:

- `sortedArray`: A sorted array of elements
- `item`: The element to search for

#### Return Value:

- The index of the found element in the array
- `-1` if the element is not found

#### Time Complexity:

- O(log n), where n is the length of the array

## 💡 Examples

### Searching in a Sorted Array of Numbers

```typescript
import { Algorithm } from "ts-binary-search-algo";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using comparator function
const index1 = Algorithm.binarySearch(numbers, (num) => {
    if (num === 5) return 0;
    return num < 5 ? -1 : 1;
});
// index1 = 4

// Using direct value comparison
const index2 = Algorithm.binarySearchByValue(numbers, 5);
// index2 = 4
```

### Working with Negative Numbers

```typescript
import { Algorithm } from "ts-binary-search-algo";

const numbers = [-10, -5, 0, 5, 10];
const index = Algorithm.binarySearch(numbers, (num) => {
    if (num === -5) return 0;
    return num < -5 ? -1 : 1;
});
// index = 1
```

### Working with Arrays of Objects

```typescript
import { Algorithm } from "ts-binary-search-algo";

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 5, name: "Charlie" },
    { id: 8, name: "Dave" },
    { id: 10, name: "Eve" },
];

// Search by user id
const userById = Algorithm.binarySearch(users, (user) => {
    if (user.id === 5) return 0;
    return user.id < 5 ? -1 : 1;
});
// userById = 2 (index of Charlie)

// Search by user name
const userByName = Algorithm.binarySearch(users, (user) => {
    return user.name.localeCompare("Dave");
});
// userByName = 3 (index of Dave)
```

### Handling Duplicate Values

```typescript
import { Algorithm } from "ts-binary-search-algo";

const numbers = [1, 2, 2, 2, 3, 4, 5];
const index = Algorithm.binarySearch(numbers, (num) => {
    if (num === 2) return 0;
    return num < 2 ? -1 : 1;
});
// index will be one of the positions where 2 appears
```

## 🏎️ Performance

The algorithmic complexity of a binary search is O(log n) instead of O(n) for a simple (linear) search.

Binary search algorithm offers significant performance advantages over linear search for sorted arrays:

| Array Size | Binary Search | Linear Search  | Approx. Speed Improvement |
| ---------- | :-----------: | :------------: | :-----------------------: |
| 100        |   ~7 steps    |   ~50 steps    |            7×             |
| 10,000     |   ~14 steps   |  ~5,000 steps  |           357×            |
| 1,000,000  |   ~20 steps   | ~500,000 steps |          25,000×          |

## 🧪 Testing

This library includes comprehensive test coverage. To run the tests:

```bash
pnpm test
```

Test cases include:

- Finding elements in ordered arrays
- Handling empty arrays
- Working with single-element arrays
- Finding first/last elements
- Working with negative numbers
- Handling duplicate values
- Working with floating-point numbers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run the tests (`pnpm test`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Florian Bergot (florian.bergot564@gmail.com)

---

Made with ❤️ by Florian Bergot
