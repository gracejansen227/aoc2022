import fs from 'fs';
import path from 'path';

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

const shapes = {
	A: 1,
	X: 1,
	B: 2,
	Y: 2,
	C: 3,
	Z: 3
}

const shapesPart2 = {
	A: 1,
	X: 0,
	B: 2,
	Y: 3,
	C: 3,
	Z: 6
}

function part1(rawInput){
	let totalScore = 0;
	const splitArray = rawInput.map(item => item.split(" "));
	console.log("splitArray",splitArray)
	const mapToEnum = splitArray.map(list => list.map(letter => shapes[letter]))
	mapToEnum.forEach(list => {
		totalScore += list[1]
		const score = list[0] - list[1]
		switch (score) {
			case 2: {
				totalScore += 6
				return
			}
			case 0: {
				totalScore += 3
				return
			}
			case 1: {
				totalScore += 0
				return
			}
			case -1: {
				totalScore += 6
				return
			}
		}
	})
	return totalScore;
}

function part2(rawInput){
	let totalScore = 0;
	const splitArray = rawInput.map(item => item.split(" "));
	const mapToEnum = splitArray.map(list => list.map(letter => shapesPart2[letter]))
	mapToEnum.forEach(list => {
		totalScore += list[1]
		const opp = list[0]
		switch (list[1]) {
			case 0: {
				if (opp === 1){
					totalScore += 3
				} else {
					totalScore += (opp - 1)
				} 
				return
			}
			case 3: {
				totalScore += opp
				return
			}
			case 6: {
				if (opp === 3){
					totalScore += 1
				} else {
					totalScore += (opp + 1)
				}
				return
			}
		}
	})
	return totalScore;
    
}

console.log("part1",part1(input))
console.log("part2",part2(input))