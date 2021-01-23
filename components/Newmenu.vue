<template>
  <div class="navbar">
    <b-nav>
      <b-nav-item class="m-2" to="/"
        ><b-icon class="house" icon="house" aria-hidden="true"></b-icon>
        Home</b-nav-item
      >

      <b-nav-item-dropdown class="m-2 dparka" text="Games">
        <b-dropdown-header id="dropdown-header-label">
          Blizzard Games
        </b-dropdown-header>
        <b-dropdown-item
          v-for="blizzardgame in blizzardgames"
          :key="blizzardgame.id"
          :to="{ name: 'productpages-id', params: { id: blizzardgame.id } }"
        >
          <img :src="blizzardgame.icon" />{{ blizzardgame.type }}
        </b-dropdown-item>

        <b-dropdown-header id="dropdown-header-label">
          Partner Games
        </b-dropdown-header>
        <b-dropdown-item
          v-for="partnergame in partnergames"
          :key="partnergame.id"
          :to="{ name: 'productpages-id', params: { id: partnergame.id } }"
        >
          <img :src="partnergame.icon" />{{ partnergame.type }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown class="m-2 dparka" text="Services">
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <b-icon icon="tag" aria-hidden="true"></b-icon> BattleTag Change
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Redeem a Code
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item class="m-2" to="/">
        Blizzard Gear
        <b-icon
          icon="box-arrow-up-right"
          aria-hidden="true"
          font-scale="1"
        ></b-icon
      ></b-nav-item>
      <b-nav-form>
        <b-input-group size="sm" class="search">
          <b-input-group-prepend>
            <b-button variant="outline-info"
              ><b-icon icon="search" aria-hidden="true" font-scale="1"></b-icon
            ></b-button>
          </b-input-group-prepend>
          <b-form-input type="text"></b-form-input>
        </b-input-group>
      </b-nav-form>
      <b-nav-item v-b-modal.modal-tall class="m-2 kalp" @click="isuser">
        <b-icon icon="heart-fill" aria-hidden="true" font-scale="1"></b-icon>

        Whislist

        <b-modal
          id="modal-tall"
          class="arkaplan"
          header-bg-variant="dark"
          header-text-variant="light"
          body-bg-variant="dark"
          body-text-variant="light"
          title="Whishlist"
          hide-footer
        >
          <ul class="whislist">
            <li v-for="whislist in whislists" :key="whislist.name" tabindex="0">
              <img class="logo" :src="whislist.logo" alt="" />
              <p>{{ whislist.name }}</p>
              <p>€{{ whislist.price }}</p>
            </li>
          </ul>

          <p class="total">Total : € {{ total }}</p>
          <b-button @click="checkout">Buy All</b-button>
        </b-modal>
      </b-nav-item>
      <b-nav-item-dropdown class="m-2 dparka" text="Blizzard Balance">
        <b-dropdown-item-button aria-describedby="dropdown-header-label">
          <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Add Balance
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="arrow-right-circle" aria-hidden="true"></b-icon> Gift
          Balance
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="credit-card-fill" aria-hidden="true"></b-icon> Add
          Pre-Paid Card
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { auth } from '../plugins/firebase'
export default {
  data() {
    return {
      logged: false,
    }
  },
  computed: {
    blizzardgames() {
      return this.$store.state.products.Products.filter(
        (cat) => cat.categories === 'BLIZZARDGAMES'
      )
    },

    partnergames() {
      return this.$store.state.products.Products.filter(
        (cat) => cat.categories === 'PARTNERGAMES'
      )
    },
    ...mapGetters('products', {
      whislists: 'cartProducts',
      total: 'cartTotal',
    }),
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.$store.dispatch('chechwhislist')
        auth.currentUser.getIdToken(true)

        this.loggedIn = true
      } else {
        // if (Cookies.set('access_token', 'blah')) {
        // }
        // No user is signed in.
        this.loggedIn = false
      }
    })
    this.$store.dispatch('addproducts')
    this.$store.dispatch('addoptions')
  },

  methods: {
    isuser() {
      if (auth.currentUser === null) {
        this.$router.replace({ name: 'login' })
      }
    },
    ...mapActions('products', ['checkout']),
  },
}
</script>
<style>
.navbar {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  background-color: #002650;
  font-size: 14px;
  padding: 0 5rem 0 5rem;
  color: rgba(255, 255, 255, 0.8);
}
.nav-link {
  color: inherit;
}
.nav-link:hover {
  color: white;
}
.house {
  color: #0e86ca;
}
.dparka ul {
  background: linear-gradient(#1c2534, #161a26);
  border: none;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.dparka ul li a {
  color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
}
.dparka ul li a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: inherit;
}

.dparka ul li button {
  color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
}
.dparka ul li button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: inherit;
}
</style>
<style scoped>
img {
  height: 20px;
  width: 20px;
}
.search {
  width: 30rem;
  margin-left: 30rem;
}
.search button,
input {
  color: #0e86ca;
  background-color: #001732;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.search button {
  border-right: none;
}
.search button:focus,
input:focus {
  height: 40px;
  background-color: #001732;
  outline: none;
}
.kalp {
  border: 1px solid rgba(255, 255, 255, 0.15);
  height: 120%;
}
.whislist {
  list-style-type: none;
}
.whislist li {
  border-bottom: 1px solid #13161d;
  background-color: transparent;
  padding-left: 25px;
  padding-top: 20px;
  margin: 0;
}
.logo {
  align-self: start;
  float: left;
  height: 100%;
  width: 100px;
  margin-right: 1rem;
}
.arkaplan {
  background-color: #001732;
}
</style>
