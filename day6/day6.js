import fs from 'fs';
import path from 'path';

const input = fs
	.readFileSync(path.join(path.dirname('./input.txt'), 'input.txt'), 'utf8')
	.toString()
	.trim()

const exampleInput = fs
	.readFileSync(path.join(path.dirname('./exampleInput.tx'), 'exampleInput.txt'), 'utf8')
	.toString()
	.trim();

function findIndexOfFirstSequence(input, size) {
    let i;
    for (i = size; i < input.length - 1; i++) {
      const chars = input.substring(i - size, i).split('')
      const unique = new Set(chars)
    console.log("unique",unique)
      if (unique.size === size) break
    }
  
    return i
  }
  
  function part1(data) {
    console.log("input",data)
    return findIndexOfFirstSequence(data, 4)
  }
  
  function part2(data) {
    return findIndexOfFirstSequence(data, 14)
  }

  console.log("part1",part1(input))
  console.log("part2",part2(input))