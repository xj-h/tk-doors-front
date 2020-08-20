import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters
const modules = {

}
// vuex的基本数据，用来存储变量
const state = {

}
// 从基本数据(state)派生的数据，相当于state的计算属性
const getters = {

}
// 提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mutation都有一个字符串的事件类型(type)和一个回调函数 (handler)。
const mutations = {

}
// 更新数据的方法，异步
const actions = {

}
export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions
})
