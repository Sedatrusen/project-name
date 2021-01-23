/* eslint-disable prettier/prettier */
import {shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Productpage from '@/components/Productpage.vue'


const localVue = createLocalVue()

localVue.use(Vuex)




describe('Ürün kompanenti', () => {
let state
  let actions
  let store

  beforeEach(() => {
    state = { products: { Products:
       [{
        id: "WorldofWarcraft",
        arkafon: "https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FWOW%2Fwowproductarkafon.jpg?alt=media&token=bc2645ff-a9a8-4848-bd4e-da9b70e414c9",
        logo: "https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FWOW%2Fwowproductlogo.png?alt=media&token=1cfbf172-bf9a-4de6-b880-4ebbedb01b9d",
        icon: "https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FWOW%2Fworld-of-warcraftproducticon.svg?alt=media&token=9cc3d170-ef12-4ee4-8286-7f10f4e8a5d1",
       h1: "World of Warcraft®: Shadowlands",
        details: "Massively Multiplayer RPG",
        categories:"BLIZZARDGAMES", "type": "World of Warcraft"
      },
      {
        id: "Overwatch",
        arkafon: "https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FOverwatch%2Fbigtracer.jpg?alt=media&token=4581aa87-49a9-4219-9a7a-7659e5d24e84",
       logo:"https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FOverwatch%2Foverwatchlogo.png?alt=media&token=a697c209-9e53-42c2-851f-17e34f422b54",
        icon: "https://firebasestorage.googleapis.com/v0/b/blizzardshop-c1285.appspot.com/o/Products%2FOverwatch%2Foverwatchicon.svg?alt=media&token=eb820aab-62b6-48b6-9d07-abbefa4ec820",
       h1: "Overwatch®: Legendary",
        details: "Team-Based Shooter",
       
            categories:"BLIZZARDGAMES","type": "Overwatch"
      },] } }
    actions = {
      addProductToCart: jest.fn(),
     
    }
    store = new Vuex.Store({
      actions,state
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

it('ürün komponenti ürün dogru geliyor mu', () => {
  const wrapper = shallowMount(Productpage,{  mocks: {$route:{ params: { id: 1 }}},
    computed: {
      product: () => { return {
       state}
      },
      options:()=>'2'
    }
  , store 
  , localVue} )

  expect(wrapper.exists()).toBe(true)
})
})
