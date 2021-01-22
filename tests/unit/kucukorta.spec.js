import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Kucukorta from '@/components/Kucukorta.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Kucukorta component', () => {
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

  it('Kucukorta resimleri set etme', () => {
    const wrapper = shallowMount(Kucukorta, {
      mocks: { $route: { params: { id: 1 } } },
      computed: {
        blizzardgames: () => 'value_2',
        partnergames: () => '2',
      },

      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
