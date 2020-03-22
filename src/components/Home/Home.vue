<template>
    <div class="Home">
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
    export default {
        components: {
            Navigation,
        },
        props: {
        },
    };
</script>

<style scoped="scss">

</style>
