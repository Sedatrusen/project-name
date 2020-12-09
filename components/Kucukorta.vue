<template>
  <div class="sayfa">
    <div class="aralık">
      <div class="blizardgames"><p class="aralık-yazı">BLIZZARD GAMES</p></div>
      <div class="simgeler">
        <nuxt-link
          v-for="blizzardgame in blizzardgames"
          :key="blizzardgame.id"
          :to="{ name: 'productpages-id', params: { id: blizzardgame.id } }"
          ><img class="aralık-simge" :src="blizzardgame.img"
        /></nuxt-link>
      </div>
      <div>
        <div class="partner">
          <div class="blizardgames">
            <p class="aralık-yazı">PARTNER GAMES</p>
          </div>
          <nuxt-link
            v-for="partnergame in partnergames"
            :key="partnergame.id"
            :to="{ name: 'productpages-id', params: { id: partnergame.id } }"
            ><img class="aralık-simge" :src="partnergame.img"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      blizzardgames: (state) => state.games.blizzardgames,
      partnergames: (state) => state.games.partnergames,
    }),
  },
}
</script>

<style scoped>
.sayfa {
  background-image: url('../assets/top.png');
  background-color: #01234a;
}

.aralık {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
.aralık-yazı {
  font-size: 14px;
  line-height: 1.3;
  color: white;
}
.aralık-simge {
  height: 40px;
  width: 40px;
  margin-left: 10px;
}
.aralık-simge:hover {
  transform: scale(1.1);
}
.partner {
  margin: 20px;
  padding-left: 20px;
  display: flex;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
