import { shallowMount } from '@vue/test-utils'
import Kopru from '@/components/Newkopru.vue'

describe('Kopru component', () => {
  it('Kopru componenti calisiyor', () => {
    const wrapper = shallowMount(Kopru, {
      propsData: {},
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
