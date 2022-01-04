<template>
  <div id="nav"></div>
  <router-view />
</template>

<script>
import { watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    store.dispatch("getUserLocation");

    return {
      ip: watch(
        () => store.state.ip,
        () => store.dispatch("getWeatherInfo")
      ),
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
