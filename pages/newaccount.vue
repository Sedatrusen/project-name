<template>
  <div class="sayfa">
    <div class="card">
      <img class="logo" src="../assets/blizzlogo.png" alt="" />
      <h1>Get starded</h1>
      <p>
        Let us verify some information about you to help set up your
        account.<router-link to="/">Learn why we need this. </router-link>
      </p>
      <div v-if="error" class="../assets/emailout">
        <p class="uyarı">
          <b-icon icon="slash-circle" type="slash-circle"></b-icon>

          {{ error.message }}
        </p>
      </div>
      <select v-model="selected">
        <option>Turkey</option>
        <option>USA</option>
        <option>England</option>
      </select>
      <div>
        <input
          v-model="message"
          class="tarih"
          placeholder="Date of Birth(dd/mm/yyyy)"
        />
      </div>
      <div class="emailout">
        <input
          v-model="email"
          class="tarih"
          type="text"
          placeholder="Email or Phone"
        />
      </div>
      <div class="emailout">
        <input
          v-model="password"
          class="tarih"
          placeholder="Password"
          type="password"
        />
      </div>
      <button @click="tiklama(email, password)">Continue</button>
      <p class="yazi">OR SING UP WITH</p>
      <div class="emailout">
        <button class="sosyal" type="submit">
          <img src="../assets/facebookimg.png" alt />
        </button>
        <button class="sosyal" type="submit">
          <img src="../assets/googleimg.png" alt />
        </button>
        <button class="sosyal" type="submit">
          <img class="img" src="../assets/applelogo.png" alt />
        </button>
        <p>Already have an account? <nuxt-link to="login">Login</nuxt-link></p>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { auth } from '../plugins/firebase'
export default {
  layout: 'accountly',
  data() {
    return { selected: 'Turkey', error: '', email: '', password: '' }
  },
  methods: {
    tiklama(email, password) {
      if (email == null && password == null) {
        this.show = true
      } else this.show = false

      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.replace({ name: 'index' })
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style scoped>
.sayfa {
  display: grid;
  background: no-repeat;
  background-size: cover;
  background-image: url(../assets/accountarkaplan.jpg);
  grid-template-columns: 2fr 2fr 2fr;
  width: 100%;
  height: 100%;
}
.card {
  background-color: rgb(255, 255, 255, 0.1);
  max-width: 500px;
  margin: 50px;
  grid-column: 2/3;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}
.logo {
  height: 60px;
  width: 120px;
}
select {
  width: 400px;
  height: 40px;
  color: white;
  background-color: black;
}
p {
  color: white;
}
.tarih {
  width: 395px;
  height: 40px;
  color: white;
  background-color: black;
  border: none;
  margin-top: 10px;
}
.uyarı {
  color: red;
}
button {
  width: 400px;
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
.sosyal {
  margin-left: 10px;
  background: white;
  line-height: 20px;
  width: 44px;
  height: 44px;
}
.sosyal:first-child {
  background-color: #165dee;
}
.img {
  width: 20px;
  align-self: center;
}
a {
  color: #139cff;
}
h1 {
  color: #fff;
  font-weight: lighter;
}
</style>
