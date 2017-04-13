<template>
<el-form :inline="true" :model="form" class="form-chat">
  <el-form-item>
    <el-input v-model="form.nama" placeholder="Nama anda"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="form.opinion" placeholder="Pendapat anda"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Kirim</el-button>
  </el-form-item>

    <el-rate
      v-model="rating"
      :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
      show-text>
    </el-rate>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          nama: '',
          opinion: ''
        },
        rating : null
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
