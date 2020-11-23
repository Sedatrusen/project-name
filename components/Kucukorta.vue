<template>
  <div class="sayfa">
    <div class="aralık">
      <div class="blizardgames"><p class="aralık-yazı">BLIZZARD GAMES</p></div>
      <div class="simgeler">
        <nuxt-link to="product"
          ><img class="aralık-simge" src="../assets/aralık1.svg"
        /></nuxt-link>

        <img class="aralık-simge" src="../assets/aralık2.svg" />
        <img class="aralık-simge" src="../assets/aralık3.svg" />
        <img class="aralık-simge" src="../assets/aralık4.svg" />
        <img class="aralık-simge" src="../assets/aralık5.svg" />
        <img class="aralık-simge" src="../assets/aralık6.svg" />
        <img class="aralık-simge" src="../assets/aralık7.svg" />
        <img class="aralık-simge" src="../assets/aralık8.svg" />
        <img class="aralık-simge" src="../assets/aralık9.svg" />
      </div>
      <div>
        <div class="partner">
          <div class="blizardgames">
            <p class="aralık-yazı">PARTNER GAMES</p>
          </div>
          <img class="aralık-simge" src="../assets/kucukortaprt1.svg" />
          <img class="aralık-simge" src="../assets/kucukortaprt2.svg" />
          <img class="aralık-simge" src="../assets/kucukortaprt3.svg" />
          <img class="aralık-simge" src="../assets/kucukortaprt4.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
