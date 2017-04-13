<template>
<div class="movieinfo">
  <el-card class="box-card" :body-style="{ padding: '5px' }" >
    <h4 class="judul">{{datamovie.movie}}</h4>
    <el-row :gutter='5'>
      <el-col :md="4">
         <img src="http://www.cinemaone.ro/wp-content/uploads/2017/03/fast-furious-8.jpg" class="image">
      </el-col>
      <el-col :md="6" :offset='0'>
            <p class='infomov'>gendre:{{datamovie.gendre}}</p>
            <p class='infomov'>duration:{{datamovie.duration}}</p>
      </el-col>
      <el-col :md="13" :offset='0'>
            <el-row>
              <el-col :md="8" v-for='i in 4'class='addmargin' >
                <theater></theater>
              </el-col :md="8" >
            </el-row>
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
import Theater from './theater'
export default {
  name: 'movieinfo',
  data() {
    return {
      datamovie:{
        movie:'',
        poster:'',
        genre:'',
        duration:'',
        jadwal:[]
      }
    }
  },
  components:{
    Theater
  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  font-size: 14px;
}
.judul{
  font-size: 30px;
  padding:0px;
  margin: 0px;
}
.image {
  max-height: 100px;

  display: block;
}
.item {
  padding: 18px;
}

.box-card {
  width: 540px;
}
.el-card__body {
  padding: 0px;
}
.infomov{
  margin-bottom: 2px;
}
.addmargin{
  margin-bottom: 6px;
}
</style>
