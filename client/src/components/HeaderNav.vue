<template>
  <div class="">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-select v-model="value" placeholder="Select">
   <el-option
     v-for="data in dataBioskop"
     :label="data.kota"
     :value="data.id">
   </el-option>
 </el-select>
 <el-button @click="getData()">Search</el-button>
  </el-menu>
  <div class="container">
    <el-row :gutter="10">
      <el-col :md="12" v-for="data in movieData" >
        <card class='cardstyle' v-bind:carddata="data"></card>
      </el-col>

    </el-row>
  </div>

  </div>
</template>
<script>
import Card from './Card'
export default {
  components:{
    Card
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      movieData : '',
      dataBioskop : [ { id: '32', kota: 'Ambon' },
       { id: '6', kota: 'Balikpapan' },
       { id: '2', kota: 'Bandung' },
       { id: '31', kota: 'Banjarmasin' },
       { id: '1', kota: 'Batam' },
       { id: '4', kota: 'Bekasi' },
       { id: '34', kota: 'Bengkulu' },
       { id: '33', kota: 'Binjai' },
       { id: '3', kota: 'Bogor' },
       { id: '8', kota: 'Cirebon' },
       { id: '9', kota: 'Denpasar' },
       { id: '38', kota: 'Gorontalo' },
       { id: '10', kota: 'Jakarta' },
       { id: '21', kota: 'Jambi' },
       { id: '37', kota: 'Jayapura' },
       { id: '43', kota: 'Karawang' },
       { id: '22', kota: 'Lampung' },
       { id: '16', kota: 'Makassar' },
       { id: '18', kota: 'Malang' },
       { id: '19', kota: 'Manado' },
       { id: '41', kota: 'Mataram' },
       { id: '17', kota: 'Medan' },
       { id: '42', kota: 'Padang' },
       { id: '35', kota: 'Palangkaraya' },
       { id: '20', kota: 'Palembang' },
       { id: '39', kota: 'Palu' },
       { id: '30', kota: 'Pekanbaru' },
       { id: '24', kota: 'Pontianak' },
       { id: '13', kota: 'Samarinda' },
       { id: '14', kota: 'Semarang' },
       { id: '40', kota: 'Singkawang' },
       { id: '12', kota: 'Surabaya' },
       { id: '29', kota: 'Surakarta' },
       { id: '15', kota: 'Tangerang' },
       { id: '36', kota: 'Tasikmalaya' },
       { id: '23', kota: 'Yogyakarta' } ],
        value : ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getData(id){
      var self = this
      this.axios.post('http://localhost:3000/api/getscedule', {
        cityid: this.value

      })
      .then(function (response) {

        self.movieData = response.data
        console.log(self.movieData );
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
<style>
.container{
  margin-left: 50px;
  margin-right:100px;
  min-width: 1400px;
}
.cardstyle{
  margin: 20px;
}
.box-card[data-v-2db64e16] {
    width: 508px;
}
.el-col.el-col-24.el-col-md-12 {
    width: 42%;
}


</style>
