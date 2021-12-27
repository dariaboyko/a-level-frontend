const nameOfDays = {ru:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}
const getNameOfDay =(day,lang)=>{
    day-=1;
     if(lang ==="ru"){
         console.log(nameOfDays.ru[day]);
     }
     else{
         console.log(nameOfDays.en[day]);
     }
}
const citiesAndCountries = {
    Kyiv: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    'New-York': 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA',
    Lisbon: 'Portugal',
    Lviv: 'Ukraine',
    Hamburg: 'Germany'
};


let obj={};
Object.keys(citiesAndCountries).map(function(key) {
    obj[citiesAndCountries[key]] = [];
});
Object.keys(citiesAndCountries).map(function(key) {
    obj[citiesAndCountries[key]].push(key);
    obj[citiesAndCountries[key]].sort();
});


const numbers=(array)=>{
    array.sort();
    let count=0;
    if(array.length<4){
        console.log("Your array is too short.");
        return undefined;
    }
    for(let i = 0; i<array.length-1;i++){
        if(array[i]===array[i+1]){
            count++;
        }
    }
    if(count===0){
        if(array[0]>=0){
            return array[0]+array[1];
        }
        else{
            console.log("Your array has numbers under zero.")
        }
    }
    else if(count!==0){
        console.log("Your array has duplicates.")
    }
}
console.log("Task 1:");
getNameOfDay(1,"ru");
getNameOfDay(3);
console.log("Task 2:");
console.log(obj);
console.log("Task 3:");
console.log(numbers([1,5,3]));
console.log(numbers([1,5,3,2,7,-7]));
console.log(numbers([1,98,7,5,3,2,7]));
console.log(numbers([1,98,7,0,5,3,2]));