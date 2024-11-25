<template>
  <SearchTable :json="UDPTable" />
</template>

<script setup>
import SearchTable from "@theme/components/SearchTable.vue";
import { UDPTable } from "@theme/data/ports";
</script>
