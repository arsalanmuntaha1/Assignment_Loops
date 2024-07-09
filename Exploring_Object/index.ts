//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------

//-----------------------------------------> EXPLORING OBJECTS <-----------------------------------------------------------------------------------------------

interface MyObject {
    [key : string]: string; // Index Signature
}
let myObject : MyObject = {
    item1 : 'Pizza',
    item2 : 'Butter Cheese Handi',
    item3 : 'Fudge Brownies',       //Defining Object with 3 properties
}
for(let property in myObject){
    console.log(`${property}: ${myObject[property]}`)
} //Output:item1: Pizza
  //       item2: Butter Cheese Handi
  //       item3: Fudge Brownies
