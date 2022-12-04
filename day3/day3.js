import fs from 'fs';
import path from 'path';
import { createAlphabetEnum, findCommonChars, findCommonChars3Strings } from '../utils.js'

const __dirname = path.dirname('./input.txt');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split("\n")

const exampleInput = fs
	.readFileSync(path.join(path.dirname('./exampleInput.tx'), 'exampleInput.txt'), 'utf8')
	.toString()
	.trim()
	.split("\n")

const alphabet = createAlphabetEnum();

function part1(rawInput){
    let total = 0;
    const splitArray = rawInput.map(list => {
        const length = list.length;
        const firstHalf = list.substring(0, length/2);
        const secondHalf = list.substring(length/2, length+1);
        return findCommonChars([...firstHalf],[...secondHalf])[0]
    });
    splitArray.forEach(char => {
		alphabet.forEach(alpha => {
			if (char === alpha.char){
				total += alpha.i
			}
		})
    })
    return total
}

function part2(rawInput){
	let total = 0;
	let arraysOfThree = [];
	for (let i = 0; i < rawInput.length; i += 3) {
		const three = rawInput.slice(i, i + 3);
		arraysOfThree.push(three)
	}
	arraysOfThree.forEach(list => {
		const char = findCommonChars3Strings([...list[0]], [...list[1]], [...list[2]])[0];
		alphabet.forEach(alpha => {
			if (char === alpha.char){
				total += alpha.i
			}
		})
	})
	return total;
}

// console.log("part1",part1(input))
console.log("part2",part2(input))