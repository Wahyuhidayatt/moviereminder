<template>
<div class="theater">
  <el-popover ref="popover4" placement="right" width="250" trigger="click">
    <el-row :gutter='5'>
      <el-col :md="8" v-for='jam in theaterinfo.jam' class="givmargin">
          <el-button type="primary" @click='sendtelegram(jam)'>{{jam}}</el-button>
      </el-col>
    </el-row>

  </el-popover>

  <el-button v-popover:popover4>{{theaterinfo.name}}</el-button>

</div>
</template>

<script>
export default {
  name: 'theater',
  data() {
    return {
      theaterinfo: {
        name: 'gandaria',
        jam: [
          '12.30',
          '12.45',
          '14.90',
          '12.30',
          '12.45',
          '14.90'
        ]
      }
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
