import fs from 'fs';
import path from 'path';

import { formatInputToObject } from '../utils.js';

const __dirname = path.dirname('./input.txt');
const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()

function part1(rawInput){
    const array = formatInputToObject(rawInput)
    const sumArrays = array.map(list => {
        return list.reduce((a,b) => parseInt(a) + parseInt(b), 0)
    });
    return Math.max(...sumArrays);
}

function part2(rawInput){
    const array = formatInputToObject(rawInput)
    const sumArrays = array.map(list => {
        return list.reduce((a,b) => parseInt(a) + parseInt(b), 0)
    });

    return sumArrays.sort((a,b) => a-b).slice(-3).reduce((a,b) => parseInt(a) + parseInt(b), 0)
    
}

console.log("part1",part1(input))
console.log("part2",part2(input))