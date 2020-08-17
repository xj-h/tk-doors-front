<template>
  <div />
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  created() {
    this.list()
  },
  methods: {
    list() {
      const sum = null
      this.arr.forEach(item => {
        item += sum
      })
      console.log(sum)
    }
  }
}
</script>
