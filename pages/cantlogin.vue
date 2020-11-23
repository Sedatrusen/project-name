<template>
  <div class="sayfa">
    <div class="ortalama">
      <div id="logo">
        <img src="../assets/blizzlogo.png" alt />
      </div>
      <div class="emailout">
        <h1>Can't log in</h1>
      </div>

      <div class="emailout">
        <p>
          We are sorry! There are several reasons you might not be able to log
          in. Check below for more information and possible solutions.
        </p>
      </div>

      <ul>
        <router-link to="/cantlogin">
          <li>
            <img src="../assets/1.png" alt />
            <p>I don't know my password</p>
          </li>
        </router-link>
        <li>
          <img src="../assets/2.png" alt />
          <p>blizzard account is locked</p>
        </li>

        <li>
          <img src="../assets/3.png" alt />
          <p>I need to remove my authenticator</p>
        </li>
        <li>
          <img src="../assets/4.png" alt />
          <p>I don't know my email address</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default { layout: 'no-layout' }
</script>

<style scoped>
.sayfa {
  width: 100%;
  height: 1000px;
  background-color: black;
  background-image: url(../assets/loginarkaplan.jpg);
  font-family: 'Blizzard', 'Arial', 'Helvetica', 'Segoe UI Symbol',
    'Segoe MDL2 Assets', sans-serif;
  line-height: 20px;
  color: white;
  padding: 1rem;
}
h1 {
  font-family: 'Blizzard', 'Arial', 'Helvetica', 'Segoe UI Symbol',
    'Segoe MDL2 Assets', sans-serif;
  font-size: 2em;
  font-weight: 300;
  line-height: 40px;
  color: #fff;
}
a {
  color: white;
}
.ortalama a {
  text-decoration: none;
}

.ortalama a:hover {
  color: white;
}

.ortalama {
  margin-left: 20%;
  margin-right: 20%;
  height: 100%;
  width: 60%;
}
.ortaiç {
  margin-top: 40px;
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
  display: flex;
  align-items: flex-start;
  margin-left: 25%;
  width: 500px;
  height: 40px;
  margin-top: 10px;
  text-align: start;
}
p {
  font-size: 0.8rem;
  justify-self: start;
}

.ortalama ul {
  margin-left: 20%;
  overflow: hidden;
}

.ortalama li {
  margin: 10px auto 0;
  margin-right: 10px;
  display: block;
  background-color: #19547c;
  border: 1px solid rgba(0, 174, 255, 0.5);
  border-radius: 2px;
  width: 200px;
  height: 200px;
  float: left;
  text-align: center;
}
.ortalama li:hover {
  background-color: rgb(84, 184, 230);
}
</style>
