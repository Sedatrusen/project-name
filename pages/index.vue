<template>
  <div class="arka">
    <Corrosuel />
    <Kucukorta />
    <div class="paddig">
      <h1>Recommended</h1>
      <Kutular />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('products/addproducts')
  },
  head() {
    return {
      title: 'Blizzard Shop',
    }
  },
}
</script>
<style scoped>
.arka {
  display: block;
  background-color: #002650;
}
.paddig {
  padding-left: 6rem;
}
h1 {
  text-align: start;
  margin: auto;
  margin-top: 2rem;
  margin-left: 3rem;
  line-height: 1.2;
  font-weight: 300px;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  color: #fff;
}
</style>
