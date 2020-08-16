const dogBtn = document.getElementById("dog-btn");
const cowBtn = document.getElementById("cow-btn");
const catBtn = document.getElementById("cat-btn");
const randomBtn = document.getElementById("random");

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  animalSound() {
    return console.log(`The ${this.name} goes ${this.sound}!`);
  }
}

let dog = new Animal("Dog", "Woof");
let cow = new Animal("Cow", "Moo");
let cat = new Animal("Cat", "Meow");

dogBtn.addEventListener("click", () => {
  dog.animalSound();
});

cowBtn.addEventListener("click", () => {
  cow.animalSound();
});

catBtn.addEventListener("click", () => {
  cat.animalSound();
});
