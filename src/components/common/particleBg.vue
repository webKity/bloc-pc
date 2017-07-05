<template>
  <div class="particle-bg">
    <canvas ref="particleBgCanvas"></canvas>
    <slot name="content"></slot>
  </div>
</template>
<script>
const requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60)
}

export default {
  data () {
    return {
      canvas: null,
      c: null,
      radius: 0,
      centerX: 0,
      centerY: 0,
      focalLength: 0,
      stars: [],
      numStars: 2000
    }
  },
  methods: {
    init () {
      this.canvas = this.$refs.particleBgCanvas
      this.canvas.width = document.documentElement.clientWidth
      this.canvas.height = 300
      this.c = this.canvas.getContext('2d')

      this.radius = '0.' + Math.floor(Math.random() * 9) + 1
      this.focalLength = this.canvas.width * 2

      this.initializeStars()
      this.run()
    },
    initializeStars () {
      this.centerX = this.canvas.width / 2
      this.centerY = this.canvas.height / 2
      this.stars = []
      for (let i = 0; i < this.numStars; i++) {
        let star = {
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          z: Math.random() * this.canvas.width * 3,
          o: '0.' + Math.floor(Math.random() * 99) + 1
        }
        this.stars.push(star)
      }
    },
    run () {
      requestAnimFrame(this.run)
      this.moveStars()
      this.drawStars()
    },
    moveStars () {
      for (let i = 0; i < this.numStars; i++) {
        let star = this.stars[i]
        star.z = star.z - 2

        if (star.z <= 0) {
          star.z = this.canvas.width
        }
      }
    },
    drawStars () {
      let pixelX, pixelY, pixelRadius
      this.c.fillStyle = 'rgba(0,10,20,1)'
      this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.c.fillStyle = 'rgba(209, 255, 255, ' + this.radius + ')'
      for (let i = 0; i < this.numStars; i++) {
        let star = this.stars[i]
        pixelX = (star.x - this.centerX) * (this.focalLength / star.z)
        pixelX += this.centerX
        pixelY = (star.y - this.centerY) * (this.focalLength / star.z)
        pixelY += this.centerY
        pixelRadius = 1 * (this.focalLength / star.z)
        this.c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius)
        this.c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')'
        this.c.fill()
      }
    }
  },
  mounted () {
    this.init()
    window.onresize = this.init
  }
}
</script>
<style scoped>
.particle-bg{position:relative;}
canvas{display:block}
</style>
