import fs from 'fs';
import path from 'path';
import { fillList , intersection} from '../utils.js'

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

function contains(a, b) {
	return a.end <= b.end && a.start >= b.start
}

function overlap(a,b) {
	return a.filter(str => b.includes(str))
}

function overlaps(a, b) {
	const set1 = new Set(fillList(a.end, a.start))
	const set2 = new Set(fillList(b.end, b.start))

	return intersection(set1, set2).size > 0
  }

function part1(rawInput){
	 const list = rawInput.map(str => str.split(',').map(str => {
		const [end, start] = str.split('-').map(Number);
		return { end, start}
	 })).map(([a,b]) => contains(a, b) || contains(b, a));
	 return list.filter(Boolean).length;
}

function part2(rawInput){
	const list = rawInput.map(str => str.split(',').map(str => {
		const [end, start] = str.split('-').map(Number);
		return { end, start}
	 })).map(([a,b]) => {
		return overlaps(a, b)
	 });
	 return list.filter(Boolean).length;
}

// console.log("part1",part1(input))
console.log("part2",part2(input))