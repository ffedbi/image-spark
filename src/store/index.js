import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getSortArr } from '../assets/js/utils';

Vue.use(Vuex)

const myHeaders = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json"
});

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

export default new Vuex.Store({
  state: {
    userList: [],
    loading: false,
  },
  getters: {
    userList: state => state.userList,
    loading: state => state.loading
  },
  mutations: {
    FULL_USER_LIST(state, data) {
      state.userList = data;
    },
    GHANGE_LOADING_STATE(state, payload) {
      payload ? state.loading = true : state.loading = false;
    }
  },
  actions: {
    async getUsersList({commit, state}) {
      try {
        commit('GHANGE_LOADING_STATE', true)
        const {data} = await axios.get(`${baseUrl}/users`, {
          headers: myHeaders
        })
        commit('GHANGE_LOADING_STATE', false)
        commit('FULL_USER_LIST', getSortArr(data.users, 'rating', true))
      } catch (e) {
        throw new Error(e)
      }
    }
  }
})
