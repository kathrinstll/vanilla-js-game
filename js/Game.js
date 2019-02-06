import Bird from './bird'
export default class Game {
  birds = []

  constructor() {
    this.createBirds()
    this.loop()
  }

  createBirds() {
    const config = {
      removeBird: this.removeBird,
    } //das this in der Pfeilfunktion bleibt festgebunden an die Klasse in die wir die Pfeilfkt schreiben, das this hier bezieht sich immer auf die Klasse game dadurch alt: this.removeBird.bind

    this.birds = [
      new Bird({ ...config, color: 'hotpink', speed: 10 }),
      new Bird(config),
      new Bird(config),
      new Bird(config), // 4 birds sind in der Instanz Game und ich kann mit allen Fkt darauf zugreifen
    ]
  }

  addBird() {
    const config = {
      removeBird: this.removeBird,
    }

    this.birds = [...this.birds, new Bird(config)] //neues array mit dem was vorher im array war und einem neuen vogel
    this.birds.push(new Bird(config)) //nur ein neuer vogel zum alten array

    removeBird = bird => {
      const index = this.birds.indexOf(bird)
      this.birds = [
        ...this.birds.slice(0, index),
        ...this.birds.slice(index + 1),
      ]
      console.log(this.bird)
    }
  }

  loop() {
    Math.random() < 1 / 60 && this.addBird()
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => {
      this.loop()
    }, 200)
  }
}
