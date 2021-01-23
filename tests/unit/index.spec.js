import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import index from '@/pages/index.vue'

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
    }

    store = new Vuex.Store({
      actions,
      getters,
      state,
    })
  })

  it('menu itemleri set etme', () => {
    const wrapper = shallowMount(index, {
      localVue,
      store,
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html).toMatchSnapshot()
  })
  it('yazı gözüküyor', () => {
    const wrapper = shallowMount(index, { localVue, store })
    const p = wrapper.find('h1')
    expect(p.text()).toBe('Recommended')
  })
})
