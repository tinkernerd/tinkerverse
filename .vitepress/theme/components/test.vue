<script setup lang="ts">
import TableDisplay from '@theme/components/TableDisplay.vue';

import type { SearchTableLinks } from '@theme/data/types'; // Import the interface

defineProps<{
  tableConfig: SearchTableLinks[]; // Use the imported type
}>();
</script>

<template>
  <div v-for="(table, index) in tableConfig" :key="index">
    <!-- Ensure prop names match -->
    <TableDisplay :url="table.url" :cols="table.cols" />
  </div>
</template>
