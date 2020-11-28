<template>
  <div class="orta">
    <img class="arka-fon" :src="image" />
    <div class="info">
      <img class="resimler" :src="image2" />
      <p>{{ parca }}</p>
      <button class="button">{{ buton }}</button>
    </div>
    <div class="butonlar">
      <button focused @click="orta1()"></button>
      <button @click="orta2()"></button>
      <button @click="orta3"></button>
      <button @click="orta4"></button>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      image: require('../assets/ortacod1.jpg'),
      image2: require('../assets/ortacod2.png'),
      parca: 'Get the Confrontation Weapons Pack',
      buton: ' Pre-purchase ',
    }
  },

  methods: {
    orta1() {
      this.image = require('../assets/ortacod1.jpg')
      this.image2 = require('../assets/ortacod2.png')
      this.parca = 'Get the Confrontation Weapons Pack'
      this.buton = ' Pre-purchase '
    },
    orta2() {
      this.image = require('../assets/ortawow1.jpg')
      this.image2 = require('../assets/ortawow1.jpg')
      this.parca = 'PURCHASE AND GET THE XRK WEAPONS PACK AT LAUNCH'
      this.buton = 'Pre-Purchase'
    },
    orta3() {
      this.image = require('../assets/orta3.jpg')
      this.image2 = require('../assets/orta3.3.png')
      this.parca = 'SAVE BIG ON BATTLE FOR AZEROTH'
      this.buton = 'Buy Now'
    },
    orta4() {
      this.image = require('../assets/ortahs1.jpg')
      this.image2 = require('../assets/ortahs2.png')
      this.parca = 'GET THE SPRITE DARTER’S WINGS WITH A 6-MONTH SUBSCRIPTION'
      this.buton = 'Buy Now'
    },
  },
}
</script>

<style>
.orta {
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 10% 1fr 2fr 1fr 10%;
  grid-template-rows: 1fr 1fr 1fr;
}
.info {
  grid-column: 2/3;
  grid-row: 2/3;
  color: white;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
.resimler {
  height: 150px;
  width: 250px;
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

.butonlar {
  display: flex;
  grid-column: 3/4;
  grid-row: 5/6;
}
.butonlar button {
  margin-left: 1rem;
  height: 5px;
  width: 6rem;
  background: #869791;
  border: 0 solid;
  border-color: transparent;
  border-radius: 5px;
}
.butonlar button:hover {
  background-color: #535c59;
}
.butonlar button:focus {
  background-color: #83cefa;
}

.arka-fon {
  width: 100%;
  height: 300px;
  grid-column: 1/8;
  grid-row: 1/5;
}
</style>
