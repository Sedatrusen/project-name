import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import login from '@/pages/login.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Newmenu component', () => {
  let actions
  let store
  let getters
  let state
  beforeEach(() => {
    state = { products: { Products: [{ id: '1' }, { id: '2' }] } }
    actions = {
      addproducts: jest.fn(),
      addoptions: jest.fn(),
      chechwhislist: jest.fn(),
    }
    getters = {
      whislists: () => 2,
      cartTotal: () => 'Total : €',
    }
    store = new Vuex.Store({
      actions,
      getters,
      state,
    })
  })

  it('menu itemleri set etme', () => {
    const wrapper = shallowMount(login, {
      computed: {
        blizzardgames: () => 'value_2',
        partnergames: () => '2',
      },

      methods: { setItems: () => {} },
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html).toMatchSnapshot()
  })
})
