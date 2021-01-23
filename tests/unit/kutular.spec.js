import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Corrosuel from '@/components/Kutular.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Kutular component', () => {
  let state
  let store
  let actions

  beforeEach(() => {
    state = {
      kutular: jest.fn(),
    }
    actions = {
      addkutular: jest.fn(),
    }
    store = new Vuex.Store({
      state,
      actions,
    })
  })

  it('korosel itemleri set etme', () => {
    const wrapper = shallowMount(Corrosuel, {
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
