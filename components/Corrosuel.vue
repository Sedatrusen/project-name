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
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
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
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      items: [
        {
          image: require('../assets/ortacod1.jpg'),
          image2: require('../assets/ortacod2.png'),
          parca: 'Get the Confrontation Weapons Pack',
          buton: ' Pre-purchase ',
        },
        {
          image: require('../assets/ortawow1.jpg'),
          image2: require('../assets/ortawow2.png'),
          parca: 'PURCHASE AND GET THE XRK WEAPONS PACK AT LAUNCH',
          buton: 'Pre-Purchase',
        },
        {
          image: require('../assets/orta3.jpg'),
          image2: require('../assets/orta3.3.png'),
          parca: 'SAVE BIG ON BATTLE FOR AZEROTH',
          buton: 'Buy Now',
        },
        {
          image: require('../assets/ortahs1.jpg'),
          image2: require('../assets/ortahs2.png'),
          parca: 'GET THE SPRITE DARTER’S WINGS WITH A 6-MONTH SUBSCRIPTION',
          buton: 'Buy Now',
        },
      ],
    }
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
