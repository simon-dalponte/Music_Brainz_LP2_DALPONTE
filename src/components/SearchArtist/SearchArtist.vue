<template>
    <div class="SearchArtist">
       <h4>Rechercher des artistes: </h4>
        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <input id="first_name" type="text" class="validate" v-model="name">
                    <label for="first_name">Nom de l'artiste</label>
                </div>
                <div class="center">
                    <button @click="getData" class="waves-effect waves-light btn-large">Lancer la recherche</button>
                </div>
            </div>
        </div>
        <ArtistContent v-if="this.$store.state.artistStore.listArtiste && loading === false" :information="this.$store.state.artistStore.listArtiste"></ArtistContent>
        <Spinner class="center" v-if="loading === true"></Spinner>
        <div class="container">
            <div v-if="this.$store.state.artistStore.listArtiste.length === 0 && loading === false">
                <p class="flow-text">Désoler nous n'avons pas pu charger votre requête veuillez
                    regarder si vous n'avez pas fait de faute dans la saisie </p>
            </div>
        </div>


    </div>

</template>

<script>
    import Spinner from "@/components/Spinner/Spinner";
    import ArtistContent from "@/components/ArtistContent/ArtistContent";
    import Axios from "axios";
    export default {
        data(){
            return {
               name: "",
                err: false,
                loading: null,
                data: []
            }
        },
        components: {
            ArtistContent,
            Spinner
        },
        props: {
        },
        methods: {
            getData(){
                this.loading = true;
                Axios.get('http://musicbrainz.org/ws/2/artist?query=name:' + this.name + '&fmt=json')
                    .then((res) => {
                        this.$store.commit('artistStore/setListArtiste', res.data.artists);
                        this.check(this.$store.state.artistStore.listArtiste)
                    })
                    .catch((err) => {
                        this.$store.artistStore.state.err = err;
                        this.loading =false
                    })
                    .finally(() => {
                        setTimeout(() => {this.loading = false},3000)
                    })
            },
            check(data){
                let comp = 0;
                data.forEach((artist)=>{
                    if (artist.name === "Name" || artist.name === "N.A.M.E"){
                        comp++;
                    }
                });
                if (comp === data.length){
                    this.$store.commit('artistStore/setListArtiste', []);
                }
            }
        }
    };
</script>
