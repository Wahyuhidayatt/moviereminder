<template>
  <div>
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

    <el-dialog title="Get info now!" v-model="dialogFormVisible">
      <el-steps :space="300" :active="active" finish-status="success">
    <el-step title="What's Your Name">

    </el-step>
    <el-step title="Your Telegram Id">

    </el-step>

</el-steps>
<el-button style="margin-top: 12px;" @click="next">Next step</el-button>

    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
      }
    }
  }
</script>
