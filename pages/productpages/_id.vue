<template>
  <div>
    <Productpage />
    <Requirements />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({ items: (state) => state.products.Products }),
    product() {
      return this.items.find((items) => items.id === this.id)
    },
  },
  head() {
    return {
      title: this.product.h1,
    }
  },
}
</script>
