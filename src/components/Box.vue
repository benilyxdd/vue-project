<template>
  <div class="box">
    <p class="title">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style scoped>
@media (max-width: 600px) {
  .box {
    height: 25vh;
    width: 35vw;
  }
}

@media (max-width: 2000px) and (min-width: 600px) {
  .box {
    height: 25vh;
    width: 30vw;
  }
}

.box {
  border-radius: 15px;
  border-color: grey;
  border-width: 2px;
  border-style: solid;

  display: flex;
  flex-direction: column;
  padding: 3%;
  margin: 1%;
}

.title {
  font-weight: bold;
}

.description {
  align-self: flex-end;
  text-align: right;
  font-size: xx-large;
}
</style>
