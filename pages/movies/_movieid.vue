<template>
  <!-- Loading -->
  <div v-if="$fetchState.pending" class="_margin-x-auto">
    <i-loader variant="light" />
  </div>

  <!-- Movie Info -->
  <i-container v-else class="single-movie container">
    <div class="_margin-y-1 _display-flex">
      <NuxtLink :to="{ name: 'index' }" class="_text-decoration-none _margin-x-auto"> Back </NuxtLink>
    </div>
    <i-row center class="_margin-y-1">
      <i-column sm="10" md="6">
        <i-card>
          <img
            slot="image"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
            class="image -responsive"
          />
          <div class="movie-content">
            <h1>{{ movie.title }}</h1>
            <p class="movie-fact tagline">
              <span>Tagline:</span> "{{ movie.tagline }}"
            </p>
            <p class="movie-fact">
              <span>Released:</span>
              {{
                new Date(movie.release_date).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </p>
            <p class="movie-fact">
              <span>Duration:</span> {{ movie.runtime }} minutes
            </p>
            <p class="movie-fact">
              <span>Revenue:</span>
              {{
                movie.revenue.toLocaleString("en-us", {
                  style: "currency",
                  currency: "USD",
                })
              }}
            </p>

            <p class="movie-fact">
              <span>Overview:</span> {{ movie.overview }}
            </p>
          </div>
        </i-card>
      </i-column>
    </i-row>
  </i-container>
</template>

<script>
import axios from "axios";

export default {
  name: "singleMovie",

  async fetch() {
    await this.getSingleMovie();
  },

  // delay for fetching
  fetchDelay: 1000,

  head() {
    return {
      title: this.movie.title,
    };
  },

  data() {
    return {
      movie: "",
    };
  },
  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=722a0e7b242b54777a168101d87227fd&language=en-US`
      );
      const result = await data;
      this.movie = result.data;
    },
  },
};
</script>


<style scoped>
</style>