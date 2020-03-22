<template>
    <div class="ArtistContent row" >
        <div class="card col s4" v-for="(data, key) in information" :key="key">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://www.bigstockphoto.com/images/homepage/module-6.jpg">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{data.name}}<i class="material-icons right">{{data.type}}</i></span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{data.name}}<i class="material-icons right">close</i></span>
                <p>C'est un {{setGender(data.gender)}}</p>
                <p v-if="data.tags"> Fait partie de la cétagorie de musique : {{data.tags[0].name}}. C'est une célébritée {{data.country}} </p>
                <div v-if="data.aliases">
                    <p>Il a plusieurs alias tel que : </p>
                    <ul>
                        <li v-for="(alias, key) in data.aliases " :key="key">
                            - {{alias.name}}
                        </li>
                    </ul>
                </div>
                <div v-if="data['begin-area']">
                    Il on débuter leur carrière dans la ville de {{data['begin-area']['sort-name']}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['information'],
        methods: {
            setGender(gener){
                if (gener === 'male'){
                    return "homme"
                }else{
                    return "femme"
                }
            }
        },
        filters: {
        }
    };
</script>

<style scoped="scss">
    li{
        margin-left: 10%
    }
</style>
