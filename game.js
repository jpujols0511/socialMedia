class Dog{
  constructor(name){
    this.name = name
  }

  speak() {
    console.log('woof!')
  }
}

class PitBull {
  constructor(name){
    this.name = name
  }

  speak() {
    console.log(this.name + ' just bit someone')
  }
}

class Pug {
  constructor(name){
    this.name = name
  }

  speak() {
    console.log('squeak')
  }

}


fido = new Dog('Fido')
fabio = new Dog('Fabio')
bruce = new PitBull('Bruce')
thatDog = new Pug('that')
