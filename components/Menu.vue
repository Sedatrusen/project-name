<template>
  <div class="arka">
    <div class="cont">
      <div id="home">
        <button>
          <svg
            _ngcontent-c12
            class="svg"
            aria-hidden="true"
            data-prefix="blz"
            data-icon="home"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 358.7"
            data-fa-i2svg
          >
            <path
              fill="currentColor"
              d="M494.9,161.8L267.4,9.1c-6.9-4.6-15.9-4.6-22.8,0L17.1,161.8c-9.4,6.3-11.9,19-5.6,28.5 	c6.3,9.4,19,11.9,28.5,5.6L75.5,172v131.9c0,27.2,21.5,49.2,47.9,49.2h265.2c26.4,0,47.9-22.1,47.9-49.2V172l35.5,23.8 	c3.5,2.3,7.5,3.5,11.4,3.5c6.6,0,13.1-3.2,17-9.1C506.8,180.9,504.3,168.1,494.9,161.8z M395.6,144.7v159.2c0,4.5-3.1,8.2-6.9,8.2 	H123.4c-3.8,0-6.9-3.7-6.9-8.2V145.7c0-0.4-0.1-0.8-0.1-1.1L256,50.7l139.6,93.7C395.6,144.6,395.6,144.6,395.6,144.7z"
            />
          </svg>

          Home
        </button>
      </div>
      <div class="game">
        <button id="game" @click="greet">
          Games
          <svg
            _ngcontent-c6=""
            aria-hidden="true"
            class="svgkucuk"
            data-prefix="fa"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </button>
        <div class="dropdown-content">
          Blizzard Game

          <router-link to="/">
            <img class="simge" src="../assets/menuwow.svg" alt="" /> World of
            Warcraft</router-link
          >

          <router-link to="/">
            <img class="simge" src="../assets/menuow.svg" alt="" />
            Overwatch</router-link
          >
        </div>
      </div>
      <div id="service">
        <button>
          Services
          <svg
            _ngcontent-c6=""
            aria-hidden="true"
            class="svgkucuk"
            data-prefix="fa"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div id="gear">
        <button>
          Blizzard Gear
          <svg
            _ngcontent-c5=""
            class="svgkucuk"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="external-link-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"
            ></path>
          </svg>
        </button>
      </div>
      <div id="search">
        <input type="search" name="Search" placeholder="Search Shop" />
      </div>
      <div id="whish">
        <button>Whishlist</button>
      </div>
      <div id="services">
        <button>Blizzard Balance</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.arka {
  width: 100%;
  background-color: #002650;
  margin: 0;
  font-size: 14px;
  padding: 0%;
}
div {
  margin: 0;
  padding: 0;
  height: 100%;
}
.cont {
  display: grid;
  grid-template-columns: 5% 0.5fr 0.5fr 0.5fr 0.9fr 2fr 2fr 0.5fr 0.5fr 0.9fr 5%;
  height: 3rem;
  align-items: baseline;
  justify-items: start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0;
}
button {
  display: flex;
  padding: 1rem;
  outline: none;
  border: none;
  color: #fffc;
  width: 100%;
  background: transparent;
}
svg {
  margin: 0;
  padding: 0;
  position: static;
  width: 30px;
  height: 14px;
  color: #0e86ca;
}
#home {
  grid-column: 2/3;
}
input {
  outline: none;
  border: none;
  width: 200%;
  height: 60%;
  justify-self: center;
  color: white;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' color='rgb( 14, 134, 202) ' fill= 'currentColor' width='15' height='15' viewBox='0 0 25 25' %3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
    left / contain no-repeat;
  background-color: #001732;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}
input:focus {
  height: 100%;
}
#whish {
  border: 1px solid rgba(255, 255, 255, 0.15);
  grid-column: 9/10;
  width: 100%;
}
#services {
  grid-column: 10/11;
}
#search {
  grid-column: 7/8;
}
.svgkucuk {
  color: white;
  margin: 0.2rem;
  width: 12px;
  height: 12px;
  justify-self: baseline;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #1c2433;
  height: 20rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: left 1rem;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.dropdown-content a {
  padding: 12px 16px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

/* Show the dropdown menu on hover */
.game:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

/* Change the background color of the dropdown button when the dropdown content is shown */

.simge {
  width: 20px;
  height: 20px;
  margin: 0.5rem;
  justify-self: baseline;
}
</style>
