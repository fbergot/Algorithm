const list = Array(2400000).fill(0).map((_, index) => index);

class Algorithm {
    static binarySearch(list, item) {
        const listIndexMax = list.length - 1;
        let indexMin = 0;
        let indexMax = Math.floor(listIndexMax / 2);

        while (indexMin <= indexMax) {
            if (list[indexMax] === item) return list[indexMax];
            else if (item > list[indexMax]) [indexMin, indexMax] = [indexMax, list.length - Math.floor((listIndexMax - indexMax) / 2)];
            else if (item < list[indexMax]) indexMax = indexMax - Math.floor((indexMax - indexMin - 1) / 2);
            else return null;
        }
    }
}
const itemToFind = 2399999;

const time = new Date().getTime();
const result = Algorithm.binarySearch(list, itemToFind);
const timeEnd = new Date().getTime();
console.log('end Binary:', (timeEnd - time) / 10000, `result: ${result}`);

const timeFind = new Date().getTime();
const resultWithFind = list.find(item => item === itemToFind);
const timeEndFind = new Date().getTime();
console.log('end Find:', (timeEndFind - timeFind) / 10000, `resultWithFind: ${resultWithFind}`);

const timeSome = new Date().getTime();
const resultWithSome = list.some(item => item === itemToFind);
const timeEndSome = new Date().getTime();
console.log('end Some:', (timeEndSome - timeSome) / 10000, `resultWithSome: ${resultWithSome}`);

const timeEvery = new Date().getTime();
const resultWithEvery = list.every(item => item === itemToFind);
const timeEndEvery = new Date().getTime();
console.log('end Every:', (timeEndEvery - timeEvery) / 10000, `resultWithEvery: ${resultWithEvery}`);

export default Algorithm;
