<template>
    <button @click="$emit('counter-start')">Start</button>
</template>

<script>
export default {
    name: "StartButton",
    emits: ["counter-start"]
}
</script>


<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";

    button {
        margin: 2rem 0;
        font-weight: 700;
        background-color: $main-purple;
        padding: 1rem 2rem;
        border-radius: 0.2rem;
    }
</style>