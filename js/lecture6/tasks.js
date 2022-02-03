function getMinValueOfTwo(value1,value2){
    if(typeof(value1)===typeof(value2)&&typeof(value2)==="number") {
        if(value1<value2){
        return value1;
        }
        if(value1===value2){
            console.log("Your arguments are equal");
        }
        else {
            return value2;
        }
    }
    else{
        console.log("Your arguments have different or wrong types");
    }
}

function getMinValueOfThree(value1,value2,value3){
    if(typeof(value1)===typeof(value2)&&typeof(value2)===typeof(value3)&&typeof(value3)==="number") {
        if (value1 < value2 && value1 < value3) {
            return value1;
        }
        if (value2 < value3 && value2 < value1) {
            return value2;
        }
        if (value3 < value2 && value3 < value1) {
            return value3;
        }
        else{
            console.log("Some of your arguments are equal");
        }
    }
    else{
        console.log("Your arguments have different or wrong types");
    }
}

function bubble(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
function getMinvalue(array){
    let count=0;
    for (let i = 0; i < array.length; i++) {
        if(typeof (array[i]) === typeof (array[i+1])&&typeof (array[i+1]) ==="number"){
            count++;
        }
    }
    if (count === array.length - 1){
        let sortedArray=bubble(array);
        return sortedArray[0];
    }
    else {
        console.log("Your arguments have different or wrong types");
    }

}

// consider to use this for many arguments
// function getMinValue() {
//   return Math.min(...arguments);
// }

function joinObjects(obj1,obj2){
    if(typeof(obj1)===typeof(obj2)&&typeof(obj2)==="object"){
        return Object.assign(obj1, obj2);
    }
    else {
        console.log("Your arguments have different or wrong types");
    }
}
const user={
    name:'Jack',
    age: 18
}
Object.defineProperty(user, 'toString', {
    enumerable: false, // enumerable is 'false' by default
    value: function () {
        return 'My name is' + this.name + ', ' + 'I am ' + this.age;
    }
});

for (var key in user) console.log(key);


console.log("Task1");
console.log(getMinValueOfTwo(-2,8));
console.log(getMinValueOfThree(9,1,2));
console.log(getMinvalue([1,6,2,7,0]));
console.log("Task2");
console.log(joinObjects({name:'daria'},{age:18}));
console.log("Task3");
console.log('Hello! ' + user); // 'Hello! My name isJack, I am 18'
