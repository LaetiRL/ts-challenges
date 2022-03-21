var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return 'I am ' + this.name;
    };
    Person.prototype.tellMyAge = function () {
        return 'I am ' + this.age + ' years old';
    };
    return Person;
}());
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 35);
console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
