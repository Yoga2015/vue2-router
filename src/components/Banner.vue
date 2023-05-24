<template>
  <div>
    <h2>Vue2.0 的 Vue Router Demo</h2>
    <button @click="backShow">back</button>
    <button @click="forwardShow">forward</button>
    <button @click="goShow">go</button>
  </div>
</template>

<script>
export default {
  name: 'myBanner',
  mounted() {
    console.log(this.$route);
  },
  methods: {
    backShow() {
      // console.log(this.$router);
      this.$router.back()
    },
    forwardShow() {
      this.$router.forward()
    },
    goShow() {
      // this.$router.go(-1)  // 表示后退一层
      // this.$router.go(1)  // 表示前进一层
      this.$router.go(-2)  // 表示后退二层 ；以此类推
    }
  }
}
</script>
