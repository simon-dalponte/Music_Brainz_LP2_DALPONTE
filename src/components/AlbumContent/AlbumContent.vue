<template>
    <div class="AlbumContent">
        <center>
            <div class="card size">
                <div class="card-image waves-effect waves-block waves-light">
                    <Spinner class="center" v-if="loading === true"></Spinner>
                    <img v-if="loading === false" class="activator" :src="this.$store.state.albumStore.img">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4 flow-text">{{information.title}}<i class="material-icons right flow-text">{{information.date}}</i></span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4 flow-text">{{information.title}}<i class="material-icons right flow-text">close</i></span>
                    <div>
                        <TrackList :trackList="this.$store.state.albumStore.tracks"></TrackList>
                    </div>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
    import Axios from "axios";
    import TrackList from "@/components/TrackList/TrackList";
    import Spinner from "@/components/Spinner/Spinner";
    export default {
        data(){
            return {
                loading: null
            }
        },
        props: {
            information: Object,
        },
        components: {
            TrackList,
            Spinner
        },

        created() {
            this.getTrackList(this.information.id);
            this.getImgSrc(this.information.id);
        },
        methods: {
            getTrackList(data){
                console.log(data);
                const header = {
                    'Access-Control-Allow-Origin': '*',
                };
                Axios.get('http://musicbrainz.org/ws/2/release/'+data+'?inc=recordings&fmt=json', header)
                    .then((res) => {
                        this.$store.commit('albumStore/setListTrack', res.data.media[0].tracks);
                    })
                    .catch((err) => {
                        console.log(err);
                        this.loading =false
                    })
                    .finally(() => {
                        setTimeout(() => {this.loading = false},3000)
                    })

            },
            getImgSrc(data){
                this.loading = true;
                Axios.get('http://coverartarchive.org/release/'+data+'?fmt=json')
                    .then((res) => {
                        this.$store.commit('albumStore/setImg', res.data.images[0].thumbnails.small);
                    })
                    .catch((err) => {
                        console.log(err);
                        this.$store.commit('albumStore/setImg', require('../../assets/module-6.jpg'));
                    })
                .finally(() => {
                    setTimeout(() => {this.loading = false},1000)

                })

            }
        }

    };
</script>
