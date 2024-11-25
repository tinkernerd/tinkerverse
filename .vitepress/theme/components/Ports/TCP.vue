<template>
  <SearchTable :json="TCPTable" />
</template>

<script setup>
import SearchTable from "@theme/components/SearchTable.vue";
import { TCPTable } from "@theme/data/ports";
</script>
