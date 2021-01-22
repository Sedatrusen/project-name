import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Corrosuel from '@/components/Newmenu.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Newmenu component', () => {
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

  it('menu itemleri set etme', () => {
    const wrapper = shallowMount(Corrosuel, {
      computed: {
        blizzardgames: () => 'value_2',
        partnergames: () => '2',
      },

      methods: { setItems: () => {} },
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
