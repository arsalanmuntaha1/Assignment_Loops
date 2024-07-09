//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------
//-----------------------------------------> EXPLORING ARRAYS <-----------------------------------------------------------------------------------------------
//-----> 1. Create an empty array:
var myArray = [];
//-----> 2. Run a loop 10 times, adding a new incrementing value to the array:
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
//-----> 3. Log the array into the console:
console.log(myArray); //Output:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//-----> 4. Use the for loop to iterate through the array:
for (var i = 0; i < myArray.length; i++) {
    console.log("value: ".concat(myArray[i], ", index: ").concat(i));
} //Output: value: 1, index: 0
//        value: 2, index: 1
//        value: 3, index: 2
//        value: 4, index: 3
//        value: 5, index: 4
//        value: 6, index: 5
//        value: 7, index: 6
//        value: 8, index: 7
//        value: 9, index: 8
//        value: 10, index: 9
//-----> Use the for...of loop to output the value into the console from the array:
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var x = myArray_1[_i];
    console.log(x);
} //Output:1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10
