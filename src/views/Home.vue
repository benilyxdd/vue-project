<template>
  <div class="home">
    <h2>Your IP: {{ ip }}</h2>
    <h2>Your Country: {{ country.name }}</h2>
    <h2>Your City: {{ city.name }}</h2>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      ip: computed(() => store.state.ip),
      country: computed(() => store.state.country),
      city: computed(() => store.state.city),
    };
  },
};
</script>
