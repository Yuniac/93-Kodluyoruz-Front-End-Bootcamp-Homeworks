<template>
  <div class="home">
    <h2 class="page-header">Home</h2>
    <header class="home__header">
      <h3 class="home__title">
        Click on the numbers below and enter any two-digits number you like and hit enter or start to start the countdown!
      </h3>
    </header>
    <Counter/>
  </div>
</template>

<script>
// import { onMounted, onUnmounted } from "vue";
import Counter from "./../../components/Counter.vue"

export default {
  components: {
    Counter
  },
  setup() {
    // onMounted(() => console.log("Mount: ⛰ Home Component"));
    // onUnmounted(() => console.log("unMount: 👋🏻 Home Component "));

    return {};
  },
};
</script>

<style lang="scss">
.home {
  color: $white;

  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__header {
    flex-grow: 1;

    margin: 1rem 0 3rem;
    padding: 20px;

    min-height: 120px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: $blue;
    color: $white;
  }
}
</style>
