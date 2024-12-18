/*   
Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.
*/

// Takes in input as args and divide the amount of slices by the amount of people
// .toFixed(2) to keep it 2 decimal places just like the test cases
function sharePizza(slices, people) {
    let sliceAmount = slices / people;
    console.log(`Each person gets ${sliceAmount.toFixed(2)} slices of pizza; from our ${slices} slice pizza`)
}

sharePizza(10,3)