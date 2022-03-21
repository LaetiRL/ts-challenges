interface Feedable {
    feeding(animal: object): void; 
};
  
interface Petable {
    peting(animal: object): void;
};

class Animal {
    protected race: string;
    constructor(theRace: string) {
      this.race = theRace;
    }

    takePhoto() {
        console.log('Photos of ' + this.race + ' were taken.');
    } 
}
   
class Cat extends Animal implements Petable {
    meow(cat: Cat) {
        console.log(`${cat.race} say "meooooow"`);
    } 
    peting(animal: Cat) {
        console.log(`${animal.race} is petable`);
    }
}

class BlackCat extends Cat implements Feedable {
    feeding(animal: BlackCat) {
        console.log(`${animal.race} is feedable`);
    }
}

class Dog extends Animal implements Petable {
    bark(dog: Dog) {
        console.log(`${dog.race} say "bark bark"`);
    }
    peting(animal: Dog) {
        console.log(`${animal.race} is petable`);
    }
}

class BlackDog extends Dog implements Feedable {
    feeding(animal: BlackDog) {
        console.log(`${animal.race} is feedable`);
    }
}

class Bird extends Animal {
    fly(bird: Bird) {
        console.log(`${bird.race} is flying`);
    }
}
class BlackBird extends Bird implements Feedable {
    feeding(animal: BlackBird) {
        console.log(`${animal.race} is feedable`);
    }
}


class Fish extends Animal {
    swim(fish: Fish) {
        console.log(`${fish.race} is swimming`);
    }
}

let blackCat = new BlackCat("Chat européen");
blackCat.takePhoto();
blackCat.meow(blackCat);
blackCat.peting(blackCat);
blackCat.feeding(blackCat);

let cat = new Cat("Chat chartreux");
cat.takePhoto();
cat.meow(cat);
cat.peting(cat);

let blackDog = new BlackDog("Chien Terre-Neuve");
blackDog.takePhoto();
blackDog.bark(blackDog);
blackDog.peting(blackDog);
blackDog.feeding(blackDog);

let dog = new Dog("Chien Moon Moon");
dog.takePhoto();
dog.bark(dog);
dog.peting(dog);

let bird = new Bird("Mésange");
bird.takePhoto();
bird.fly(bird);

let blackBird = new BlackBird("Merle");
blackBird.takePhoto();
blackBird.fly(blackBird);
blackBird.feeding(blackBird);

let fish = new Fish("Thon");
fish.takePhoto();
fish.swim(fish);