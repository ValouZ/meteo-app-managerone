import { createStore } from 'vuex'

export default createStore({
  state: {
    location: {},
    currentWeather: {},
    forecast: {},
    favCities: ['Montesson', 'New york', 'Tokyo'],
  },
  mutations: {
    setLocation(state, data) {
      state.location = data
    },
    setCurrentWeather(state, data) {
      state.currentWeather = data
    },
    setForecast(state, data) {
      state.forecast = data
    },
    addFavCity(state, city) {
      state.favCities.push(city)
    },
    removeFavCity(state, index) {
      state.favCities.splice(index, 1)
    },
    drainFavCities(state) {
      state.favCities = []
    },
  },
  actions: {
    setWeather({ commit, state }, city, day = 0) {
      fetch(
        'https://api.weatherapi.com/v1/current.json?key=50a492d81e884b81844173743211906&q=' +
          city +
          '&aqi=no',
      )
        .then((response) => response.json())
        .then(function (data) {
          commit('setLocation', data.location)
          commit('setCurrentWeather', data.current)
        })
      this.dispatch('setForecast', city, day)
    },
    async setForecast({ commit, state }, city, day = 0) {
      let url =
        'https://api.weatherapi.com/v1/forecast.json?key=50a492d81e884b81844173743211906&q=' +
        city +
        '&aqi=no'
      // Si on cherche un jour spécifique
      if (day >= 1 && day <= 10) {
        fetch(url + '&days=' + day)
          .then((response) => response.json())
          .then(function (data) {
            // console.log('Forecast fetched - day: ' + day)
            commit('setForecast', data)
          })
      } else {
        // Si on veut récupérer les 10 jours à venir
        for (day = 1; day < 11; day++) {
          await fetch(url + '&days=' + day)
            .then((response) => response.json())
            .then(function (data) {
              // console.log('Forecast fetched - day: ' + day)
              // console.log(data)
              commit('setForecast', data)
            })
        }
      }
    },
    addFavCity({ commit, state }, city) {
      commit('addFavCity', city)
    },
    removeFavCity({ commit, state }, index) {
      commit('removeFavCity', index)
    },
    drainFavCities({ commit, state }) {
      commit('drainFavCities')
    },
  },
  modules: {},
  getters: {
    // getWeather(state) {
    //   return state.weather;
    // },
    getLocation(state) {
      return state.location
    },
    getCurrentWeather(state) {
      return state.currentWeather
    },
    getForecast(state) {
      return state.forecast
    },
    getFavCities(state) {
      return state.favCities
    },
  },
})
