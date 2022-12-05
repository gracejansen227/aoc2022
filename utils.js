export function formatInputToObject(rawInput){
    return rawInput.split("\n\n").map(splitData);

    function splitData(input){
        return input.split(/\s/);
    }
}

export function findCommonChars(array1, array2){
    const commonChar = array1.filter(string => array2.includes(string));

   return commonChar.filter((c, index) => {
    return commonChar.indexOf(c) === index;
    });
}

export function createAlphabetEnum(){
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)); 
    const alphabetCap = alphabet.map(char => char.toUpperCase());
    const totalApha = alphabet.concat(alphabetCap);
    return totalApha.map((char, i) => { 
        return { char, i: i +1 }
    });
}

export function findCommonChars3Strings(array1, array2, array3){
    let commonChar = array1.filter(string => array2.includes(string));

    if (commonChar.length > 1){
        commonChar = commonChar.filter(string => array3.includes(string))
    }

   return commonChar.filter((c, index) => {
    return commonChar.indexOf(c) === index;
    });
}

export function fillList(start, end){
    let array = [];
    for (let i= start; i<= end; i++){
        array.push(parseInt(i))
    }
    return array;
}

export function intersection(...sets) {
    return sets.reduce((set1, set2) => {
      const result = new Set()
  
      for (const item of set2) {
        if (set1.has(item)) {
          result.add(item)
        }
      }
  
      return result
    })
  }