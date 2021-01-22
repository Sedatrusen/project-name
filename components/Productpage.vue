<template>
  <div
    class="productarkafon"
    :style="{ backgroundImage: 'url(' + product.arkafon + ')' }"
  >
    <div class="productcontanier">
      <div class="productlist">
        <img id="owlogo" :src="product.logo" alt="" />
        <ul class="producttable">
          <li>
            <img id="owicon" :src="product.icon" alt="" />
            <h1>{{ product.h1 }}</h1>
            <p id="details">{{ product.details }}</p>
          </li>
          <li
            v-for="option in options"
            :key="option.id"
            ref="focusThis"
            tabindex="0"
            @click="select(option.id)"
          >
            <img class="logo" :src="option.logo" alt="" />
            <p>{{ option.name }}</p>
            <p v-if="!!option.price">€{{ option.price }}</p>
          </li>
          <li>
            <button @click="addProductToCart(selecteditemid)">Buy Now</button
            ><button id="gift">Gift</button>
            <p class="sv">
              <svg
                _ngcontent-c53=""
                aria-hidden="true"
                class="svg"
                data-prefix="blz"
                data-icon="heart-empty"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M14.4374656,1.96877868 C15.0832975,2.5104439 15.531213,3.1771093 15.7812124,3.96877392 C16.0312118,4.76043854 16.0676702,5.55731164 15.8905871,6.35939322 C15.713504,7.1614748 15.3332969,7.85418116 14.7499648,8.43751326 L8.71872921,14.6874984 C8.51039622,14.8958314 8.27081377,14.9999976 7.99998093,14.9999976 C7.72914808,14.9999976 7.48956564,14.8958314 7.28123264,14.6874984 L1.24999702,8.46876319 C0.666664918,7.86459812 0.286457809,7.1614748 0.109374739,6.35939322 C-0.0677083308,5.55731164 -0.0312499255,4.76043854 0.218749478,3.96877392 C0.468748882,3.1771093 0.911456319,2.5104439 1.54687131,1.96877868 C2.1822863,1.42711347 2.88540963,1.11461421 3.65624128,1.03128092 C4.34373964,0.947947626 5.04165449,1.0416974 5.74998629,1.31253025 C6.39581824,1.56252965 6.93748346,1.91669532 7.37498242,2.37502772 L7.99998093,3.03127615 L8.62497944,2.37502772 C9.14581169,1.8333625 9.75518523,1.44794643 10.4531001,1.21878047 C11.1510149,0.989614512 11.8541382,0.937531143 12.56247,1.06253085 C13.2708019,1.18753055 13.8958004,1.48961332 14.4374656,1.96877868 Z M14.0312165,7.7500149 C14.4478821,7.33334939 14.7343399,6.81772562 14.8905895,6.20314359 C15.0468391,5.58856156 15.0416306,4.98960497 14.8749645,4.40627287 C14.687465,3.73960796 14.3280908,3.1823173 13.7968421,2.73440186 C13.2655934,2.28648642 12.6770533,2.04169502 12.0312213,2.00002861 C11.5103891,1.97919517 10.9791403,2.09377839 10.4374751,2.34377779 C9.97914272,2.53127734 9.61456057,2.78127675 9.34372772,3.093776 L7.99998093,4.46877272 L6.65623413,3.093776 C6.36456832,2.78127675 5.99998569,2.52086086 5.56248674,2.31252787 C5.02082152,2.06252846 4.48957279,1.9583622 3.96874054,2.00002861 C3.32290859,2.04169502 2.73436848,2.28648642 2.20311975,2.73440186 C1.67187101,3.1823173 1.31249687,3.73960796 1.12499732,4.40627287 C0.958331207,4.98960497 0.953122728,5.58856156 1.10937236,6.20314359 C1.26562198,6.81772562 1.55207979,7.33334939 1.96874531,7.7500149 L7.99998093,14 L14.0312165,7.7500149 Z"
                ></path>
              </svg>

              Add to Wish List
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      selecteditemid: 2,
      id: this.$route.params.id,
    }
  },
  computed: {
    product() {
      return this.$store.state.products.Products.find(
        (productpages) => productpages.id === this.id
      )
    },
    options() {
      return this.$store.state.products.options.filter(
        (productpages) => productpages.parentid === this.product.id
      )
    },
  },
  created() {
    this.setProduct()
    this.setOptions()
  },
  methods: {
    ...mapActions({
      addProductToCart: 'addProductToCart',
    }),
    select(itemid) {
      this.selecteditemid = itemid
    },
    focusMyElement() {
      this.$refs.focusThis.focus()
    },
    setProduct() {
      this.$store.dispatch('products/addproducts')
    },
    setOptions() {
      this.$store.dispatch('products/addoptions')
    },
  },
}
</script>

<style scoped>
.productarkafon {
  display: grid;
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-columns: 10% 1fr 1fr 1fr 1.5fr 7%;
}
.productcontanier {
  grid-column: 5/6;
  min-width: 500px;
}
#owlogo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 300px;
  height: 120%;
  margin-top: 40px;
  align-self: center;
  object-fit: cover;
  justify-self: center;
}
.producttable {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.producttable li {
  border: 1px solid #13161d;
  margin-top: -1px; /* Prevent double borders */
  background-color: #272e3b;
  padding-left: 25px;
  padding-top: 20px;
}
#owicon {
  align-self: start;
  float: left;
  height: 60px;
  width: 60px;
}
h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 10 !important;
  line-height: 1.2;
  font-size: 1.5rem;
  color: #f8f9fa;
}
#details {
  font-size: 15px;
  font-weight: 100 !important;
  font-family: 'Open Sans', helvetica, arial, sans-serif;
  color: #f8f9fa;
}
.logo {
  align-self: start;
  float: left;
  height: 100%;
  width: 100px;
  margin-right: 2rem;
}
p {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  align-self: center;
}
ul li:focus {
  background-color: #0f465c;
  border-left: 5px #00c1fc solid;
  outline: 0;
}
button {
  background-color: #1e6a99;
  height: 60px;
  width: 90%;
  border: 0;
  color: white;
  align-self: center;
}
#gift {
  background-color: #13161d;
  border: #1e6a99 solid 1px;
  margin-top: 2px;
  color: #00aeff;
}
.svg {
  height: 20px;
  width: 20px;
  border-color: aqua;
}
.sv {
  color: #00aeff;
  text-align: center;
  font-size: 1.5rem;
}
</style>
