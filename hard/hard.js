/*   
Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.
*/



    function createPII(name, ssn) {
        const PII = {
        name: name,
        ssn: ssn
    };

    return{
            getName() {
                console.log(`Name: ${PII.name}`)
            },
            // The only way to access the ssn is through calling the method
            getSSN() {
                console.log(`SSN: ${PII.ssn}`)
            }
        }
    }
    const person = createPII('Felix', '595373751');
    // Name is not accessible with . notation
    console.log(person.name, '<< Name is not accessible with notation')
    // Name is also accessible with method
    person.getName();
    // SSN is not accessible without utilizing the getSSN method
    console.log(person.ssn, '<< SSN is not accessible without method notation');
    // SSN is only accessible with method
    person.getSSN();
