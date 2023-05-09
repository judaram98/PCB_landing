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
      <template v-for="item in marcas" v-bind:key="item.id">
        <div
          v-if="
            item.idCategoria == idCategoria && categoria != 'Circuit Breakers'
          "
          class="lg:px-10 md:px-6 px-2 flex justify-center items-center"
        >
          <img
            :src="item.ruta"
            :alt="item.ruta"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div
          v-if="
            item.idCategoria == idCategoria && categoria == 'Circuit Breakers'
          "
          class="lg:px-10 md:px-6 px-2 flex flex-col hover:scale-105 duration-300"
          :class="
            item.id == idMarca ? 'border-2 rounded-lg border-primary' : ''
          "
          @click="idMarca = item.id"
        >
          <img :src="item.grupo" :alt="item.grupo" class="my-5 rounded-lg" />
          <div class="h-36 flex items-center">
            <div>
              <img :src="item.ruta" :alt="item.ruta" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <hr class="mt-14 text-gray" />
    <div
      class="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-14 mt-10 lg:gap-5 md:gap-4 gap-3"
    >
      <template v-for="item in productos" v-bind:key="item.id">
        <div
          v-if="idCategoria == item.idCategoria && item.idMarca == idMarca"
          class="hover:scale-105 duration-300 border-2 p-5 border-gray rounded-lg flex flex-col justify-center items-center"
        >
          <img :src="item.img" alt="" />
          <p class="lg:text-3xl md:text-2xl text-xl mb-5 text-grayContrast">
            {{ item.nombre }}
          </p>
          <a
            target="_blank"
            :href="item.pdf"
            class="lg:text-2xl md:text-xl text-lg bg-primary hover:bg-primaryContrast rounded-xl py-3 px-10 text-black w-fit"
            >VIEW CATALOG</a
          >
        </div>
      </template>
    </div>
    <p
      v-if="idCategoria != 0"
      class="text-darkGrayContrast text-center lg:text-4xl md:text-3xl text-2xl"
    >
      Please call us for availability
    </p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      categoria: "Circuit Breakers",
      idCategoria: 0,
      idMarca: 0,
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
          grupo: "images/GrupoSquareD.png",
          ruta: "images/SquareD.png",
        },
        {
          id: 1,
          idCategoria: 0,
          grupo: "images/GrupoEaton.png",
          ruta: "images/Eaton.png",
        },
        {
          id: 2,
          idCategoria: 0,
          grupo: "images/GrupoSiemens.png",
          ruta: "images/Siemens.png",
        },
        {
          id: 3,
          idCategoria: 0,
          grupo: "images/GrupoGeneralE.png",
          ruta: "images/GeneralE.png",
        },
        {
          id: 9,
          idCategoria: 1,
          ruta: "images/SquareD.png",
        },
        {
          id: 10,
          idCategoria: 1,
          ruta: "images/Eaton.png",
        },
        {
          id: 11,
          idCategoria: 1,
          ruta: "images/Siemens.png",
        },
        {
          id: 12,
          idCategoria: 1,
          ruta: "images/GeneralE.png",
        },
        {
          id: 13,
          idCategoria: 1,
          ruta: "images/ABB.png",
        },
        {
          id: 14,
          idCategoria: 2,
          ruta: "images/SquareD.png",
        },
        {
          id: 15,
          idCategoria: 2,
          ruta: "images/Eaton.png",
        },
        {
          id: 16,
          idCategoria: 2,
          ruta: "images/Siemens.png",
        },
        {
          id: 17,
          idCategoria: 2,
          ruta: "images/GeneralE.png",
        },
        {
          id: 18,
          idCategoria: 3,
          ruta: "images/SquareD.png",
        },
        {
          id: 19,
          idCategoria: 3,
          ruta: "images/Eaton.png",
        },
        {
          id: 20,
          idCategoria: 3,
          ruta: "images/Siemens.png",
        },
        {
          id: 21,
          idCategoria: 3,
          ruta: "images/GeneralE.png",
        },
        {
          id: 22,
          idCategoria: 3,
          ruta: "images/FederalPacific.png",
        },
        {
          id: 23,
          idCategoria: 3,
          ruta: "images/WestingHouse.png",
        },
      ],
      productos: [
        {
          id: 0,
          idCategoria: 0,
          idMarca: 0,
          nombre: "B Frame",
          pdf: "documents/categoria_familia_ b _frame.pdf",
          img: "images/BFrame.png",
        },
        {
          id: 1,
          idCategoria: 0,
          idMarca: 0,
          nombre: "EDB",
          pdf: "documents/categoria_familia_edb_frame...pdf",
          img: "images/EDB.png",
        },
        {
          id: 2,
          idCategoria: 0,
          idMarca: 0,
          nombre: "F Frame",
          pdf: "documents/categoria_familia_f_frame.pdf",
          img: "images/FFrame.png",
        },
        {
          id: 3,
          idCategoria: 0,
          idMarca: 0,
          nombre: "H Frame",
          pdf: "documents/categoria_fame_h_frame.pdf",
          img: "images/HFrame.png",
        },
        {
          id: 4,
          idCategoria: 0,
          idMarca: 0,
          nombre: "J Frame",
          pdf: "documents/categoria_familia_j_frame.pdf",
          img: "images/JFrame.png",
        },
        {
          id: 5,
          idCategoria: 0,
          idMarca: 0,
          nombre: "K Frame",
          pdf: "documents/categoria_familia_ka_frame.pdf",
          img: "images/KFrame.png",
        },
        {
          id: 6,
          idCategoria: 0,
          idMarca: 0,
          nombre: "LC",
          pdf: "documents/categoria_familia_lc_lcl.pdf",
          img: "images/LC.png",
        },
        {
          id: 7,
          idCategoria: 0,
          idMarca: 0,
          nombre: "L Frame",
          pdf: "documents/categoria_familia_l_frame_old.pdf",
          img: "images/LFrame.png",
        },
        {
          id: 8,
          idCategoria: 0,
          idMarca: 0,
          nombre: "M Frame",
          pdf: "documents/categoria_familia_powerpac_m_frame.pdf",
          img: "images/MFrame.png",
        },
        {
          id: 9,
          idCategoria: 0,
          idMarca: 0,
          nombre: "M Frame Old Style",
          pdf: "documents/categoria_familia_M_fame_old_style.pdf",
          img: "images/MFrameOld.png",
        },
        {
          id: 10,
          idCategoria: 0,
          idMarca: 0,
          nombre: "Motor Circuit Protectors",
          pdf: "documents/categoria_familia_motor_circuit_protectors.pdf",
          img: "images/MotorCircuitProtectors.png",
        },
        {
          id: 11,
          idCategoria: 0,
          idMarca: 0,
          nombre: "P Frame",
          pdf: "documents/categoria_familia_p_frame.pdf",
          img: "images/PFrame.png",
        },
        {
          id: 12,
          idCategoria: 0,
          idMarca: 0,
          nombre: "Powerpack L Frame",
          pdf: "documents/categoria_familia_powerpac_l_frame2.pdf",
          img: "images/PowerLFrame.png",
        },
        {
          id: 13,
          idCategoria: 0,
          idMarca: 0,
          nombre: "Q Frame",
          pdf: "documents/categoria_q_frame.pdf",
          img: "images/QFrame.png",
        },
        {
          id: 14,
          idCategoria: 0,
          idMarca: 0,
          nombre: "QO Hom",
          pdf: "documents/categoria_familia_qo_hom.pdf",
          img: "images/QOHom.png",
        },
        {
          id: 15,
          idCategoria: 0,
          idMarca: 0,
          nombre: "R Frame",
          pdf: "documents/categoria_familia_r_frame.pdf",
          img: "images/RFrame.png",
        },
      ],
    };
  },
};
</script>
