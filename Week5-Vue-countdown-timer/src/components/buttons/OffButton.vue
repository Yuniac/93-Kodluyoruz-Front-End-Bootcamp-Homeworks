<template>
    <button @click="$emit('counter-stop')">Stop</button>
</template>

<script>
export default {
    name: "OffButton",
    emits: ["counter-stop"]
}
</script>


<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";

    button {
        margin: 2rem 0;
        font-weight: 700;
        background-color: $main-purple;
        cursor: pointer;
        padding: 1rem 2rem;
        border-radius: 0.2rem;
    }
</style>