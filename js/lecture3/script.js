function greating (name){
    console.log(`Hello ${name}! How are you?`);
}
const lecture= {
    name: 'js data types',
    interesting: true,
    lecturer:'Artem Vorobiov',
    time:2.5,
    recap: function () {
        console.log('RECAP: ')
        console.log(`Data types:
    +primitives:
        string - we can store 0 and more characters.
        number -  integers and float numbers between ±(253-1).
        bigint - for big integers.
        boolean - true/false.
        null -  when we need an empty value.
        undefined - for unassigned or undefined values.
        symbol - unique and immutable primitive values.
        object - more complex data structure
With operator typeof we can check a type.`);
    },
    lectureInfo:function (){
        console.log('INFORMATION ABOUT LECTURE: ')
        console.log(`Name of the lecture: ${lecture.name}.
Lecturer: ${lecture.lecturer}.
Duration: ${lecture.time} hours.`);
        if((this.interesting = true)){
            console.log('The lecture was very interesting!')
        }
        else{
            console.log('The lecture was boring.')
        }
    }
}
greating("Valera");
greating("Anna");
greating("Alex");
console.log('----------------------------------------------------------------------');
lecture.recap();
console.log('----------------------------------------------------------------------');
lecture.lectureInfo();