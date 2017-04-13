
<template lang="html">

<header-try></header-try>
<!-- <youtube :video-id="videoId"></youtube> -->

</template>

<script>
import HeaderTry from './HeaderTry'

export default {
  components : {
    HeaderTry,
  },
  method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    }
}
</script>

<style lang="css">

</style>
