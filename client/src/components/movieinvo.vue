<template>
<div class="movieinfo">

</div>
</template>

<script>
export default {
  name: 'movieinfo',
  data() {
    return {

    }
  },
  methods: {
     sendtelegram(jadwal){
       console.log(jadwal);
     }
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
