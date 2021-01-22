import { shallowMount } from '@vue/test-utils'
import Cantlogin from '@/components/Cantlogin.vue'

describe('Kopru component', () => {
  it('Kopru componenti calisiyor', () => {
    const wrapper = shallowMount(Cantlogin, {
      propsData: {},
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
