<template>
    <ul class="collection">
        <li class="collection-item avatar" v-for="(track, key) in trackList" :key="key">
            <div class="row">
                <div class="col valign-wrapper">
                    <img :src="url" alt="">
                </div>
                <div class="col valign-wrapper">
                    <p class="flow-text">{{track.title}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            trackList: Array
        },
        data(){
            return {
                url: require('../../assets/icons8-musicalement-48.png')
            }
        }
    };
</script>

<style scoped="css">

</style>
