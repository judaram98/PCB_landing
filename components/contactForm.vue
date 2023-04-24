<template>
  <!-- ---------------------------- CONTACT US ---------------------------- -->
  <section class="w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-8 px-3 mt-10">
    <h1
      class="text-center lg:text-5xl md:text-4xl text-3xl tracking-wide border-around"
    >
      CONTACT US
    </h1>
    <p
      class="text-center lg:text-3xl md:text-2xl text-xl mt-5 text-darkGrayContrast lg:px-48 md:px-32 sm:px-20 px-12"
    >
      To provide an excellent service to our clients, we have three locations in
      different parts of the country, such as: Los Angeles, CA Houston TX and
      Fort Lauderdale, FL.
    </p>
    <div class="lg:flex justify-center mt-5 gap-10">
      <div class="flex lg:justify-start justify-center">
        <img src="/images/Phone.svg" alt="" class="mr-3" />
        <div>
          <p class="text-xl">Phone Number</p>
          <h3
            class="lg:text-2xl md:text-xl text-lg -mt-2 tracking-wide border-around-sm"
          >
            +1 (305) 900 7100
          </h3>
        </div>
      </div>
      <div class="flex lg:justify-start justify-center">
        <img src="/images/Address.svg" alt="" class="mr-3 h-auto w-auto" />
        <div>
          <p class="text-xl">Mailing Address</p>
          <h3
            class="lg:text-2xl md:text-xl text-lg -mt-2 tracking-wide border-around-sm"
          >
            1419 NW 65 AVE PLANTATION FLORIDA 33313
          </h3>
        </div>
      </div>
      <div class="flex lg:justify-start justify-center">
        <img src="/images/Clock.svg" alt="" class="mr-3" />
        <div>
          <p class="text-xl">Business Hours</p>
          <h3
            class="lg:text-2xl md:text-xl text-lg -mt-2 tracking-wide border-around-sm"
          >
            MONDAY - FRIDAY / 9AM - 5PM EST
          </h3>
        </div>
      </div>
    </div>
    <form class="flex flex-col items-center mt-10">
      <div
        class="flex md:flex-row flex-col items-center lg:px-48 md:px-32 sm:px-20 px-12"
      >
        <img
          src="/images/Map.png"
          alt="Brakers"
          class="md:pr-5 md:w-3/6 sm:w-4/6 w-5/6"
        />
        <div class="md:w-3/6 w-full md:pl-5 mt-5 md:mt-0">
          <div class="flex flex-col">
            <label class="lg:text-2xl md:text-xl text-lg text-darkGrayContrast"
              >Name: <span aria-label="required">*</span></label
            >
            <input
              required
              v-model="name"
              type="text"
              name="Name"
              placeholder="Enter your name"
              class="outline outline-gray rounded-md p-2 lg:text-2xl md:text-xl text-lg placeholder:text-gray"
            />
          </div>
          <div class="flex flex-col md:mt-5 sm:mt-4 mt-2">
            <label class="lg:text-2xl md:text-xl text-lg text-darkGrayContrast"
              >Email: <span aria-label="required">*</span></label
            >
            <input
              required
              v-model="mail"
              type="email"
              name="Email"
              placeholder="Enter your email"
              class="outline outline-gray rounded-md p-2 lg:text-2xl md:text-xl text-lg placeholder:text-gray"
            />
          </div>
          <div class="flex flex-col md:mt-5 sm:mt-4 mt-2">
            <label class="lg:text-2xl md:text-xl text-lg text-darkGrayContrast"
              >Phone: <span aria-label="required">*</span></label
            >
            <input
              required
              v-model="phone"
              type="number"
              name="Phone"
              placeholder="Enter your phone"
              class="outline outline-gray rounded-md p-2 lg:text-2xl md:text-xl text-lg placeholder:text-gray"
            />
          </div>
          <div class="flex flex-col md:mt-5 sm:mt-4 mt-2">
            <label class="lg:text-2xl md:text-xl text-lg text-darkGrayContrast"
              >Comment: <span aria-label="required">*</span></label
            >
            <textarea
              required
              v-model="comment"
              name="Comment"
              cols="30"
              rows="5"
              placeholder="Enter your comments here"
              class="outline outline-gray rounded-md p-2 lg:text-2xl md:text-xl text-lg placeholder:text-gray"
            ></textarea>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="lg:text-2xl md:text-xl text-lg rounded-xl py-3 px-10 bg-primary 2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 mt-2 hover:bg-primaryContrast"
      >
        SEND
      </button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      mail: "",
      phone: "",
      comment: "",
    };
  },
};
</script>
