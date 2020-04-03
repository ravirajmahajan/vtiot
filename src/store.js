import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://ehmjaa.db.files.1drv.com/y4pKq37PrfoNlHgXlxNlAv3fGyQ3ynN6MfIK-Kb6TJnX2YjaFvEI_jFywxcRAaJFg6PT5-lW4JOl6HdYr3_I6rFdBt1PehpGsNnWP46bHoT_QDv5vjOe7Tn_4P81o-TbwwvGarujEZ1yzV6BRiXsQLc7TOQpxhIOd5xzTaiKFvPYrRzkv9MS7zCNaPnIPJvJdTcFczsBf5HERoWF1kx0McA-iiFF4cLTe2B1Dr-H8UWAM0/leaf.jpg?psid=1',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {

  },
})
