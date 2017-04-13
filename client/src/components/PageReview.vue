<template>
  <div>
    <h1>Ini Page Film</h1>
    <p>{{ titleData }}</p>
  </div>
</template>

<script>

export default {
  props: ['title'],
  data() {
    return {
      titleData: this.title
    }
  },
  methods: {
      capitalizeLetter() {
        console.log(this.title);
        return this.titleData += 'halo'
      }
  },
  mounted() {
    this.capitalizeLetter()
  }
}
</script>

<style>

</style>
