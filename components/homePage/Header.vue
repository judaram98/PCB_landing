<template>
  <header class="w-full flex flex-col items-center h-fit relative">
    <!-- ---------------------------- NAVBAR ---------------------------- -->
    <div class="w-full sticky top-0 z-10 flex flex-col items-center">
      <div
        class="w-full flex justify-between items-center md:h-28 h-20 bg-white border-b-2 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3"
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

      <nav class="bg-blackGray w-fit md:block hidden">
        <div class="flex">
          <a
            class="text-white px-20 hover:bg-primary hover:text-black font-bold xl:text-3xl text-2xl py-1"
            v-for="({ text, route }, index) in links"
            :key="index"
            :href="route"
            >{{ text }}</a
          >
        </div>
      </nav>
    </div>

    <!-- ---------------------------- HERO ---------------------------- -->
    <section
      class="w-full -mt-11 2xl:h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[30vh]"
    >
      <div class="h-full overflow-hidden flex items-center">
        <img src="/images/Hero.jpg" alt="Circuit brakers image" />
      </div>
    </section>

    <!-- ---------------------------- WE BUY & WE SELL ---------------------------- -->
    <section
      class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8"
    >
      <h1 class="text-center text-5xl tracking-wide border-around">
        WHAT WE DO
      </h1>
      <p class="text-center text-3xl mt-5 text-darkGrayContrast px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
      </p>
      <div class="w-full flex mt-10">
        <div class="w-3/6 pr-10 flex items-center">
          <img src="images/Breakers.png" alt="" />
        </div>
        <div class="w-3/6 pl-10 flex flex-col justify-center">
          <h1
            class="text-darkGrayContrast text-4xl tracking-wide border-around-gray"
          >
            WE BUY ALL TYPES OF BRANDS OF ELECTRICAL EQUIPMENT
          </h1>
          <p class="text-darkGrayContrast text-3xl">
            New, used or overstock inventory instead of letting it collect dust
            or take up space contact our buyers department
            <span class="text-primary">for a free quote</span>. We buy
            nationawide.
          </p>
          <div class="flex mt-5">
            <ul class="w-3/6">
              <li class="text-3xl text-darkGrayContrast">Circuit Breakers</li>
              <li class="text-3xl text-darkGrayContrast">Arc Faults</li>
              <li class="text-3xl text-darkGrayContrast">Switch Gears</li>
              <li class="text-3xl text-darkGrayContrast">Bus Plugs</li>
              <li class="text-3xl text-darkGrayContrast">Motor Controls</li>
            </ul>
            <ul class="w-3/6">
              <li class="text-3xl text-darkGrayContrast">Data Centers</li>
              <li class="text-3xl text-darkGrayContrast">Trip Units</li>
              <li class="text-3xl text-darkGrayContrast">Shunt Trips</li>
              <li class="text-3xl text-darkGrayContrast">Busway Switches</li>
              <li class="text-3xl text-darkGrayContrast">Transformers</li>
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
      <div class="w-full flex mt-10">
        <div class="w-3/6 pr-10 flex flex-col justify-center">
          <h1
            class="text-darkGrayContrast text-4xl tracking-wide border-around-gray"
          >
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
        <div class="w-3/6 pl-10">
          <img src="../../images/Breakers.png" alt="" />
        </div>
      </div>
    </section>

    <!-- ---------------------------- BRANDS ---------------------------- -->
    <!-- <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8">
      <h1 class="text-center text-5xl tracking-wide border-around">BRANDS</h1>
      <p class="text-center text-3xl mt-5 text-darkGrayContrast px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
      </p>
      <div class="w-full flex mt-5">
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/SquareD.png"
            alt="Square D Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/Abb.png"
            alt="Abb Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/Siemens.png"
            alt="Siemens Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/GeneralE.png"
            alt="General Electrics Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div class="w-full flex mt-5">
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/FederalPacific.png"
            alt="Federal Pacific Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/WestingHouse.png"
            alt="Westing House Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/Eaton.png"
            alt="Eaton Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
        <div class="w-1/4 px-10 flex justify-center items-center">
          <img
            src="images/Zinsco.png"
            alt="Zinsco Logo"
            class="hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div class="w-full flex justify-center mt-5">
        <img
          src="images/AllenBradley.png"
          alt="Allen Bradley Logo"
          class="hover:scale-105 duration-300 h-20"
        />
      </div>
    </section> -->

    <!-- ---------------------------- SECTION ---------------------------- -->
    <!-- <section class="w-full flex bg-blackGray items-center 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8">
      <img src="images/YellowImage.png" alt="" class="w-1/6" />
      <div class="w-4/6 pl-10">
        <h1 class="text-4xl text-white tracking-wide border-around-white">
          LOREM IPSUM
        </h1>
        <p class="text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
          ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
        </p>
      </div>
      <a
        href="#"
        class="text-2xl rounded-xl hover:border-primary hover:text-primary py-3 px-10 text-white border-2 border-white h-fit"
        >CONTACT US</a
      >
    </section> -->

    <!-- ---------------------------- ABOUT US ---------------------------- -->
    <!-- <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8">
      <h1 class="text-5xl text-center tracking-wide border-around">ABOUT US</h1>
      <p class="text-3xl text-center text-darkGrayContrast px-48 mt-5">
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
    </section> -->

    <!-- ---------------------------- CONTACT US ---------------------------- -->
    <!-- <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 mt-10">
      <h1 class="text-center text-5xl tracking-wide border-around">
        CONTACT US
      </h1>
      <div class="flex justify-center mt-5">
        <div class="flex">
          <img src="/images/Phone.svg" alt="" class="mr-3" />
          <div>
            <p class="text-xl">Phone Number</p>
            <h3 class="text-3xl -mt-2 tracking-wide border-around-sm">
              +1 (305) 900 7100
            </h3>
          </div>
        </div>
        <div class="flex ml-10">
          <img src="/images/Address.svg" alt="" class="mr-3" />
          <div>
            <p class="text-xl">Mailing Address</p>
            <h3 class="text-3xl -mt-2 tracking-wide border-around-sm">
              1419 NW 65 AVE PLANTATION FLORIDA 33313
            </h3>
          </div>
        </div>
      </div>
      <form class="flex flex-col items-center mt-10">
        <div class="flex flex-col w-3/6">
          <label class="text-2xl text-darkGrayContrast"
            >Name: <span aria-label="required">*</span></label
          >
          <input
            type="text"
            name="Name"
            placeholder="Enter your name"
            class="outline outline-gray rounded-md p-2 text-2xl placeholder:text-gray"
          />
        </div>
        <div class="flex flex-col w-3/6 mt-5">
          <label class="text-2xl text-darkGrayContrast"
            >Email: <span aria-label="required">*</span></label
          >
          <input
            type="mail"
            name="Email"
            placeholder="Enter your email"
            class="outline outline-gray rounded-md p-2 text-2xl placeholder:text-gray"
          />
        </div>
        <div class="flex flex-col w-3/6 mt-5">
          <label class="text-2xl text-darkGrayContrast"
            >Phone: <span aria-label="required">*</span></label
          >
          <input
            type="number"
            name="Phone"
            placeholder="Enter your phone"
            class="outline outline-gray rounded-md p-2 text-2xl placeholder:text-gray"
          />
        </div>
        <div class="flex flex-col w-3/6 mt-5">
          <label class="text-2xl text-darkGrayContrast"
            >Comment: <span aria-label="required">*</span></label
          >
          <textarea
            name="Comment"
            cols="30"
            rows="5"
            placeholder="Enter your comments here"
            class="outline outline-gray rounded-md p-2 text-2xl placeholder:text-gray"
          ></textarea>
        </div>
        <a
          href="#"
          class="text-2xl rounded-xl py-3 px-10 bg-primary mt-10 hover:bg-primaryContrast"
          >SEND</a
        >
      </form>
    </section> -->

    <!-- ---------------------------- CATALOG ---------------------------- -->
    <!-- <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 mt-10">
      <h1 class="text-center text-5xl stroke-black tracking-wide border-around">
        CATALOG
      </h1>
      <p class="text-center text-3xl mt-5 text-darkGrayContrast px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero
        ipsum. Fusce fringilla lectus metus, ac tempor nunc ultricies eu.
      </p>
      <div class="w-full flex justify-center">
        <a
          href="#"
          class="text-2xl rounded-xl py-3 w-1/6 text-center mx-2 mt-10 hover:bg-primary outline outline-gray text-gray hover:text-black hover:outline-primary"
          >Circuit Breakers</a
        >
        <a
          href="#"
          class="text-2xl rounded-xl py-3 w-1/6 text-center mx-2 mt-10 hover:bg-primary outline outline-gray text-gray hover:text-black hover:outline-primary"
          >Motor Control</a
        >
        <a
          href="#"
          class="text-2xl rounded-xl py-3 w-1/6 text-center mx-2 mt-10 hover:bg-primary outline outline-gray text-gray hover:text-black hover:outline-primary"
          >Panels</a
        >
        <a
          href="#"
          class="text-2xl rounded-xl py-3 w-1/6 text-center mx-2 mt-10 hover:bg-primary outline outline-gray text-gray hover:text-black hover:outline-primary"
          >Transformers</a
        >
      </div>
    </section> -->

    <!-- ---------------------------- FOOTER ---------------------------- -->
    <!-- <footer class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 py-8 bg-blackGray flex 2xl:mt-24 xl:mt-20 lg:mt-16 md:mt-12 mt-8">
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
        <h1
          class="text-white text-3xl text-center h-10 tracking-wide border-around-white-sm"
        >
          IMPORTANT LINKS
        </h1>
        <div class="flex flex-col px-20 mt-5">
          <a href="#" class="text-2xl text-darkGray">Circuit Breakers</a>
          <a href="#" class="text-2xl text-darkGray">Motor Control</a>
          <a href="#" class="text-2xl text-darkGray">Panels</a>
          <a href="#" class="text-2xl text-darkGray">Transformers</a>
        </div>
      </div>
      <div class="w-2/6">
        <h1
          class="text-white text-3xl text-center h-10 tracking-wide border-around-white-sm"
        >
          ADDRESS
        </h1>
        <div class="mt-5 flex">
          <p class="text-2xl text-darkGray w-1/3">Office:</p>
          <p class="text-2xl text-darkGray w-2/3">
            1419 NW 65 AVE PLANTATION FLORIDA 33313
          </p>
        </div>
        <div class="flex">
          <p class="text-2xl text-darkGray w-1/3">Phone:</p>
          <p class="text-2xl text-darkGray w-2/3">
            +1 (305) 900 7100 - +1 (000) 000 0000
          </p>
        </div>
      </div>
    </footer> -->
  </header>
</template>

<script setup>
const links = ref([
  { text: "Home", route: "#" },
  { text: "Catalog", route: "#" },
  { text: "Contact", route: "#" },
]);
</script>
