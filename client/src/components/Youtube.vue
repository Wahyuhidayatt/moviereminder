<template lang="html">
  <div id="#ytb">
  <section>
    <h2>Trailer Film</h2>
    <youtube :video-id="videoId" @ready="ready" @playing="playing" player-width="510" player-height="300"></youtube>
  </section>
  <!-- <section>
    <h2>add options</h2>
    <youtube :video-id="videoId" player-width="1280" player-height="750"></youtube>
  </section> -->
</div>
</template>

<script>
export default {
  name : 'ytb',
  props:['youtubedata'],
  data () {
    return {
      cityid : '',
      videoId : this.youtubedata
    }
  },
  methods: {
    method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    },
    ready (player) {
      this.player = player
    },
    playing (player) {
      // The player is playing a video.
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    }
  }
}
</script>

<style lang="css">
</style>
