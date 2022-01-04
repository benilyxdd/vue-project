<template>
  <div class="weather">
    <div v-if="weatherInfo">
      <div class="basicInfo">
        <p>{{ city.name }}, {{ country.name }}</p>
        <p>
          {{
            new Date(
              new Date().getTime() +
                new Date().getTimezoneOffset() * 60000 +
                weatherInfo.timezone * 1000
            ).toLocaleString()
          }}
        </p>
        <p v-if="!celsius" class="degree">
          {{ weatherInfo.main.temp * 1.8 + 32 }}°F
        </p>
        <p v-if="celsius" class="degree">{{ weatherInfo.main.temp }}°C</p>
        <p>{{ weatherInfo.weather[0].main }}</p>
        <Toggle v-model="celsius" on-label="°C" off-label="°F" />
      </div>

      <div class="details-weather">
        <Box
          title="Apparent Temperatrue"
          v-bind:description="weatherInfo.main.feels_like + '°C'"
          v-if="celsius && weatherInfo.main.feels_like"
        />
        <Box
          title="Apparent Temperatrue"
          v-bind:description="weatherInfo.main.feels_like * 1.8 + 32 + '°F'"
          v-if="!celsius && weatherInfo.main.feels_like"
        />

        <Box
          title="Pressure"
          v-if="weatherInfo.main.pressure"
          v-bind:description="weatherInfo.main.pressure + 'hPa'"
        />

        <Box
          title="Wind Speed"
          v-if="weatherInfo.wind"
          v-bind:description="
            weatherInfo.wind.speed + 'm/s - ' + weatherInfo.wind.deg + 'deg'
          "
        />

        <Box
          title="Cloudiness"
          v-if="weatherInfo.clouds"
          v-bind:description="weatherInfo.clouds.all + '%'"
        />

        <Box
          title="Rain Last Hour"
          v-if="weatherInfo.rain"
          v-bind:description="weatherInfo.rain['1h'] + 'mm'"
        />

        <Box
          title="Snow Last Hour"
          v-if="weatherInfo.snow"
          v-bind:description="weatherInfo.snow['1h'] + 'mm'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Toggle from "@vueform/toggle";
import Box from "../components/Box.vue";

export default {
  components: {
    Toggle,
    Box,
  },
  setup() {
    const store = useStore();
    return {
      ip: computed(() => store.state.ip),
      country: computed(() => store.state.country),
      city: computed(() => store.state.city),
      weatherInfo: computed(() => store.state.weatherInfo),
    };
  },
  data() {
    return {
      celsius: true,
    };
  },
};
</script>

<style src="@vueform/toggle/themes/default.css">
</style>

<style scoped>
@media (max-width: 600px) {
  .basicInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .details-weather {
    padding-top: 5%;
    padding-bottom: 5%;
  }
}

@media (max-width: 2000px) {
  .basicInfo {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
  .details-weather {
    padding: 5%;
  }
}

.basicInfo > p {
  font-size: x-large;
  font-weight: 500;
}

.basicInfo > .degree {
  font-size: xxx-large;
  font-weight: bold;
}

.details-weather {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
