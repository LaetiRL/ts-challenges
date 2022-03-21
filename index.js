var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
;
var Animal = /** @class */ (function () {
    function Animal(theRace) {
        this.race = theRace;
    }
    Animal.prototype.takePhoto = function () {
        console.log('Photos of ' + this.race + ' were taken.');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function (cat) {
        console.log("".concat(cat.race, " say \"meooooow\""));
    };
    Cat.prototype.peting = function (animal) {
        console.log("".concat(animal.race, " is petable"));
    };
    return Cat;
}(Animal));
var BlackCat = /** @class */ (function (_super) {
    __extends(BlackCat, _super);
    function BlackCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackCat.prototype.feeding = function (animal) {
        console.log("".concat(animal.race, " is feedable"));
    };
    return BlackCat;
}(Cat));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function (dog) {
        console.log("".concat(dog.race, " say \"bark bark\""));
    };
    Dog.prototype.peting = function (animal) {
        console.log("".concat(animal.race, " is petable"));
    };
    return Dog;
}(Animal));
var BlackDog = /** @class */ (function (_super) {
    __extends(BlackDog, _super);
    function BlackDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackDog.prototype.feeding = function (animal) {
        console.log("".concat(animal.race, " is feedable"));
    };
    return BlackDog;
}(Dog));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function (bird) {
        console.log("".concat(bird.race, " is flying"));
    };
    return Bird;
}(Animal));
var BlackBird = /** @class */ (function (_super) {
    __extends(BlackBird, _super);
    function BlackBird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackBird.prototype.feeding = function (animal) {
        console.log("".concat(animal.race, " is feedable"));
    };
    return BlackBird;
}(Bird));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.swim = function (fish) {
        console.log("".concat(fish.race, " is swimming"));
    };
    return Fish;
}(Animal));
var blackCat = new BlackCat("Chat européen");
blackCat.takePhoto();
blackCat.meow(blackCat);
blackCat.peting(blackCat);
blackCat.feeding(blackCat);
var cat = new Cat("Chat chartreux");
cat.takePhoto();
cat.meow(cat);
cat.peting(cat);
var blackDog = new BlackDog("Chien Terre-Neuve");
blackDog.takePhoto();
blackDog.bark(blackDog);
blackDog.peting(blackDog);
blackDog.feeding(blackDog);
var dog = new Dog("Chien Moon Moon");
dog.takePhoto();
dog.bark(dog);
dog.peting(dog);
var bird = new Bird("Mésange");
bird.takePhoto();
bird.fly(bird);
var blackBird = new BlackBird("Merle");
blackBird.takePhoto();
blackBird.fly(blackBird);
blackBird.feeding(blackBird);
var fish = new Fish("Thon");
fish.takePhoto();
fish.swim(fish);
