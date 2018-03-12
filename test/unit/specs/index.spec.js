import Vue from 'vue'
import index from '@/components/index'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.post-list .post-item').length)
      .to.equal(2)
  })
})
