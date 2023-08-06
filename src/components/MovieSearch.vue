<template>
    <div>
        <vs-row vs-w="12" vs-type="flex" vs-justify="center">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center">
                <MovieList :movies="movies" />
            </vs-col>
            <!-- <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="4" vs-xs="12">
                vs-lg="8" vs-sm="4" vs-xs="12"
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="12">
                vs-lg="2" vs-sm="4" vs-xs="12"
            </vs-col>-->
        </vs-row>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data: () => ({
        movies: [],
        page: "",
    }),
    methods: {
        async getMovies() {
            const data = axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page`
            );
            const result = await data;
            result.data.results.forEach((movie) => {
                this.movies.push(movie);
            });
        },
    },
    mounted() {
        this.getMovies()
    }
};
</script>