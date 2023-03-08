<template>
  <header class="w-full flex flex-col items-center px-20">
    <div class="w-full flex justify-between items-center h-28">
      <a href="#" class="h-full flex items-center">
        <img
          src="/images/LogoText.svg"
          alt="Power Circuit Breakers"
          class="h-4/6"
        />
      </a>
      <div class="flex border-2">
        <div class="flex">
          <img src="/images/Phone.svg" alt="" />
          <div>
            <p class="font-normal text-xl">Call us</p>
            <h1 class="font-bold text-3xl">+1 (000) 000 0000</h1>
          </div>
        </div>
        <div class="flex ml-5">
          <img src="/images/Mail.svg" alt="" />
          <div>
            <p class="font-normal text-xl">Call us</p>
            <h1 class="font-bold text-3xl">+1 (000) 000 0000</h1>
          </div>
        </div>
      </div>
    </div>

    <nav class="bg-blackGray w-fit">
      <div>
        <a
          class="text-white"
          v-for="({ text, route }, index) in links"
          :key="index"
          :href="route"
          >{{ text }}</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
const links = ref([
  { text: "Home", route: "#" },
  { text: "Catalog", route: "#" },
  { text: "Contact", route: "#" },
]);
</script>
