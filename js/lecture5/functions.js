function searchSubstringIndex(initialString, searchingSubstring) {
    let index = initialString.indexOf(searchingSubstring);
    if (index !== -1) {
        return index;
    } else {
        console.log("Error! Your string is not found.");
    }
}
function searchSubstringAmount(initialString, searchingSubstring) {
    let count = 1;
    if(initialString.includes(searchingSubstring)){
        let index = initialString.indexOf(searchingSubstring)+searchingSubstring.length;
        let cutString=initialString.substring(index);
            do{
                index = cutString.indexOf(searchingSubstring)+searchingSubstring.length;
                cutString = cutString.substring(index);
                ++count;
            }
            while(cutString.includes(searchingSubstring));
    }
    else{
        console.log("Error! Your string is not found.");
    }
    return count;

    // one more possible option
    // const arraySplittedBySearch = initialString.split(searchingSubstring);

    // const arrayLength = arraySplittedBySearch.length;

    // const count = arrayLength - 1;

    // if (count === 0) {
    //   console.log(`There is not "${searchingSubstring}" in the initial string.`);
    // } else {
    //   console.log(count);
    // }
}
let initialString="Never gonna give you up. Never gonna let you down.";
let searchingSubstring="Never";
let errorString="error";
console.log(`Initial string: ${initialString}
Searching substring: ${searchingSubstring}.
Error checking string: ${errorString}.`);
console.log("--------------------------------------------------------");
console.log("Task 1(first index of searching string):");
console.log(searchSubstringIndex(initialString,searchingSubstring));
searchSubstringIndex( initialString,errorString);
console.log("--------------------------------------------------------");
console.log("Task 2(amount of searching strings):");
console.log(searchSubstringAmount(initialString,searchingSubstring));
searchSubstringAmount( initialString,errorString);