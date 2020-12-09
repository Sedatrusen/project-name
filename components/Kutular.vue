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
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          router: 'CallofDuty:MW',
          arkafon: require('../assets/kutularcod1.jpg'),
          simge: require('../assets/kutularcod2.svg'),
          yazi1: 'Call of Duty®: Warzone',
          yazi2: 'Free For Everyone',
          yazi3: 'Action Shooter',
          yazi4: 'Play For Free',
        },
        {
          id: 1,
          router: 'WorldofWarcraft',
          arkafon: require('../assets/kutularwow1.jpg'),
          simge: require('../assets/kutularwow2.svg'),
          yazi1: 'World of Warcraft®: Shadowlands',
          yazi2: 'Pre-purchase now! Arriving in November 2020',
          yazi3: 'Massively Multiplayer RPG',
          yazi4: ' From  €39.99',
        },

        {
          id: 1,
          router: 'WorldofWarcraft',
          arkafon: require('../assets/kutularclassic1.jpg'),
          simge: require('../assets/kutularclassic2.svg'),
          yazi1: 'World of Warcraft®',
          yazi2: 'Includes access to World of Warcraft and WoW Classic!',
          yazi3: 'Subscriptions',
          yazi4: ' Learn More',
        },
        {
          id: 1,
          router: 'Hearthstone',
          arkafon: require('../assets/kutularac1.jpg'),
          simge: require('../assets/kutularac2.svg'),
          yazi1: 'Scholomance Academy',
          yazi2: 'Latest Expansion!',
          yazi3: 'Card Packs',
          yazi4: ' From  €2.99',
        },
        {
          id: 1,
          router: 'CallofDuty:MW',
          arkafon: require('../assets/kutularmw1.jpg'),
          simge: require('../assets/kutularmw2.svg'),
          yazi1: 'Call of Duty®: Modern Warfare® - Battle Pass Edition',
          yazi2: '',
          yazi3: 'Action Shooter',
          yazi4: '€79.99',
        },
        {
          id: 1,
          router: 'Hearthstone',
          arkafon: require('../assets/kutularhs1.jpg'),
          simge: require('../assets/kutularhs2.svg'),
          yazi1: 'Hearthstone®',
          yazi2: '',
          yazi3: 'Strategy Card Game',
          yazi4: ' Play For Free',
        },
        {
          id: 1,
          router: 'Overwatch',
          arkafon: require('../assets/kutularow1.jpg'),
          simge: require('../assets/kutularow2.svg'),
          yazi1: 'Overwatch®: Legendary Edition',
          yazi2: '',
          yazi3: 'Team-Based Shooter',
          yazi4: ' €39.99',
        },
        {
          id: 1,
          router: 'StarCraftII',
          arkafon: require('../assets/kutularsc1.jpg'),
          simge: require('../assets/kutularsc2.svg'),
          yazi1: 'StarCraft® II: Campaign Collection',
          yazi2: '',
          yazi3: 'Real-time Strategy',
          yazi4: ' €39.99',
        },
        {
          id: 1,
          router: 'StarCraft',
          arkafon: require('../assets/kutularhots1.jpg'),
          simge: require('../assets/kutularhots2.svg'),
          yazi1: 'Heroes of the Storm™',
          yazi2: '',
          yazi3: 'MOBA',
          yazi4: '  Play For Free',
        },
        {
          id: 1,
          router: 'DiabloII',
          arkafon: require('../assets/kutulard31.jpg'),
          simge: require('../assets/kutulard32.svg'),
          yazi1: 'Diablo® III: Eternal Collection',
          yazi2: '',
          yazi3: 'Action RPG',
          yazi4: '  €39.99',
        },
      ],
    }
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
