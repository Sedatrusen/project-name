import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Corrosuel from '@/components/Kutular.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Kopru component', () => {
  let state
  let store

  beforeEach(() => {
    state = {
      kutular: jest.fn(),
    }
    store = new Vuex.Store({
      state,
    })
  })

  it('korosel itemleri set etme', () => {
    const wrapper = shallowMount(Corrosuel, {
      mocks: { $route: { params: { id: 1 } } },

      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
