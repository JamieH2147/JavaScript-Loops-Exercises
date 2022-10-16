
// 1 )

/* There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting' */

for (let voter = 1; voter <= 50; voter++) {

  console.log(`Voter number ${voter} has submitted their vote`);

}

// 2 )

/* 1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is */


const populations = [25, 50, 80, 100];


const percentageOfWorld1 = (countryPop) => {

  return (countryPop / 8000) * 100;
  }

let percentages2 = [];

for(let i = 0; i < populations.length; i++) {

  percentages2[i] = percentageOfWorld1(populations[i]); 

}

console.log(percentages2);


// 3 )

/* 1. Use a for loop to log the numbers 1- 10.​

2. Modify the for loop so that it counts down from 10 to 1.​ */

for(let i = 1; i <= 10; i++ ) {

  console.log(i);

}

// 4 )


/* 1. Create an array, called tasks, of 3 or more household tasks you need to do.​

2. Use a for loop and template literals to iterate through the array printing `Task ${I+1}: ${tasks[i]}` for each element on the array.​ */


const tasks = ['cleaning', 'walk dog', 'cook', 'pay bills', 'get groceries', 'gardening'];

for(let i = 0; i < tasks.length; i++) {

  console.log(`Task ${i + 1}: ${tasks[i]}`);

}


// 5 )

// Use a for loop to output even numbers from “2” to “10”.​

for (i = 1; i <= 10; i++) {

  if( i%2 === 0) {console.log(i)} else {console.log(`odd`)};

}


// 6 )

/* Rewrite the code below, changing the “for” loop to a “while” loop without altering the behaviour of the loop.​

for ( let x = 0; x < 3; x++ ) {​

alert( `number ${x}!` );​

}​ */

let x = 0;

while (x < 3) {

  alert( `number ${x}`);
  x++

}





