<template>
  <!-- ---------------------------- MANUFACTURERS ---------------------------- -->
  <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 mt-10">
    <div
      class="w-full grid lg:grid-cols-4 grid-cols-2 lg:mt-10 mt-7 lg:gap-5 md:gap-3 gap-2 lg:px-32 md:px-24 sm:px-16 px-10"
    >
      <div v-for="item in db" v-bind:key="item.id">
        <div
          @click="(categoria = item.nombre), (idCategoria = item.id)"
          class="md:px-6 h-full text-center px-2 py-2 flex justify-center items-center border-2 border-gray rounded-lg hover:text-black text-grayContrast hover:border-primary hover:bg-primary"
          :class="item.nombre == categoria ? 'border-primary bg-primary' : ''"
        >
          <p
            class="lg:text-3xl md:text-2xl text-xl"
            :class="item.nombre == categoria ? 'text-black' : ''"
          >
            {{ item.nombre }}
          </p>
        </div>
      </div>
    </div>

    <h1
      class="text-darkGrayContrast text-center lg:text-4xl md:text-3xl text-2xl tracking-wide border-around-gray mt-10"
    >
      POPULAR MANUFACTURERS
    </h1>
    <div
      class="w-full grid md:grid-cols-4 grid-cols-2 lg:mt-10 mt-7 lg:gap-5 md:gap-3 gap-2"
    >
      <div
        v-for="item in marcas"
        v-bind:key="item.id"
        class="flex justify-center items-center"
      >
        <div
          v-if="item.idCategoria == idCategoria"
          class="lg:px-10 md:px-6 px-2"
          @click="idMarca = item.id"
        >
          <img
            :src="item.ruta"
            alt="Square D Logo"
            :class="item.id == idMarca ? 'grayscale-0' : ''"
            class="hover:scale-105 duration-300 grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-14 mt-10 lg:gap-5 md:gap-4 gap-3"
    >
      <div v-for="item in productos" v-bind:key="item.id">
        <a
          v-if="idMarca == item.idMarca && idCategoria == item.idCategoria"
          target="_blank"
          :href="item.pdf"
          class="hover:scale-105 duration-300 border-2 border-gray rounded-lg flex flex-col justify-center items-center cursor-pointer"
        >
          <img :src="item.img" alt="" />
          <p class="lg:text-3xl md:text-2xl text-xl mb-5 text-grayContrast">
            {{ item.nombre }}
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      categoria: "Circuit Breakers",
      idMarca: 0,
      idCategoria: 0,
      db: [
        {
          id: 0,
          nombre: "Circuit Breakers",
        },
        {
          id: 1,
          nombre: "Motor Control",
        },
        {
          id: 2,
          nombre: "Panels",
        },
        {
          id: 3,
          nombre: "Transformers",
        },
      ],
      marcas: [
        {
          id: 0,
          idCategoria: 0,
          ruta: "images/SquareD.png",
        },
        {
          id: 1,
          idCategoria: 0,
          ruta: "images/Eaton.png",
        },
        {
          id: 2,
          idCategoria: 0,
          ruta: "images/Siemens.png",
        },
        {
          id: 3,
          idCategoria: 0,
          ruta: "images/GeneralE.png",
        },
        {
          id: 4,
          idCategoria: 0,
          ruta: "images/FederalPacific.png",
        },
        {
          id: 5,
          idCategoria: 0,
          ruta: "images/WestingHouse.png",
        },
        {
          id: 6,
          idCategoria: 0,
          ruta: "images/ABB.png",
        },
        {
          id: 7,
          idCategoria: 0,
          ruta: "images/Zinsco.png",
        },
        {
          id: 8,
          idCategoria: 0,
          ruta: "images/AllenBradley.png",
        },
      ],
      productos: [
        {
          id: 0,
          idMarca: 0,
          idCategoria: 0,
          nombre: "JJA36250",
          pdf: "documents/Ejemplo.pdf",
          img: "images/JJA36250.png",
        },
        {
          id: 1,
          idMarca: 0,
          idCategoria: 0,
          nombre: "HJA36150",
          pdf: "documents/Ejemplo.pdf",
          img: "images/HJA36150.png",
        },
        {
          id: 2,
          idMarca: 0,
          idCategoria: 0,
          nombre: "PJA36080",
          pdf: "documents/Ejemplo.pdf",
          img: "images/PJA36080.png",
        },
        {
          id: 3,
          idMarca: 0,
          idCategoria: 0,
          nombre: "EDB34020",
          pdf: "documents/Ejemplo.pdf",
          img: "images/EDB34020.png",
        },
        {
          id: 4,
          idMarca: 0,
          idCategoria: 0,
          nombre: "LAL36400",
          pdf: "documents/Ejemplo.pdf",
          img: "images/LAL36400.png",
        },
      ],
    };
  },
};
</script>
