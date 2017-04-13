
<template lang="html">


<header-navigation></header-navigation>

</template>

<script>
import HeaderNavigation from './HeaderNav'

export default {
  components : {
    HeaderNavigation
  },
  method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    }
}
</script>

<style lang="css">

</style>
