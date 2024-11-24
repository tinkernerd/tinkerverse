<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Search..."
      class="search-input"
    />
    <table>
      <thead>
        <tr>
          <th v-for="col in json[0].cols" :key="col.text">{{ col.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredData" :key="row.Port">
          <td v-for="col in json[0].cols" :key="col.text">
            {{ row[col.text.toLowerCase()] || "N/A" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Define props for the component
import type { SearchTableLinks } from '@theme/data/types';

defineProps<{
  json: SearchTableLinks[];
}>();

const search = ref<string>(""); // Reactive search input
const tableData = ref<any[]>([]); // Reactive table data

// Fetch the data from the provided URL on mount
onMounted(async () => {
  try {
    const response = await fetch(json[0].url);
    tableData.value = await response.json();
  } catch (error) {
    console.error("Error loading table data:", error);
  }
});

// Filter the table data based on the search query
const filteredData = computed(() => {
  if (!search.value) return tableData.value;
  return tableData.value.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --input-background: #f9f9f9;
  --input-border: #ccc;
  --input-text-color: #000000;
  --table-border: #ddd;
  --table-header-background: #f4f4f4;
  --table-row-hover: #f1f1f1;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1e1e2e;
    --text-color: #ffffff;
    --input-background: #2b2b40;
    --input-border: #555555;
    --input-text-color: #ffffff;
    --table-border: #444444;
    --table-header-background: #33334a;
    --table-row-hover: #3a3a57;
  }
}

.search-input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  background-color: var(--input-background);
  color: var(--input-text-color);
}

.search-input::placeholder {
  color: var(--input-text-color);
  opacity: 0.7;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--background-color);
  color: var(--text-color);
}

th,
td {
  border: 1px solid var(--table-border);
  padding: 8px;
}

th {
  background-color: var(--table-header-background);
  text-align: left;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: var(--table-row-hover);
}

tr:hover {
  background-color: var(--table-row-hover);
}

</style>
