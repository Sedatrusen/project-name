<template>
  <div class="sayfa">
    <div class="ortalama">
      <div class="ortaiç">
        <div id="logo">
          <img src="../assets/blizzlogo.png" alt />
        </div>
        <div id="login">
          <div v-show="show" class="../assets/emailout">
            <p class="uyarı">Please enter your account.</p>
          </div>

          <div class="emailout">
            <input v-model="email" type="text" placeholder="Email or Phone" />
          </div>
          <div class="emailout">
            <input v-model="password" placeholder="Password" type="password" />
          </div>
          <div class="emailout">
            <button @click="tiklama(email, password)">Log In</button>
          </div>
        </div>
        <div class="emailout">
          <span>Or log in with</span>
        </div>
        <div class="emailout">
          <button class="sosyal" type="submit">
            <img src="../assets/facebookimg.png" alt />
          </button>
          <button class="sosyal" type="submit">
            <img src="../assets/googleimg.png" alt />
          </button>
          <button class="sosyal img" type="submit">
            <img class="img" src="../assets/applelogo.png" alt />
          </button>
        </div>
        <div class="emailout">
          <nuxt-link class="others" to="newaccount"
            >Create a free Blizzard Accoun</nuxt-link
          >
        </div>
        <div class="emailout">
          <nuxt-link to="cantlogin" class="others">Can't log in?</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Blizzard Login',
  layout: 'no-layout',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    tiklama(email, password) {
      if (email == null && password == null) {
        ;(this.show = true)((this.isVisible = true))
      } else this.show = false
    },
  },
}
</script>

<style scoped>
.img {
  width: 25px;
}
.sayfa {
  width: 100%;
  height: 1000px;
  background-color: black;
  background-image: url(../assets/loginarkaplan.jpg);
  font-family: 'Blizzard', 'Arial', 'Helvetica', 'Segoe UI Symbol',
    'Segoe MDL2 Assets', sans-serif;
  font-size: 15px;
  line-height: 20px;
  z-index: 1;
}
a {
  text-decoration: none;
}

a:hover {
  color: white;
}

.ortalama {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  height: 100%;
  width: 60%;
}
.ortaiç {
  height: 60%;
  width: 95%;
}
#logo {
  height: 28%;
  width: 20%;
  margin-right: 40%;
  margin-left: 40%;
}
.emailout {
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 30px;
  text-align: center;
}
input {
  color: white;
  width: 360px;
  margin: 5px 0;
  padding: 0 10px;
  font-size: 17px;
  line-height: 20px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.5);
}
input:hover {
  border-color: rgba(133, 127, 127, 0.808);
}
button {
  width: 360px;
  margin-top: 10px;
  height: 40px;
  font-size: 17px;
  text-align: center;
  background-color: #0e86ca;
  color: #fff;
  border: 1px solid #10a1de;
  border-radius: 0;
  transition: background-color 0.2s, box-shadow 0.2s, background-color 0.2s,
    border-color 0.2s, color 0.2s;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}

span {
  margin-top: 5px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
}
button:hover {
  background-color: #8bccf1da;
}
.sosyal {
  margin-left: 10px;
  background: white;
  line-height: 20px;
  width: 75px;
}
.others {
  margin-top: 5px;
  color: #00aeff;
  transition: color 0.2s;
}
.alt {
  display: block;
  position: absolute;
  width: 100%;
  height: 120px;
  text-align: center;
  text-decoration: none;
  padding-left: 5px;
}

.altyazı {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: text-shadow 160ms ease, color 160ms ease;
}

.altyazıı {
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
}

.uyarı {
  padding: 1%;
  width: 360px;
  margin-left: 33%;
  font-size: 17px;
  line-height: 20px;
  color: white;
  text-align: center;
  background-color: #360e10;
  box-shadow: 0 0 0 1px #551e21 inset, 0 5px 10px rgba(0, 0, 0, 0.75);
}
.sosyal:first-child {
  background-color: #00aeff;
}
</style>
