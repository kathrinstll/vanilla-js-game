export default class Bird {
  defaultConfig = {
    color: 'black',
    speed: 1 + Math.random() * 2,
    position: {x: 0, y: 100 + Math.random() * 200},
  }

  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, removeBird, onRemove, onEscape, onClick } = config

    this.onClick = onClick
    this.color = color
    this.position = position
    this.onRemove = onRemove
    this.speed = speed
    this.onEscape = onEscape
    this.el = this.render()
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      this.onClick()
      this.remove()
    })
  }

  remove() {
    this.onRemove(this)
    this.el.remove()
  }

  update() {
    this.position.x = this.position.x + this.speed
    if (this.position.x > window.innerWidth) {
      this.remove()
      this.onEscape()
    } else {
      this.el.style.left = this.position.x + 'px'
    }
  }

  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.top = this.position.y + 'px'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
