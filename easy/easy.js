/*   
A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. 
Write a function that will take as an input, the name of an exercise and console log a message like Today's exercise: running
*/

// Refactored to use closure
function exerciseOfTheDay(exercise) {
    var exerciseMessage = `Today's exercise: ${exercise}`
    function displayMsg() {
        console.log(exerciseMessage)
    }
    displayMsg()
}


exerciseOfTheDay('running')