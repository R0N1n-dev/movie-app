<template>
  <i-nav>
    <i-nav-item to="/">Home</i-nav-item>
    <i-nav-item class="_margin-left-auto">
      <i-button @click="dark" circle><i-icon :icon="lightMode ? 'dark' : 'light'" /> </i-button>
    </i-nav-item>
  </i-nav>
</template>

<script>
export default {
  data() {
    return {
      mode: false,
    };
  },
  computed: {
    lightMode() {
      if (this.$inkline.config.variant === "light") {
        return (this.mode = true);
      } else {
        return (this.mode = false);
      }
    },
  },
  methods: {
    dark() {
      this.$inkline.config.variant =
        this.$inkline.config.variant === "light" ? "dark" : "light";
    },
  },
};
</script>

<style>
</style>