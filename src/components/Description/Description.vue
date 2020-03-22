<template>
    <div class="Description">
        <div class="container">
            <h4> Funnies Musics :</h4>
            <p class="flow-text">Funnies musics est une application qui permet de faire des recherches sur le thème de la musique selon plusieurs critères.</p>
            <p class="flow-text">Comme par exemple :</p>

            <ul>
                <li class="flow-text">- le nom de l'artiste (le resultat sera une liste de d'artiste correspondant à la requete)</li>
                <li class="flow-text">- le nom de l'album (le resultat sera une liste de d'album correspondant à la requete)  </li>
                <li class="flow-text">- le genre de musique (le resultat sera une liste de d'album et artiste les plus récent correspondant à la requete)</li>
            </ul>
            <p class="flow-text">Il vous suffira de naviguer dans les menus ci dessus pour faire des recherches en fonction du menu selectioné</p>
            <h4>Exemple :</h4>
            <p class="flow-text">Pour rechercher un album, vous devez vous rendre dans l'onglet "Rechercher des Albums",
                ensuite il faudra renseigner le nom de l'album dans le formulaire et le résultat sera affiché</p>
            <h4>Informations :</h4>
            <p class="flow-text">Les albums des artistes récent ne sont pas forcément renseigné dans cette application, préferer des recherches sur des anciens album comme par exemple ceux des princes du boogies : Earth Wind and Fire </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>

<style scoped="scss">
    li{
        margin-left: 12%;
    }
    h4{
        text-decoration: underline;
    }
</style>
