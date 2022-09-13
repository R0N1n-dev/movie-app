<template>
  <i-container>
    <i-button
    v-if="movies.length <= 0"
      @click="getMovies"
      size="sm"
      variant="danger"
      class="_font-weight-bold _margin-y-1"
      >Get Movies</i-button
    >
    <div v-if="movies">
      <i-row>
        <i-column
          v-for="movie in movies"
          :key="movie.id"
          sm="6"
          md="3"
          class="_margin-y-1"
        >
          <i-card>
            <img
              slot="image"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt=""
              class="image -responsive"
            />
            <p>{{ movie.title }}</p>
            <NuxtLink class="_text-decoration-none"
              :to="{ name: 'movies-movieid', params: { id: movie.id } }"
            >
              <i-button class="_background-envato" 
                >Info</i-button
              ></NuxtLink
            >
          </i-card>
        </i-column>
      </i-row>
    </div>
  </i-container>
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
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_SECRET}&language=en-US&page`
      );
      const result = await data;
      result.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
    },
  },
};
</script>



<style lang="css" scoped>
div {
  text-align: center;
}

.number-input {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
