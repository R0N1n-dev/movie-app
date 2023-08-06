<template>
    <div class="mt-12">
        <vs-row vs-justify="center" vs-w="12">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="8" vs-xs="10">
                <vs-card class="cardx" actionable>
                    <div slot="header">
                        <h3 class="uppercase font-bold">
                            {{ movie.title }}
                        </h3>
                    </div>
                    <div slot="media">
                        <div v-if="!movie.poster_path" class="half-circle-spinner mx-auto">
                            <div class="circle circle-1"></div>
                            <div class="circle circle-2"></div>
                        </div>
                        <img v-else :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`">
                    </div>
                    <div>
                        <p v-if="movie.release_date" class="text-xl"><span class="">Released:</span> <span class=""> {{
                            new Date(movie.release_date).toLocaleString("en-us", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })
                        }}</span> </p>
                        <p class="text-lg">
                            <span>Duration:</span> <span>{{ movie.runtime }} minutes</span>
                        </p>
                        <p class="text-xl" v-if="movie.revenue">
                            <span class="">Revenue:</span>
                            {{
                                movie.revenue.toLocaleString("en-us", {
                                    style: "currency",
                                    currency: "USD",
                                })
                            }}
                        </p>
                        <p class="text-xl font-bold my-1">{{ movie.tagline }}</p>
                        <div class="movie-fact">
                            <span class="underline font-semibold text-lg">Plot:</span>
                            <p class="text-xl">{{ movie.overview }}</p>
                        </div>
                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-start">
                            <vs-button @click="$router.go(-1)" type="gradient" color="danger" icon-pack="bx"
                                icon="bx-arrow-back"></vs-button>
                        </vs-row>
                    </div>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'singleMovie',
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
    created() {
        this.getSingleMovie()
    }
}
</script>

<style scoped>
.half-circle-spinner,
.half-circle-spinner * {
    box-sizing: border-box;
}

.half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
}

.half-circle-spinner .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
    border-top-color: #ff1d5e;
    animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
    border-bottom-color: #ff1d5e;
    animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(360deg);
    }
}
</style>