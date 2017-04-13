<template>
<el-card class="Card">
  <div class="box-card">
   <youtube></youtube>
   <Movieinfo></Movieinfo>
  </div>
</el-card>
</template>

<script>
import Youtube from './Youtube'
import Movieinfo from './movieinfo'
export default {
  name: 'Card',
  components:{
    Youtube,
    Movieinfo
  },
  data() {
    return {

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
    width: 505px;
}
/*.card {
    position: absolute;
    top : 0px;
    left : 0px;
    border-radius: 2px;
    min-width: 0;
  }*/
</style>
