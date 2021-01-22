/* eslint-disable prettier/prettier */
import {shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Productpage from '@/components/Productpage.vue'


const localVue = createLocalVue()

localVue.use(Vuex)




describe('Ürün kompanenti', () => {

  let actions
  let store

  beforeEach(() => {
    actions = {
      addProductToCart: jest.fn(),
     
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('ürün komponenti çalışıyor', () => {
    const wrapper = shallowMount(Productpage,{  mocks: {$route:{ params: { id: 1 }}},
      computed: {
        product: () => 'value_2',
        options:()=>'2'
      }
    ,methods:{setProduct:()=>{},setOptions:()=>{}}, localVue} )
  
    expect(wrapper.exists()).toBe(true)
  })
it('sepete ekleme çalışıyor',()=>{
  const wrapper = shallowMount(Productpage,{  mocks: {$route:{ params: { id: 1 }}},
    computed: {
      product: () => 'value_2',
      options:()=>'2'
    }
  ,methods:{setProduct:()=>{},setOptions:()=>{}}, localVue,store} )
  wrapper.find('button').trigger('click')
  expect(actions.addProductToCart).toHaveBeenCalled()


})
it('ürün set ediliyor mu',()=>{
  const wrapper = shallowMount(Productpage,{  mocks: {$route:{ params: { id: 1 }}},
    computed: {
      product: () => 'value_2',
      options:()=>'2'
    }
  ,methods:{setProduct:()=>{},setOptions:()=>{}}, localVue,store} )
  expect(wrapper).toMatchSnapshot()
})

})
