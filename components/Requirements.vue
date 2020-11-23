<template>
  <div class="con">
    <h1>System Requirements</h1>
    <div class="simge">
      <button focus:on>
        <svg
          _ngcontent-c46=""
          class="svg"
          aria-hidden="true"
          data-prefix="fab"
          data-icon="windows"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
          ></path>
        </svg>
        Windows
      </button>

      <button>
        <svg
          _ngcontent-c46=""
          class="svg"
          aria-hidden="true"
          data-prefix="fab"
          data-icon="apple"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 376 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          ></path>
        </svg>
        Mac
      </button>
    </div>
    <div class="sistem"></div>
    <h2>Minimum Requirements</h2>
    <div class="Op">
      <h3>Operating System</h3>
      <p>Windows® 7 / Windows® 8 / Windows® 10 (latest service packs)</p>
    </div>

    <div class="Video">
      <h3>Video</h3>
      <p>
        NVIDIA® GeForce® 8800GT or ATI Radeon™ HD 2900 XT or Intel® HD Graphics
        4000
      </p>
    </div>

    <div class="Storage">
      <h3>Storage</h3>
      <p>25 GB available HD space</p>
    </div>
    <div class="Resolution">
      <h3>Resolution</h3>
      <p>1024X768 minimum display resolution</p>
    </div>
    <div class="Processor">
      <h3>Processor</h3>
      <p>Intel® Core™ 2 Duo or AMD Athlon™ 64 X2</p>
    </div>
    <div class="Memory">
      <h3>Memory</h3>
      <p>2 GB RAM</p>
    </div>
    <div class="Internet">
      <h3>Internet</h3>
      <p>Broadband Internet connection</p>
    </div>
    <h4>Recommended Specifications</h4>

    <div class="Op2">
      <h3>Operating System</h3>
      <p>Windows® 10 64-bit</p>
    </div>
    <div class="Video2">
      <h3>Video</h3>
      <p>
        NVIDIA® GeForce® 8800GT or ATI Radeon™ HD 2900 XT or Intel® HD Graphics
        4000
      </p>
    </div>

    <div class="Storage2">
      <h3>Storage</h3>
      <p>25 GB available HD space</p>
    </div>
    <div class="Processor2">
      <h3>Processor</h3>
      <p>Intel® Core™ 2 Duo or AMD Athlon™ 64 X2</p>
    </div>
    <div class="Resolution2">
      <h3>Resolution</h3>
      <p>1024X768 minimum display resolution</p>
    </div>
    <div class="Processor2">
      <h3>Processor</h3>
      <p>Intel® Core™ 2 Duo or AMD Athlon™ 64 X2</p>
    </div>
    <div class="Memory2">
      <h3>Memory</h3>
      <p>2 GB RAM</p>
    </div>
    <div class="Internet2">
      <h3>Internet</h3>
      <p>Broadband Internet connection</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.con {
  margin: 0;
  display: grid;
  grid-template-columns: 10% 2fr 2fr 2fr 1.5fr 1.5fr 10%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: #002650;
  line-height: 1rem;
}
button {
  border: none;
  border-bottom: white 1px solid;
  color: white;
  outline: none;
  width: 100%;
  background-color: transparent;
}
p {
  color: white;
}
.simge {
  margin: 0;
  outline: none;
  grid-column: 3/4;
  grid-row: 2/3;
  display: flex;
}
.sistem {
  grid-column: 4/7;
  grid-row: 2/3;
  display: flex;
  justify-items: flex-start;
  border-bottom: white 1px solid;
}
button:hover {
  color: #00aeff;
}
button:focus {
  border: none;
  border-bottom: #00aeff 1px solid;
  outline: none;
}
svg {
  width: 25px;
  height: 25px;
}
h1 {
  grid-column: 2/3;
  grid-row: 2/3;
  font-size: 2rem;
  color: #f8f9fa !important;
}
h2 {
  justify-self: start;
  grid-row: 3/4;
  grid-column: 3/4;
  color: white;
  font-size: 1.2rem;
}
h4 {
  justify-self: start;
  grid-row: 3/4;
  grid-column: 5/7;
  color: white;
  font-size: 1.2rem;
}
.Op {
  margin: 0;
  grid-row: 4;
  grid-column: 3/4;
  text-align: left;
}
.Op2 {
  margin: 0;
  grid-row: 4;
  grid-column: 5/6;
  text-align: left;
}
.Video {
  margin: 0;
  grid-row: 5;
  grid-column: 3/4;
  text-align: left;
}
.Video2 {
  margin: 0;
  grid-row: 5;
  grid-column: 5/6;
  text-align: left;
}

.Storage {
  margin: 0;
  grid-row: 6;
  grid-column: 3/4;
  text-align: left;
}
.Storage2 {
  margin: 0;
  grid-row: 6;
  grid-column: 5/6;
  text-align: left;
}
.Resolution {
  margin: 0;
  grid-row: 7;
  grid-column: 3/4;
  text-align: left;
}
.Resolution2 {
  margin: 0;
  grid-row: 7;
  grid-column: 5/6;
  text-align: left;
}
.Processor {
  margin: 0;
  grid-row: 4;
  grid-column: 4/5;
  text-align: left;
}
.Processor2 {
  margin: 0;
  grid-row: 4;
  grid-column: 6/7;
  text-align: left;
}
.Memory {
  margin: 0;
  grid-row: 5;
  grid-column: 4/5;
  text-align: left;
}
.Memory2 {
  margin: 0;
  grid-row: 5;
  grid-column: 6/7;
  text-align: left;
}
.Internet {
  margin: 0;
  grid-row: 6;
  grid-column: 4/5;
  text-align: left;
}
.Internet2 {
  margin: 0;
  grid-row: 6;
  grid-column: 6/7;
  text-align: left;
}
h3 {
  color: rgba(255, 255, 255, 0.7);
}
</style>
