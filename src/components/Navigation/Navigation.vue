<template>
    <header>
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <router-link class="brand-logo" :to="{name : 'home'}">Acceuil</router-link>
            </div>
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><router-link :to="{name: 'popularArtists'}">Artiste populaires</router-link></li>
                    <li class="tab"><router-link :to="{name: 'popularAlbum'}">Albums populaire</router-link></li>
                    <li class="tab"><router-link :to="{name: 'searchArtist'}">Rechercher des artistes</router-link></li>
                    <li class="tab"><router-link :to="{name: 'searchAlbum'}">Rechercher des albums</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
