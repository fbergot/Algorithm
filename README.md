# Binary Search Algorithm - TypeScript Implementation

[![NPM Version](https://img.shields.io/npm/v/ts-binary-search-algo.svg)](https://www.npmjs.com/package/ts-binary-search-algo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An optimized implementation of binary search algorithm in TypeScript. This library provides an efficient way to search for elements in sorted arrays.

## 📋 Table of Contents

- Installation
- Usage
- API Reference
- Examples
- Performance
- Contributing
- Testing
- License

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

// Search for an element
const index = Algorithm.binarySearch(sortedArray, 7);
console.log(index); // Output: 6 (index of element 7)

// If the element is not found, -1 is returned
const notFoundIndex = Algorithm.binarySearch(sortedArray, 11);
console.log(notFoundIndex); // Output: -1
```

## 📖 API Reference

### `Algorithm.binarySearch(list, item)`

Performs a binary search on a sorted array.

#### Parameters:

- `list`: A sorted array of comparable elements (numbers, strings, etc.)
- `item`: The element to search for in the array

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
const index = Algorithm.binarySearch(numbers, 5);
// index = 4
```

### Working with Negative Numbers

```typescript
import { Algorithm } from "ts-binary-search-algo";

const numbers = [-10, -5, 0, 5, 10];
const index = Algorithm.binarySearch(numbers, -5);
// index = 1
```

### Handling Duplicate Values

```typescript
import { Algorithm } from "ts-binary-search-algo";

const numbers = [1, 2, 2, 2, 3, 4, 5];
const index = Algorithm.binarySearch(numbers, 2);
// index could be 1, 2, or 3 (any index where element 2 is present)
```

## 🏎️ Performance

The algorithmic complexity of a binary search is O(log n) instead of O(n) for a simple (linear) search.

Binary search algorithm offers significant performance advantages over linear search for sorted arrays:

| Array Size | Binary Search (avg) | Linear Search (avg) |
| ---------- | O(log n) | O(n) |
| 100 | ~7 steps | ~50 steps |
| 10,000 | ~14 steps | ~5,000 steps |
| 1,000,000 | ~20 steps | ~500,000 steps |

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
