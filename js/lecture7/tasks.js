const findVowelsCount =(inputString) =>{
    let array= inputString.split('');
    let sortedArray=array.filter((element) => element==='a'||element==='e'||element==='i'||element==='o'||element==='u'||element==='y');
    return sortedArray.length;
}
const createArrayWithObjects =(arrayOfNames)=>{
    const array = arrayOfNames.map((element, index) => ({
        name: element,
        id: Math.random()
    }));

    return array;
}
const filterArray=(arr,conditionNumber)=>{
    return arr.filter((element) => element > conditionNumber);
}
console.log('Task 1');
console.log(findVowelsCount('hello my dear'));
console.log('Task 2');
console.log(createArrayWithObjects(['anna','kate','karl']));
console.log('Task 3');
console.log(filterArray([2,4,2,9,1,5,6,32],5));