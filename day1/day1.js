const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};


const input = require("./input.txt");
const exampleInput = require("./exampleInput.txt");

function formatInputToObject(rawInput){
    return rawInput.split("\n\n").map(splitData);

    function splitData(input){
        return input.split(/\s/);
    }
}

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

console.log("testInputArray",part2(input))