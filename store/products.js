export const state = () => ({
  all: [
    {
      id: 'Overwatch',
      arkafon: require('../assets/bigtracer.jpg'),
      logo: require('../assets/overwatchlogo.png'),
      icon: require('../assets/overwatchicon.svg'),
      h1: 'Overwatch®: Legendary',
      details: 'Team-Based Shooter',
      insidelogo1: require('../assets/owlogo1.jpg'),
    },
    {
      id: 'WorldofWarcraft',
      arkafon: require('../assets/wowproductarkafon.jpg'),
      logo: require('../assets/wowproductlogo.png'),
      icon: require('../assets/world-of-warcraftproducticon.svg'),
      h1: 'World of Warcraft®: Shadowlands',
      details: 'Massively Multiplayer RPG',
    },
    {
      id: 'DiabloIII',
      arkafon: require('../assets/diablo3productarkafon.jpg'),
      logo: require('../assets/diablo3logo.png'),
      icon: require('../assets/diablo-iiiprocuticon.svg'),
      h1: 'Diablo® III',
      details: 'Action RPG',
    },
    {
      id: 'Hearthstone',
      arkafon: require('../assets/heartstoneproductarkafon.jpg'),

      icon: require('../assets/hearthstone producticon.svg'),
      h1: 'Madness at the Darkmoon Faire®',
      details: 'Hearthstone®: Card Packs',
    },
    {
      id: 'HeroesoftheStorm',
      arkafon: require('../assets/hotsproductarkafon.jpg'),
      logo: require('../assets/94d4a5cec48896ea32114553ac71f8a6-hots-minglow-1000x522.png'),
      icon: require('../assets/heroes-of-the-storm (1).svg'),
      h1: 'Heroes of the Storm™',
      details: 'MOBA',
    },
    {
      id: 'StarCraftII',
      arkafon: require('../assets/ca183718dbe94037377abe9b9b79da3c-prod-full-bg-headerless.jpg'),
      logo: require('../assets/878a1859e39bbe78961bdc409a7f51db-sc2-logo.png'),
      icon: require('../assets/starcraft-ii (1).svg'),
      h1: 'StarCraft® II: Campaign Collection',
      details: 'Real-time Strategy',
    },
    {
      id: 'StarCraft',
      arkafon: require('../assets/8e03fafc7b47e1aceb47628750c47359-prod-full-bg-headerless.jpg'),
      logo: require('../assets/243a0bbc204e30b22d5a59e7a9e88e9d-starcraft-anthology-1000.png'),
      icon: require('../assets/starcraft-remastered (1).svg'),
      h1: 'StarCraft®',
      details: 'Real-time Strategy',
    },
    {
      id: 'DiabloII',
      arkafon: require('../assets/83e2c8ce037c691435e1021ce0486c8b-prod-full-bg-headerless.jpg'),
      logo: require('../assets/12568e51f48b249990bd42fc837e0d2a-diablo-II.png'),
      icon: require('../assets/diablo-ii (1).svg'),
      h1: 'Diablo® II',
      details: 'Action RPG',
    },
    {
      id: 'WarcraftIII',
      arkafon: require('../assets/44004fe111706bac3ad1c9a5c7264d1f-WC3R_2020_Orc_Art_Shop_Product_Page_Assets_prod-full-bg_TS03.jpg'),
      logo: require('../assets/ac48e177da0ca6377b8ba8f275c6700b-warcraft3-reforged-enus-1000x500.png'),
      icon: require('../assets/warcraft-iii (1).svg'),
      h1: 'Warcraft® III: Reforged',
      details: 'Real-time Strategy',
    },
    {
      id: 'CallofDuty:BOCW',
      arkafon: require('../assets/d4b6308a9c0ffb51f723462ef1bb73b9-CODBO_CW-Bnet_Product_Desktop-Background-2280x910-UPDATE-For_20200826.jpg'),
      logo: require('../assets/d71ef0137199aade2dce1457d2642c7e-d20200429-004_Reveal_Logo_Lockup_1P_Bliz_Shop_POSITIVE_activision.png'),
      icon: require('../assets/call-of-duty-black-ops-cold-war.svg'),
      h1: 'Call of Duty®: Black Ops Cold War',
      details: 'Action Shooter',
    },
    {
      id: 'CallofDuty:MW',
      arkafon: require('../assets/77014622d6165448ff18e4703178d6c3-Magma-prod-full-bg-update022420.jpg'),
      logo: require('../assets/10ad1f80958e2d00396d211f1905d710-WARZONE_Logo_Mock_2.png'),
      icon: require('../assets/call-of-duty-black-ops-cold-war.svg'),
      h1: 'Call of Duty®: Black Ops Cold War',
      details: 'Action Shooter',
    },
    {
      id: 'CallofDuty:BO4',
      arkafon: require('../assets/7954c2f62c3065eee5082b3193a31366-CODBO4-Bnet_Game-Shop_Background_Desktop-2290x910-20190930.jpg'),
      logo: require('../assets/de847b6da411da2da8c5b9e41bfe8d56-COD_LOGO_UPDATED_NO_SHADOW.png'),
      icon: require('../assets/call-of-duty (1).svg'),
      h1: 'Call of Duty®: Black Ops 4',
      details: 'Action Shooter',
    },
    {
      id: 'Callof Duty:MW2CR',
      arkafon: require('../assets/ca5641d89e0495fcd468350d298097d5-Lazarus-Bnet_Placeholder-Shop_Background_Desktop-2280x910-For_20200331.jpg'),
      logo: require('../assets/3bb2ca976a136e23390aa65d84b6c51d-Lazarus-Bnet_Game-Shop_Logo-6260x1940-For_20200331_20200323.png'),
      icon: require('../assets/call-of-duty-mw2cr.svg'),
      h1: 'Call of Duty®: Modern Warfare® 2 Campaign Remastered',
      details: 'Action Shooter',
    },
  ],
  options: [
    {
      id: 1,
      parentid: 'Overwatch',
      logo: require('../assets/owlogo1.jpg'),
      name: 'Legendary Edition',
      price: 39.99,
    },
    {
      id: 2,
      parentid: 'Overwatch',
      logo: require('../assets/owlogo2.jpg'),
      name: 'Standard Edition',
      price: 19.99,
    },
    {
      id: 3,
      parentid: 'WorldofWarcraft',
      logo: require('../assets/wowoption1.jpg'),
      name: 'Heroic Edition',
      price: 54.99,
    },
    {
      id: 4,
      parentid: 'WorldofWarcraft',
      logo: require('../assets/wowoption1.jpg'),
      name: 'Base Edition',
      price: 39.99,
    },
    {
      id: 5,
      parentid: 'DiabloIII',
      logo: require('../assets/diablo3option1.jpg'),
      name: 'Eternal Collection',
      price: 39.99,
    },
    {
      id: 6,
      parentid: 'DiabloIII',
      logo: require('../assets/diablo3option2.jpg'),
      name: 'Battle Chest',
      price: 29.99,
    },
    { id: 9, parentid: 'Hearthstone', name: '2 Packs', price: 2.99 },
    { id: 10, parentid: 'Hearthstone', name: '7 Packs', price: 9.99 },
    { id: 11, parentid: 'Hearthstone', name: '15 Packs', price: 19.99 },
    { id: 12, parentid: 'Hearthstone', name: '40 Packs ', price: 49.99 },
    { id: null, parentid: 'HeroesoftheStorm', name: 'Play For Free' },
    {
      id: 14,
      parentid: 'StarCraftII',
      logo: require('../assets/e71edb2abb1fb766100d6dbe6d168ea4-prod-thumb.jpg'),
      name: 'Standard Edition',
      price: 39.99,
    },
    {
      id: 15,
      parentid: 'StarCraftII',
      logo: require('../assets/87e1302addcc27739d6c0c2cc0271154-sc2-lotv-upgrade-DD-CC-enus.jpg'),
      name: 'Digital Deluxe Edition',
      price: 59.99,
    },
    { id: 16, parentid: 'StarCraft', name: 'Free To Play' },
    { id: 17, price: 9.99, parentid: 'DiabloII', name: 'Diablo II' },
    {
      id: 18,
      parentid: 'WarcraftIII',
      logo: require('../assets/26972e24376da6d1bc021446d1c508e4-WC3R_prod-thumb-Deluxe.jpg'),
      name: 'Spoils of War Edition',
      price: 39.99,
    },
    {
      id: 19,
      parentid: 'WarcraftIII',
      logo: require('../assets/f66923163a6c1e5ec2c2888d003a2f0a-WC3R_2020_Orc_Art_Shop_Product_Page_Assets_prod-thumb_TS03.jpg'),
      name: 'Standard Edition',
      price: 29.99,
    },
    {
      id: 20,
      parentid: 'CallofDuty:BOCW',
      logo: require('../assets/ad5d571835fedd44424e60c4a977a332-d20200720-020_Zeus_Keyart_1P_Upsell_Ultimate_Edition_960x540.jpg'),
      name: 'Ultimate Edition',
      price: 89.99,
    },
    {
      id: 21,
      parentid: 'CallofDuty:BOCW',
      logo: require('../assets/c4f6caaca24f373b5ed69ed2f6efa4f6-d20200720-020_Zeus_Keyart_1P_Upsell_Base_Game_960x540.jpg'),
      name: 'Standard Edition',
      price: 59.99,
    },
    { id: 22, parentid: 'CallofDuty:MW', name: 'Free For Everyone' },
    {
      id: 23,
      parentid: 'CallofDuty:BO4',
      logo: require('../assets/d3da8eedcea5f1b6bebc3d86f3187064-CODBO4-Bnet_Game-Feature_Art_R3_C2-640x360-20180604.png'),
      name: 'Digital Deluxe',
      price: 89.99,
    },
    {
      id: 24,
      parentid: 'CallofDuty:BO4',
      logo: require('../assets/f0237bcc69a719e4da6c10580f9088e9-CODBO4-Bnet_Game-Cart_Feature_3A_Standard-960x540-20190930.jpg'),
      name: 'Standard Edition',
      price: 59.99,
    },
    { id: 25, price: 24.99, parentid: 'Callof Duty:MW2CR' },
  ],

  whislist: [],
})

export const getters = {
  cartProducts(state, getters, rootState, rootGetters) {
    return state.whislist.map((cartItem) => {
      const product = rootState.products.options.find(
        (product) => product.id === cartItem.id
      )
      return {
        logo: product.logo,
        price: product.price,
        name: product.name,
      }
    })
  },
  cartTotal(state, getters) {
    return getters.cartProducts.reduce(
      (total, product) => total + product.price,
      0
    )
  },
}

export const mutations = {
  pushProductToCart(state, productId) {
    state.whislist.push({
      id: productId,
    })
  },
  emptyCart(state) {
    state.whislist = []
  },
}
export const actions = {
  addProductToCart(
    { state, getters, commit, rootState, rootGetters },
    product
  ) {
    if (product) {
      const cartItem = state.whislist.find((item) => item.id === product)
      if (!cartItem) {
        commit('pushProductToCart', product)
      }
    }
  },
  checkout({ commit }) {
    commit('emptyCart')
  },
}
