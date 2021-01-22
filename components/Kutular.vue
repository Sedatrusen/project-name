<template>
  <div>
    <ul id="example-1">
      <nuxt-link
        v-for="item in items"
        :key="item.id"
        :style="{ backgroundImage: 'url(' + item.arkafon + ')' }"
        :to="{ name: 'productpages-id', params: { id: item.router } }"
      >
        <img class="kucuk-simge" :src="item.simge" alt />
        <h1 class="rec-yazi">{{ item.yazi1 }}</h1>
        <h1 class="rec-yazi2">{{ item.yazi2 }}</h1>
        <h1 class="rec-yazi3">{{ item.yazi3 }}</h1>
        <h1 class="rec-yazi4">{{ item.yazi4 }}</h1>
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({ items: (state) => state.kutular.kutular }),
  },
  created() {
    this.setKutular()
  },
  methods: {
    setKutular() {
      this.$store.dispatch('kutular/addkutular')
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none; /* Remove bullets */
  margin: auto; /* Remove margins */
  display: flex;
  flex-wrap: wrap;
}

ul a {
  background-color: #012043;
  height: 25rem;
  width: 18rem;
  display: grid;
  grid-template-rows: 10fr 1fr 1fr 1fr 1fr 1fr 2fr 1fr;
  background-repeat: no-repeat;
  padding: 1rem;
  margin: 0.8rem;
  justify-content: start;
  opacity: 0.9;
  background-size: cover;
  transition: transform 0.4s ease-in-out;
}

ul a:hover {
  transform: scale(1.06);
}
.kucuk-simge {
  grid-row: 3/4;
  width: 30px;
  height: 30px;
}
h1 {
  color: white;
  font-size: 1.2rem;
  text-align: left;
  margin: 2px;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
.rec-yazi {
  grid-row: 4;
}
.rec-yazi4 {
  grid-row: 10;
  font-size: 1.1rem;
}
.rec-yazi2 {
  grid-row: 5;
  color: #fecc00;
  font-size: 1rem;
}
.rec-yazi3 {
  grid-row: 6;
  font-size: 0.9rem;
}
</style>
