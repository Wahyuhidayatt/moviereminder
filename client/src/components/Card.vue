<template>
<el-card class="Card">
  <div class="box-card">
   <youtube v-bind:youtubedata="datacard.youTubeId"></youtube>
   <Movieinfo v-bind:moviedata="datacard"></Movieinfo>
  </div>
</el-card>
<!-- <div class="card">
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <youtube class="youtubeframe"></youtube>
    <movieinfo class='movieinfostyle'></movieinfo>
 </el-card>

</div> -->
</template>

<script>
import Youtube from './Youtube'
import Movieinfo from './movieinfo'
export default {
  name: 'card',
  props:['carddata'],
  components:{
    Youtube,
    Movieinfo
  },
  data() {
    return {
     datacard:this.carddata
    }
  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.el-col {
  border-radius: 4px;
}
.givmargin {
  margin-top: 5px;
  margin-bottom: 5px;
}
.Card[data-v-243eb728] {
    width: 550px;
    margin-left: 28px;
}
.box-card[data-v-2db64e16] {
    width: 508px;
}
/*.youtubeframe{
 position: relative;
 width: 550px;
  top: 10px;
  left: 10px;
}
.box-card{
  width: 600px;
  padding: 0px;
}
.movieinfostyle{
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 25px;
}*/
</style>
