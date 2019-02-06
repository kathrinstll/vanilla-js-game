export default class Bird {
  defaultConfig = {
    color: 'black',
    speed: 2 + Math.random() * 4,
    position: 0,
  }

  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, removeBird } = config
    this.color = color
    this.position = position
    this.removeBird = removeBird
    this.speed = speed
    this.el = this.render()
  }

  update() {
    this.position = this.position + this.speed
    if (this.position > window.innerWidth) {
      this.removeBird(this)
      this.el.remove()
    } else {
      this.el.style.left = this.position + 'px'
    }
  }

  destroy() {}
  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}