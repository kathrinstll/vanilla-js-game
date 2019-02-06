export default class Counter {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
    this.addPlayerPoint
    this.addBirdsPoint
    this.update
  }
  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    el.innerHTML = `
     <span>${this.playerPoints}</span> : <span>${this.birdsPoints}</span>
     `
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }

  addPlayerPoint() {
    this.playerPoints++
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints++
    this.update()
  }

  update() {
    this.el.innerHTML = this.playerPoints + ':' + this.birdsPoints
  }
}
