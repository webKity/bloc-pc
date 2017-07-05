<template>
  <transition name="fade">
    <div class="mine-tip" v-show="visible" :class="customClass">
      <span class="mine-tip-text">{{ message }}</span>
    </div>
  </transition>
</template>
<script type="text/babel">
  export default {
    props: {
      message: String,
      position: {
        type: String,
        default: 'placemiddle'
      },
      className: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        visible: false
      }
    },

    computed: {
      customClass () {
        var classes = []
        switch (this.position) {
          case 'top':
            classes.push('is-placetop')
            break
          case 'bottom':
            classes.push('is-placebottom')
            break
          default:
            classes.push('is-placemiddle')
        }
        classes.push(this.className)

        return classes.join(' ')
      }
    }
  }
</script>
<style>
.mine-tip {position: fixed;max-width: 80%;padding:10px 20px;border-radius: 3px;background: rgba(0, 0, 0, 0.7);color: #fff;box-sizing: border-box;text-align: center;z-index: 9999;}
.mine-tip-text{font-size: 15px;display: block;text-align: center;}
.is-placetop{top: 50px;left: 50%;transform: translate(-50%, 0);}
.is-placemiddle{top: 50%;left: 50%;transform: translate(-50%, 0);}
.is-placebottom{bottom: 50px;left: 50%;transform: translate(-50%, 0);}
</style>
