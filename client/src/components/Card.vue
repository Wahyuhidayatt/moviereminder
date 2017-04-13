<template>
<div class="card">
 <youtube></youtube>

</div>
</template>

<script>
import Youtube from './Youtube'
export default {
  name: 'Card',
  components:{
    Youtube
  }
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
</style>
