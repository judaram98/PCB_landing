<template>
  <NuxtLayout :name="layout">
    <catalogInfo />
    <manufacturers />
  </NuxtLayout>
</template>

<script setup>
const layout = "landing";
import catalogInfo from "../components/catalogInfo.vue";
import manufacturers from "../components/manufacturers.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  components: {
    catalogInfo,
    manufacturers,
  },
};
</script>

<style scoped></style>
