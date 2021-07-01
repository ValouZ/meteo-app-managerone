import { createStore } from "vuex";

export default createStore({
  state: {
    location: {},
    currentWeather: {},
    forecast: {},
    favCities: ["Montesson", "New york", "Tokyo"],
    bgColor: "",
  },
  mutations: {
    setLocation(state, data) {
      state.location = data;
    },
    setCurrentWeather(state, data) {
      state.currentWeather = data;
    },
    setForecast(state, data) {
      state.forecast = data;
    },
    addFavCity(state, city) {
      state.favCities.push(city);
    },
    removeFavCity(state, index) {
      state.favCities.splice(index, 1);
    },
    drainFavCities(state) {
      state.favCities = [];
    },
    setBgColor(state, color) {
      state.bgColor = color;
    },
  },
  actions: {
    async setWeather({ commit, state }, city, day = 0) {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=50a492d81e884b81844173743211906&q=" +
          city +
          "&aqi=no"
      )
        .then((response) => response.json())
        .then(function(data) {
          commit("setLocation", data.location);
          commit("setCurrentWeather", data.current);
        });
      this.dispatch("setForecast", city, day);
    },
    async setForecast({ commit, state }, city, day = 0) {
      let url =
        "https://api.weatherapi.com/v1/forecast.json?key=50a492d81e884b81844173743211906&q=" +
        city +
        "&aqi=no";
      // Si on cherche un jour spécifique
      if (day >= 1 && day <= 10) {
        fetch(url + "&days=" + day)
          .then((response) => response.json())
          .then(function(data) {
            // console.log('Forecast fetched - day: ' + day)
            commit("setForecast", data);
          });
      } else {
        // Si on veut récupérer les 10 jours à venir
        for (day = 1; day < 11; day++) {
          await fetch(url + "&days=" + day)
            .then((response) => response.json())
            .then(function(data) {
              // console.log('Forecast fetched - day: ' + day)
              // console.log(data)
              commit("setForecast", data);
            });
        }
      }
    },
    addFavCity({ commit, state }, city) {
      commit("addFavCity", city);
    },
    removeFavCity({ commit, state }, index) {
      commit("removeFavCity", index);
    },
    drainFavCities({ commit, state }) {
      commit("drainFavCities");
    },
    setColor({ commit, state }) {
      let conditionText = this.state.currentWeather.condition.text.toLowerCase();
      // let conditionText = 'zfuqzfzqsunnyzqd'
      console.log("condition.setColor() -> " + conditionText);

      if (conditionText.includes("sunny")) {
        commit("setBgColor", "sunny");
      } else if (conditionText.includes("clear")) {
        commit("setBgColor", "dark clear");
      } else if (
        conditionText.includes("cloud") ||
        conditionText.includes("overcast")
      ) {
        commit("setBgColor", "cloudy");
      } else if (
        conditionText.includes("fog") ||
        conditionText.includes("mist")
      ) {
        commit("setBgColor", "fog");
      } else if (
        conditionText.includes("ice") ||
        conditionText.includes("snow") ||
        conditionText.includes("sleet") ||
        conditionText.includes("blizzard")
      ) {
        commit("setBgColor", "snow");
      } else if (
        conditionText.includes("rain") ||
        conditionText.includes("drizzle")
      ) {
        commit("setBgColor", "rain");
      } else if (conditionText.includes("thunder")) {
        commit("setBgColor", "thunder");
      }
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
    getForecast(state) {
      return state.forecast;
    },
    getFavCities(state) {
      return state.favCities;
    },
    getBgColor(state) {
      return state.bgColor;
    },
  },
});
