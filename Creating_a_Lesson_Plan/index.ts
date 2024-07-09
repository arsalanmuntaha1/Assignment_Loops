//-----------------------------------------> ASSIGNMENT OF LOOP <----------------------------------------------------------------------------------------------

//-----------------------------------------> CREATING A LESSON PLAN <-----------------------------------------------------------------------------------------------

const myWork: { name: string; status: boolean }[] = [];

for (let i = 1; i <= 10; i++) {
  let variable = i % 2 === 0 ? true : false;
  let lesson = {
    name: `Lesson ${i}`,
    status:variable
  };
  myWork.push(lesson);
}
console.log(myWork); 
// Output:[
                    //        { name: 'Lesson 1', status: false },
                    //        { name: 'Lesson 2', status: true },
                    //        { name: 'Lesson 3', status: false },
                    //        { name: 'Lesson 4', status: true },
                    //        { name: 'Lesson 5', status: false },
                    //        { name: 'Lesson 6', status: true },
                    //        { name: 'Lesson 7', status: false },
                    //        { name: 'Lesson 8', status: true },
                    //        { name: 'Lesson 9', status: false },
                    //        { name: 'Lesson 10', status: true }
                    //        ]                
