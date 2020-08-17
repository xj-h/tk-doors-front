<template>
  <div class="" />
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 2, 6, 6, 8, 9, 3],
      str: 'asdfssaaasasasasaa',
      dad: {}
    }
  },
  created() {
    this.list()
    this.pap()
  },
  methods: {
    // 统计字符串中出现次数最多的一个字符
    pap() {
      for (let index = 0; index < this.str.length; index++) {
        const e = this.str[index]
        if (this.dad[e]) {
          this.dad[e]++
        } else {
          this.dad[e] = 1
        }
      }
      //   this.arr.forEach(item => {
      //     if (this.dad[item]) {
      //       this.dad[item]++
      //     } else {
      //       this.dad[item] = 1
      //     }
      //   })
      console.log(this.dad)
    },
    list() {
      const p = '2'
      const a = '3'
      const sum2 = p + a
      // eslint-disable-next-line no-eval
      const sum = eval('' + p + ' + ' + a + '')
      console.log(sum)
      console.log(sum2)
    }
  }
}
</script>
<style scoped>
.center{
    width: 200px;
    height: 200px;
    margin: auto;
    position: absolute;
    background: red;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
