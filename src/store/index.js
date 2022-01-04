import { createStore } from "vuex";
// import cites from '../constants/city.list.json';

export default createStore({
  state: {
    // city & country format
    // {
    //   name: string;
    //   geoname_id: number;
    // }
    city: { name: "Loading", geoname_id: "Loading" },
    country: { name: "Loading", geoname_id: "Loading" },
    ip: "Loading",
    weatherInfo: null,
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    },
    setCountry(state, country) {
      state.country = country;
    },
    setIp(state, ip) {
      state.ip = ip;
    },
    setWeatherInfo(state, info) {
      state.weatherInfo = info;
    },
  },
  actions: {
    getUserLocation({ commit }) {
      // interface Response {
      // 	ip_address: string;
      // 	city: string;
      // 	city_geoname_id: number;
      // 	country: string;
      // 	country_geoname_id: number;
      // }

      (async () => {
        const api = "c0cf485e4883424281a0037e9c9a5465";
        const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${api}`;
        const response = await fetch(url);
        const js = await response.json();
        commit("setIp", js.ip_address);
        commit("setCity", {
          name: js.city,
          geoname_id: js.city_geoname_id,
        });
        commit("setCountry", {
          name: js.country,
          geoname_id: js.country_geoname_id,
        });
      })();
    },

    getWeatherInfo({ commit, state }) {
      // interface Response {
      //   weather: [
      //     {
      //       main: string, // weather name;
      //       description: string, // weather description
      //     }
      //   ];
      //   main: {
      //     temp: number, // in celsius
      //     feels_like: number,
      //     temp_min: number,
      //     temp_max: number,
      //     pressure: number,
      //     humidity: number,
      //   };
      //   wind: {
      //     speed: number,
      //     deg: number,
      //     gust: number,
      //   };
      // }

      (async () => {
        const api = "2bf3eaf54118e29759b2aaceb7bfe147";
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${state.city.geoname_id}&appid=${api}&units=metric`;
        const response = await fetch(url);
        const js = await response.json();
        console.log(js);
        commit("setWeatherInfo", js);
      })();
    },
  },
  modules: {},
  getters: {},
});
