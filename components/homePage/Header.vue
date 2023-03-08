<template>
  <header class="w-full flex flex-col items-center h-screen">
    <!-- ---------------------------- NAVBAR ---------------------------- -->
    <div class="w-full flex justify-between items-center h-28 px-20">
      <a href="#" class="h-full flex items-center">
        <img
          src="/images/LogoText.svg"
          alt="Power Circuit Breakers Logo"
          class="h-4/6"
        />
      </a>
      <div class="flex">
        <div class="flex">
          <img src="/images/Phone.svg" alt="Phone icon" class="p-2" />
          <div>
            <p class="font-normal text-xl -mb-2">Call us</p>
            <h1 class="font-bold text-3xl -mb-2">+1 (000) 000 0000</h1>
          </div>
        </div>
        <div class="flex ml-5">
          <img src="/images/Mail.svg" alt="Mail icon" class="p-2" />
          <div>
            <p class="font-normal text-xl -mb-2">Email us</p>
            <h1 class="font-bold text-3xl -mb-2">correodeprueba@prueba.com</h1>
          </div>
        </div>
      </div>
    </div>

    <nav class="bg-blackGray w-fit z-10">
      <div>
        <a
          class="text-white px-20 hover:bg-primary hover:text-black font-bold text-3xl"
          v-for="({ text, route }, index) in links"
          :key="index"
          :href="route"
          >{{ text }}</a
        >
      </div>
    </nav>

    <!-- ---------------------------- HERO ---------------------------- -->
    <section class="w-full h-4/6 -mt-9">
      <div class="h-full overflow-hidden flex items-center">
        <img src="/images/Hero.jpg" alt="Circuit brakers image" />
      </div>
    </section>

    <!-- ---------------------------- WE BUY & WE SELL ---------------------------- -->
    <section class="w-full px-20 mt-24">
      <h1 class="text-center text-5xl">WHAT WE DO</h1>
      <p class="text-center text-3xl mt-5 text-darkGrayContrast">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
      </p>
      <div class="w-full flex">
        <div class="w-3/6 pr-10">
          <img src="images/Breakers.png" alt="" />
        </div>
        <div class="w-3/6 pl-10 flex flex-col justify-center">
          <h1 class="text-darkGrayContrast text-4xl">
            WE BUY ALL TYPES OF ELECTRICAL EQUIPMENT
          </h1>
          <div class="flex mt-5">
            <ul class="w-3/6">
              <li class="text-3xl text-darkGrayContrast">Circuit Breakers</li>
              <li class="text-3xl text-darkGrayContrast">Transformers</li>
              <li class="text-3xl text-darkGrayContrast">Switch Gears</li>
              <li class="text-3xl text-darkGrayContrast">Bus Plug</li>
              <li class="text-3xl text-darkGrayContrast">Fault Breakers</li>
            </ul>
            <ul class="w-3/6">
              <li class="text-3xl text-darkGrayContrast">Arc Faults</li>
              <li class="text-3xl text-darkGrayContrast">Motor Controls</li>
              <li class="text-3xl text-darkGrayContrast">
                Air Circuit Breakers
              </li>
              <li class="text-3xl text-darkGrayContrast">Fuses</li>
              <li class="text-3xl text-darkGrayContrast">Panel Boards</li>
            </ul>
          </div>
          <p class="text-3xl text-darkGrayContrast mt-5">
            We do not buy electrical parts, tools or fittings
          </p>
          <div class="mt-5 flex justify-end">
            <a
              href="#"
              class="text-2xl bg-primary hover:bg-primaryContrast rounded-xl py-3 px-10 text-black w-fit"
              >CONTACT US</a
            >
          </div>
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-3/6 pr-10 flex flex-col justify-center">
          <h1 class="text-darkGrayContrast text-4xl">
            WE SELL ALL TYPES OF ELECTRICAL EQUIPMENT
          </h1>
          <p class="text-3xl text-darkGrayContrast mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            libero ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies
            eu. Pellentesque sit amet sodales risus. Donec massa ligula,
            tincidunt eu pulvinar eget, dictum sit amet orci. Fusce dui nunc,
            efficitur vitae iaculis nec, efficitur sit amet ligula. Aliquam
            facilisis, est eget tempus bibendum, mi mi cursus felis, id
            fermentum sapien ipsum a justo.
          </p>
          <div class="mt-5 flex justify-end">
            <a
              href="#"
              class="text-2xl bg-primary hover:bg-primaryContrast rounded-xl py-3 px-10 text-black w-fit"
              >CATALOG</a
            >
          </div>
        </div>
        <div class="w-3/6 pl-10 bg-gray">
          <!-- <img src="../../public/images/Breakers.png" alt="" /> -->
        </div>
      </div>
    </section>

    <!-- ---------------------------- BRANDS ---------------------------- -->
    <section class="w-full px-20 mt-24">
      <h1 class="text-center text-5xl">BRANDS</h1>
      <p class="text-center text-3xl mt-5 text-darkGrayContrast">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
      </p>
      <div class="w-full flex">
        <div class="w-1/4 p-10 flex justify-center items-center">
          <img
            src="images/SquareD.png"
            alt="Square D Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 p-10 flex justify-center items-center">
          <img
            src="images/Eaton.png"
            alt="Eaton Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 p-10 flex justify-center items-center">
          <img
            src="images/Siemens.png"
            alt="Siemens Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 p-10 flex justify-center items-center">
          <img
            src="images/GeneralE.png"
            alt="General Electrics Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>

    <!-- ---------------------------- SECTION ---------------------------- -->
    <section class="w-full flex bg-blackGray items-center mt-24">
      <img src="images/YellowImage.png" alt="" class="w-1/6" />
      <div class="w-4/6 pl-10">
        <h1 class="text-5xl text-white">LOREM IPSUM</h1>
        <p class="text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
          ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
        </p>
      </div>
      <a
        href="#"
        class="text-2xl rounded-xl py-3 px-10 text-white border-2 border-white h-fit"
        >CONTACT US</a
      >
    </section>

    <!-- ---------------------------- ABOUT US ---------------------------- -->
    <section class="w-full px-20 mt-24">
      <h1 class="text-5xl text-center">ABOUT US</h1>
      <p class="text-3xl text-center text-darkGrayContrast px-40 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
        Pellentesque sit amet sodales risus. Donec massa ligula, tincidunt eu
        pulvinar eget, dictum sit amet orci. Fusce dui nunc, efficitur vitae
        iaculis nec, efficitur sit amet ligula. Aliquam facilisis, est eget
        tempus bibendum, mi mi cursus felis, id fermentum sapien ipsum a justo.
        Morbi facilisis, mi id mattis volutpat, mauris massa aliquet augue, ac
        vulputate nulla nisi sit amet mi. Sed tristique erat a neque mattis, at
        sodales turpis ultricies. Duis varius viverra posuere. In vel felis nec
        mi pulvinar egestas at vel risus.
      </p>
    </section>

    <!-- ---------------------------- FOOTER ---------------------------- -->
    <footer class="w-full px-20 py-8 bg-blackGray flex mt-24">
      <div class="w-2/6">
        <img
          src="/images/LogoWhiteText.svg"
          alt="Power Circuit Breakers Logo"
          class="h-10"
        />
        <p class="text-white text-2xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
          ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
          Pellentesque sit amet sodales risus.
        </p>
      </div>
      <div class="w-2/6">
        <h1 class="text-white text-3xl text-center h-10">IMPORTANT LINKS</h1>
        <div class="flex flex-col px-20 mt-5">
          <a href="#" class="text-2xl text-darkGray">Circuit Breakers</a>
          <a href="#" class="text-2xl text-darkGray">Motor Control</a>
          <a href="#" class="text-2xl text-darkGray">Panels</a>
          <a href="#" class="text-2xl text-darkGray">Transformers</a>
        </div>
      </div>
      <div class="w-2/6">
        <h1 class="text-white text-3xl text-center h-10">ADDRESS</h1>
        <div class="mt-5 flex">
          <p class="text-2xl text-darkGray w-1/3">Office:</p>
          <p class="text-2xl text-darkGray w-2/3">
            ***** **** **** ***** ****** *****
          </p>
        </div>
        <div class="flex">
          <p class="text-2xl text-darkGray w-1/3">Phone:</p>
          <p class="text-2xl text-darkGray w-2/3">
            +1 (000) 000 0000 - +1 (000) 000 0000
          </p>
        </div>
      </div>
    </footer>
  </header>
</template>

<script setup>
const links = ref([
  { text: "Home", route: "#" },
  { text: "Catalog", route: "#" },
  { text: "Contact", route: "#" },
]);
</script>
