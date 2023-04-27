<template>
  <head>
    <title>Power Circuit Breakers</title>
  </head>
  <div id="landing" class="w-full flex flex-col items-center h-fit relative">
    <header class="w-full sticky top-0 z-10 flex flex-col items-center">
      <div
        class="z-10 w-full flex justify-between items-center md:h-28 h-20 bg-white border-b-2 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3"
      >
        <a href="#" class="h-full flex items-center">
          <img
            src="/images/LogoText.svg"
            alt="Power Circuit Breakers Logo"
            class="h-4/6"
          />
        </a>
        <div class="md:flex hidden">
          <div class="flex">
            <img src="/images/Phone.svg" alt="Phone icon" class="p-2" />
            <div>
              <p class="font-normal text-xl -mb-2">Call us</p>
              <h1 class="font-bold xl:text-3xl text-2xl -mb-2">
                +1 (305) 900 7100
              </h1>
            </div>
          </div>
          <div class="flex ml-5">
            <img src="/images/Mail.svg" alt="Mail icon" class="p-2" />
            <div>
              <p class="font-normal text-xl -mb-2">Email us</p>
              <h1 class="font-bold xl:text-3xl text-2xl -mb-2">
                correodeprueba@prueba.com
              </h1>
            </div>
          </div>
        </div>
      </div>

      <span
        class="z-10 absolute md:hidden text-black flex items-center justify-center top-3 right-3 w-14 h-14"
        @click="menuOpen()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </span>

      <div
        class="duration-700 ease-in absolute w-full bg-white/30 backdrop-blur-sm md:hidden"
        :class="[open ? ' opacity-100 h-screen' : ' opacity-0 h-0']"
        @click="menuOpen()"
      ></div>

      <nav
        class="bg-blackGray md:w-fit w-full md:relative absolute md:top-0 duration-500 ease-in"
        :class="[open ? ' top-20' : ' top-[-300%]']"
      >
        <div class="flex md:flex-row flex-col items-center">
          <a
            class="md:px-20 w-full text-center hover:bg-primary hover:text-black font-bold xl:text-3xl text-2xl md:py-1 py-5"
            :class="{
              'bg-primary text-black': route.name === 'index',
              'text-white': route.name !== 'index',
            }"
            href="/"
            >Home</a
          >
          <a
            class="md:px-20 w-full text-center hover:bg-primary hover:text-black font-bold xl:text-3xl text-2xl md:py-1 py-5"
            :class="{
              'bg-primary text-black': route.name === 'catalog',
              'text-white': route.name !== 'catalog',
            }"
            href="/catalog"
            >Catalog</a
          >
          <a
            class="md:px-20 w-full text-center hover:bg-primary hover:text-black font-bold xl:text-3xl text-2xl md:py-1 py-5"
            :class="{
              'bg-primary text-black': route.name === 'contact',
              'text-white': route.name !== 'contact',
            }"
            href="/contact"
            >Contact</a
          >
        </div>
      </nav>
    </header>

    <slot />

    <footer
      class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 py-8 bg-blackGray flex 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8"
    >
      <div class="w-2/6 flex items-center">
        <img
          src="/images/LogoWhiteText.svg"
          alt="Power Circuit Breakers Logo"
        />
      </div>
      <div class="w-2/6">
        <h1
          class="text-white lg:text-3xl md:text-2xl text-xl text-center h-10 tracking-wide border-around-white-sm"
        >
          IMPORTANT LINKS
        </h1>
        <div class="flex flex-col lg:px-20 md:px-10 px-3 mt-5">
          <a href="#" class="lg:text-2xl md:text-xl text-lg text-darkGray"
            >Circuit Breakers</a
          >
          <a href="#" class="lg:text-2xl md:text-xl text-lg text-darkGray"
            >Motor Control</a
          >
          <a href="#" class="lg:text-2xl md:text-xl text-lg text-darkGray"
            >Panels</a
          >
          <a href="#" class="lg:text-2xl md:text-xl text-lg text-darkGray"
            >Transformers</a
          >
        </div>
      </div>
      <div class="w-2/6">
        <h1
          class="text-white lg:text-3xl md:text-2xl text-xl text-center h-10 tracking-wide border-around-white-sm"
        >
          ADDRESS
        </h1>
        <div class="mt-5 flex">
          <p class="lg:text-2xl md:text-xl text-lg text-darkGray w-1/3">
            Office:
          </p>
          <p class="lg:text-2xl md:text-xl text-lg text-darkGray w-2/3">
            6601 NW 14 ST SUITE # 3 PLANTATION, FLORIDA 33313
          </p>
        </div>
        <div class="flex">
          <p class="lg:text-2xl md:text-xl text-lg text-darkGray w-1/3">
            Phone:
          </p>
          <p class="lg:text-2xl md:text-xl text-lg text-darkGray w-2/3">
            +1 (305) 900 7100 - +1 (000) 000 0000
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  setup() {
    let open = ref(false);
    let route = useRoute();

    function menuOpen() {
      open.value = !open.value;
    }

    return { open, menuOpen, route };
  },
};
</script>

<style scoped></style>
