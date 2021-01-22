import { shallowMount } from '@vue/test-utils'
import Requirements from '@/components/Requirements.vue'

describe('Requirements component', () => {
  it('Requirements componenti calisiyor', () => {
    const wrapper = shallowMount(Requirements, {
      propsData: {},
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
