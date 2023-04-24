<template>
  <NuxtLayout :name="layout">
    <contact />
  </NuxtLayout>
</template>

<script setup>
const layout = "landing";
import contact from "../components/contactForm.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  components: {
    contact,
  },
};
</script>

<style scoped></style>
