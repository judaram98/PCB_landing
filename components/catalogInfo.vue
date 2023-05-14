<template>
  <!-- ---------------------------- CATALOG ---------------------------- -->
  <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 mt-10">
    <h1
      class="text-center lg:text-5xl md:text-4xl text-3xl stroke-black tracking-wide border-around"
    >
      CATALOG
    </h1>
    <p
      class="text-center lg:text-3xl md:text-2xl text-xl mt-5 text-darkGrayContrast lg:px-48 md:px-32 sm:px-20 px-12"
    >
      You will find the different products that we have for you. We sell the
      most recognized brands in the market such as: Square D, Eaton, Siemens,
      General Electric, Federal Pacific, Westinghouse, ABB, Zinsco, Allen
      Bradley.
    </p>
    <h1
      class="text-darkGrayContrast text-center lg:text-4xl md:text-3xl text-2xl tracking-wide border-around-gray mt-10"
    >
      INDUSTRIES WE SERVE
    </h1>
    <div class="flex lg:mt-5 md:mt-4 mt-3 lg:gap-5 md:gap-4 gap-3">
      <div class="w-1/4">
        <img src="/images/Stadiums.png" alt="Hospital" />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl lg:mt-5 md:mt-4 text-darkGrayContrast"
        >
          Stadiums
        </p>
      </div>
      <div class="w-1/4">
        <img src="/images/DataCenter.png" alt="Hospital" />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl lg:mt-5 md:mt-4 text-darkGrayContrast"
        >
          Data Center
        </p>
      </div>
      <div class="w-1/4">
        <img src="/images/LargeProjects.png" alt="Hospital" />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl lg:mt-5 md:mt-4 text-darkGrayContrast"
        >
          Large Commercial Projects
        </p>
      </div>
      <div class="w-1/4">
        <img src="/images/OilGas.png" alt="Hospital" />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl lg:mt-5 md:mt-4 text-darkGrayContrast"
        >
          Oil & Gas Facilities
        </p>
      </div>
    </div>
    <div class="flex lg:px-48 md:px-32 sm:px-20 px-12 mt-10">
      <div class="flex flex-col items-center w-2/6">
        <img src="/images/News.svg" alt="News" class="h-7 md:h-8 lg:h-10" />

        <vue3-autocounter
          ref="counter"
          :startAmount="0"
          :endAmount="980"
          
          separator=","
          :autoinit="true"
          @finished="alert(`Counting finished!`)"
          class="lg:text-5xl md:text-4xl text-3xl stroke-black tracking-wide border-around lg:mt-5 md:mt-4 mt-3"
        />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl text-darkGrayContrast"
        >
          Projects
        </p>
      </div>
      <div class="flex flex-col items-center w-2/6">
        <img src="/images/Users.svg" alt="Users" class="h-7 md:h-8 lg:h-10" />

        <vue3-autocounter
          ref="counter"
          :startAmount="0"
          :endAmount="216"
         
          separator=","
          :autoinit="true"
          @finished="alert(`Counting finished!`)"
          class="lg:text-5xl md:text-4xl text-3xl stroke-black tracking-wide border-around lg:mt-5 md:mt-4 mt-3"
        />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl text-darkGrayContrast"
        >
          Returning Clients
        </p>
      </div>
      <div class="flex flex-col items-center w-2/6">
        <img src="/images/Hands.svg" alt="Hands" class="h-7 md:h-8 lg:h-10" />

        <vue3-autocounter
          ref="counter"
          :startAmount="0"
          :endAmount="5"
          
          separator=","
          :autoinit="true"
          @finished="alert(`Counting finished!`)"
          class="lg:text-5xl md:text-4xl text-3xl stroke-black tracking-wide border-around lg:mt-5 md:mt-4 mt-3"
        />
        <p
          class="text-center lg:text-3xl md:text-2xl text-xl text-darkGrayContrast"
        >
          Years of Experience
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import Vue3Autocounter from "vue3-autocounter";
</script>
<script>
export default {
  data() {
    return {};
  },
  components: {
    Vue3Autocounter,
  },
};
</script>
