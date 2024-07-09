"use strict";
//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------
let myObject = {
    item1: 'Pizza',
    item2: 'Butter Cheese Handi',
    item3: 'Fudge Brownies', //Defining Object with 3 properties
};
for (let property in myObject) {
    console.log(`${property}: ${myObject[property]}`);
} //Output:item1: Pizza
//       item2: Butter Cheese Handi
//       item3: Fudge Brownies
