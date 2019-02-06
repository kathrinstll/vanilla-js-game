import Bird from './Bird'
import Counter from './Counter'

export default class Game {
  birds = []
  counter = 0

  constructor() {
    this.createBirds()
    this.createCounter()
    this.loop()
  }

  createBirds() {
    this.addBird()
    this.addBird()
    this.addBird()
    this.addBird()
  }

  createCounter() {
    this.counter = new Counter()
    this.counter.addPlayerPoint()
    this.counter.addPlayerPoint()
    this.counter.addBirdsPoint()
    this.counter.addBirdsPoint()
    this.counter.addBirdsPoint()
  }
  addBird() {
    const config = {
      removeBird: this.removeBird,
    }

    this.birds = [...this.birds, new Bird(config)]
  }

  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
  }

  loop() {
    this.counter++ % 60 === 0 && this.addBird()
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => this.loop())
  }
}
