/*   
Object prototype chain and prototypal inheritance exercise.
Create a Person constructor that has three properties: name, job, and age.
Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
*/

// Blueprint class or Person
class Person {
    constructor(name, job, age) {
        this.name = name,
        this.job = job,
        this.age = age
    }
    exercise() {
        console.log('Running is fun! - said no one ever')
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

// Takes in information from Person via extends and super, basically uses person as a template adding more identity along the way.
class Programmer extends Person {
    constructor(name, job, age, languages, snack) {
        super(name, job, age);
        this.snack = snack;
        this.languages = languages;
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        this.busy 
        ? console.log(`${this.name} can't accept new tasks right now`) 
        : console.log(`${this.name} would love to take on a new responsibility`)
    }
    learnLanguage(newLanguage) {
        this.languages.push(newLanguage)
    }
    listLanguages() {
        console.log(`Languages that ${this.name} knows: ${this.languages}`)
    }
    favoriteSnack() {
        console.log(`${this.snack}`)
    }

}

const programmer1 = new Programmer("Felix", "Software Engineer", 24, ['JavaScript', 'Node.JS'], 'Chocolate')

programmer1.learnLanguage('Python')
console.log(programmer1)
programmer1.completeTask()
programmer1.offerNewTask()
programmer1.fetchJob()
programmer1.exercise()
programmer1.listLanguages()
programmer1.favoriteSnack()


const programmer2 = new Programmer("Latori", "Technical Program Manager", 28, ['JavaScript', 'Node.JS', 'Python'], 'Kit-kat')

programmer2.learnLanguage('C++')
console.log(programmer2)
programmer2.completeTask()
programmer2.offerNewTask()
programmer2.fetchJob()
programmer2.exercise()
programmer2.listLanguages()
programmer2.favoriteSnack()

