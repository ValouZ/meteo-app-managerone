import { createStore } from "vuex";

export default createStore({
  state: {
    // weather: {},
    location: {},
    currentWeather: {},
  },
  mutations: {
    // setWeather(state, data) {
    //   state.weather = data;
    // },
    setLocation(state, data) {
      state.location = data;
    },
    setCurrentWeather(state, data) {
      state.currentWeather = data;
    },
  },
  actions: {
    setWeather({ commit, state }, city) {
      fetch(
        "http://api.weatherapi.com/v1/current.json?key=50a492d81e884b81844173743211906&q=" +
          city +
          "&aqi=no"
      )
        .then((response) => response.json())
        .then(function(data) {
          commit("setLocation", data.location);
          commit("setCurrentWeather", data.current);
        });
    },
  },
  modules: {},
  getters: {
    // getWeather(state) {
    //   return state.weather;
    // },
    getLocation(state) {
      return state.location;
    },
    getCurrentWeather(state) {
      return state.currentWeather;
    },
  },
});
