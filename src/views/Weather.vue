<template>
  <div class="weather">
    <p v-if="city.name && country.name">{{ city.name }}, {{ country.name }}</p>
    <div v-if="weatherInfo">
      <p>
        {{
          new Date(
            new Date().getTime() +
              new Date().getTimezoneOffset() * 60000 +
              weatherInfo.timezone * 1000
          ).toLocaleString()
        }}
      </p>
      <p v-if="!celsius">{{ weatherInfo.main.temp * 1.8 + 32 }}°F</p>
      <p v-if="celsius">{{ weatherInfo.main.temp }}°C</p>
      <p>{{ weatherInfo.weather[0].main }}</p>
      <Toggle v-model="celsius" on-label="°C" off-label="°F" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Toggle from "@vueform/toggle";

export default {
  components: {
    Toggle,
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

<style src="@vueform/toggle/themes/default.css"></style>
