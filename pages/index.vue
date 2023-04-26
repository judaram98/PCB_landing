<template>
  <NuxtLayout :name="layout">
    <div>
      <div
        v-if="modal"
        class="fixed top-0 left-0 w-full h-screen z-20 backdrop-blur-sm"
        @click="modal = false"
      ></div>
      <div
        v-if="modal"
        class="fixed flex items-center justify-center w-full h-screen top-0 left-0 z-30 shadow-inner"
        @click="modal = false"
      >
        <div
          class="bg-white w-3/5 h-3/6 relative rounded-xl drop-shadow-4xl flex"
        >
          <div
            class="absolute text-center w-full bg-gradient-to-b from-black rounded-t-xl"
          >
            <p class="mt-5 text-white lg:text-5xl md:text-4xl text-3xl">
              Welcome, <br />What do you want to do?
            </p>
          </div>
          <div
            href="/catalog"
            class="w-3/6 flex cursor-pointer justify-center items-center rounded-l-xl bg-popup-left bg-no-repeat bg-cover"
          >
            <a
              href="/catalog"
              class="lg:text-7xl md:text-6xl text-5xl hover:text-black text-white drop-shadow-4xl hover:drop-shadow-yellow"
              >BUY</a
            >
          </div>
          <div
            href="#sell"
            class="w-3/6 cursor-pointer flex justify-center items-center rounded-r-xl bg-popup-right bg-no-repeat bg-cover"
          >
            <a
              href="#sell"
              class="lg:text-7xl md:text-6xl text-5xl hover:text-black text-white drop-shadow-4xl hover:drop-shadow-yellow"
              >SELL</a
            >
          </div>
        </div>
      </div>
      <hero />
      <webuy />
      <brands />
      <info />
      <about />
    </div>
  </NuxtLayout>
</template>

<script setup>
const layout = "landing";
import hero from "../components/hero.vue";
import webuy from "../components/webuy.vue";
import brands from "../components/brands.vue";
import info from "../components/info.vue";
import about from "../components/about.vue";
</script>
<script>
export default {
  data() {
    return {
      modal: false,
    };
  },
  created() {
    this.modal = true;
  },
  methods: {},
  components: {
    hero,
    webuy,
    brands,
    info,
    about,
  },
};
</script>

<style scoped></style>
