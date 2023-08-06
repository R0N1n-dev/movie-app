<template>
    <div>
        <vs-list class="list">
            <vs-list-header icon-pack="bx" icon="bx-movie-play" title="Now playing in a cinema near you"
                color="danger"></vs-list-header>
            <router-link v-for="movie in movies  " :key="movie.id" :to="{ name: 'singleMovie', params: { id: movie.id } }">
                <vs-list-item :title="movie.title" class="hover:bg-gray-300 rounded-md">
                    <template slot="avatar">
                        <vs-avatar :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
                    </template>
                </vs-list-item>
            </router-link>
        </vs-list>
    </div>
</template>


<script>
export default {
    props: {
        movies: Array
    }
}
</script>

<style scoped>
@media screen and (min-width:1024px) {
    .list {
        width: 70vw;
    }
}
</style>