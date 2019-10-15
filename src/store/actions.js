import axios from "axios"

// eslint-disable-next-line prefer-destructuring
const API_URL = process.env.API_URL

// eslint-disable-next-line prefer-destructuring
const API_KEY = process.env.API_KEY

export default {
  GET_GENRES({ commit }) {
    axios.get(`${API_URL}genre/movie/list?api_key=${API_KEY}`).then(res => {
      if (res.status === 200) {
        commit("SET_GENRES", res.data)
      }
    })
  },
  GET_MOVIES({ commit }) {
    axios.get(`${API_URL}movie/popular?api_key=${API_KEY}`).then(res => {
      if (res.status === 200) {
        commit("SET_MOVIES", res.data)
      }
    })
  },
}
