<template>
    <div class="SearchAlbum">
        <h4>Rechercher des album: </h4>
        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <input id="first_name" type="text" class="validate" v-model="name">
                    <label for="first_name">Nom de l'album</label>
                </div>
                <div class="center">
                    <button @click="getAlbum" class="waves-effect waves-light btn-large">Lancer la recherche</button>
                </div>
            </div>
        </div>

        <div class="container">
            <AlbumContent v-if="data && loading === false" :information="data" ></AlbumContent>
            <Spinner class="center" v-if="loading === true"></Spinner>
            <div v-if="data === undefined && loading === false">
                <p class="flow-text">Désoler nous n'avons pas pu charger votre requête veuillez
                    regarder si vous n'avez pas fait de faute dans la saisie </p>
            </div>
        </div>

    </div>

</template>

<script>
    import Axios from "axios";
    import AlbumContent from "@/components/AlbumContent/AlbumContent";
    import Spinner from "@/components/Spinner/Spinner";
    export default {
        props: {
        },

        data(){
            return {
                loading: null,
                trackList: [],
                name:null,
                data: null,
            }
        },

        components: {
            AlbumContent,
            Spinner
        },

        methods: {
            getAlbum(){
                this.loading = true;
                Axios.get('http://musicbrainz.org/ws/2/release/?query=release:' + this.name + '&fmt=json')
                    .then((res) => {
                        this.$store.commit('albumStore/setListAlbum', res.data.releases[0]);
                        this.data = this.$store.state.albumStore.listAlbum;
                    })
                    .catch((err) => {
                        this.$store.albumStore.state.err = err;
                        this.loading =false
                    })
                    .finally(() => {
                        setTimeout(() => {this.loading = false},3000)
                    })
            },
        }
    };
</script>
