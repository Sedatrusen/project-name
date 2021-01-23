import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import newaccount from '@/pages/newaccount.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('newaccount component', () => {
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

  it('newaccount component set etme', () => {
    const wrapper = shallowMount(newaccount, {
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
