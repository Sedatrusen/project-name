import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Navbar component', () => {
  let state
  let store

  beforeEach(() => {
    state = {
      carouselitems: jest.fn(),
    }
    store = new Vuex.Store({
      state,
    })
  })

  it('navbar itemleri set etme', () => {
    const wrapper = shallowMount(Navbar, {
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
