<template>
  <div>
    <b-carousel
      v-model="slide"
      class="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="item in items"
        :key="item.id"
        :img-src="item.image"
        ><div class="info">
          <img class="resimler" :src="item.image2" alt="" />
          <p>{{ item.parca }}</p>
          <button class="button">{{ item.buton }}</button>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  computed: {
    ...mapState({ items: (state) => state.carouselitems.carouselitems }),
  },
  created() {
    this.$store.dispatch('carouselitems/addcarouselitems')
  },
}
</script>
<style scoped>
.resimler {
  height: 150px;
  width: 250px;
}
.carousel-1 {
  display: flex;
  justify-items: start;
  flex: 1;
  align-items: flex-start;
}

.button {
  height: 40px;
  width: 280px;
  background-color: #0e86ca;
  border: none;
  color: white;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
.button:hover {
  background-color: #83cefa;
}
.info {
  margin-right: 50rem;
}
</style>
