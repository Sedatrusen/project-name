<template>
  <div class="kopru">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Great for New Players</b-nav-item>
          <b-nav-item href="#">Games</b-nav-item>
          <b-nav-item href="#">Subscriptions</b-nav-item>
          <b-nav-item href="#">Mounts</b-nav-item
          ><b-nav-item href="#">Pets</b-nav-item>
          <b-nav-item href="#">Toys</b-nav-item>
          <b-nav-item href="#">Transmogs</b-nav-item>
          <b-nav-item href="#">Bundles</b-nav-item>
          <b-nav-item href="#">Game Services</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto secme">
          <b-nav-item href="#" disabled>Group by</b-nav-item>
          <b-form-select v-model="selected" :options="options1"></b-form-select>
          <b-nav-item href="#" disabled>Sort by</b-nav-item>
          <b-form-select v-model="selected" :options="options2"></b-form-select>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options1: [
        { value: null, text: ' Categories ' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option', disabled: true },
        {
          label: 'Grouped options',
          options: [
            { value: { C: '3PO' }, text: 'Option with object value' },
            { value: { R: '2D2' }, text: 'Another option with object value' },
          ],
        },
      ],
      options2: [
        { value: null, text: ' Featured ' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option', disabled: true },
        {
          label: 'Grouped options',
          options: [
            { value: { C: '3PO' }, text: 'Option with object value' },
            { value: { R: '2D2' }, text: 'Another option with object value' },
          ],
        },
      ],
    }
  },
}
</script>
<style>
.kopru {
  background-color: lightblue;
}
.secme select {
  width: 10rem;
  background-color: #001732;
  color: white;
  border: none;
}
</style>
