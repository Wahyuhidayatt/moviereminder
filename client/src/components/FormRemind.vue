<template>
  <div>
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>
      <el-dialog title="Get info now!" v-model="dialogFormVisible">
        <el-steps :space="100" :active="active" finish-status="success">
        <el-step title="Nama Anda"></el-step>
        <el-step title="Telegram Id"></el-step>
    <el-step title="Step 3">

    </el-step>
    <el-form :inline="true" :model="form" class="form-chat">
      <el-form-item v-if="active == 0">
        <el-input v-model="form.name" placeholder="Nama anda"></el-input>
      </el-form-item>
      <el-form-item v-if="active == 1">
        <el-input v-model="form.telegram" placeholder="Pendapat anda"></el-input>
      </el-form-item>
      <el-form-item v-if="active == 2">
        <h5>Hai {{form.name}}</h5>
        <h6>Kami akan mengirimkan notifikasi ke email anda</h6>
      </el-form-item>
    </el-form>
      </el-steps>


  <el-button type="primary" style="margin-top: 12px;" @click="next" v-if="active < 3">Next step</el-button>
  <el-button type="primary" style="margin-top: 12px;" @click="kirimTelegram" v-if="active == 3">Ya, Saya Setuju</el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          telegram: ''
        },
        dialogFormVisible: false,
         active: 0
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      kirimTelegram(){
        this.active = 0
        this.dialogFormVisible = false

      }
    }
  }
</script>
