import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import login from '@/pages/login.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Login sayfası', () => {
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

  it('login sayfası çalışıyor', () => {
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
  it('Cant log in? linki gözüküyor mu', () => {
    const wrapper = shallowMount(login, {
      localVue,
      store,
    })
    const text = wrapper.find('.others')
    expect(text.text()).toBe('Create a free Blizzard Accoun')
  })
})
