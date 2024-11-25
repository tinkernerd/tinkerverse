<template>
  <div>
    <!-- Search Input -->
    <input
      type="text"
      v-model="search"
      placeholder="Search..."
      class="search-input"
    />

    <!-- Table -->
    <table v-if="paginatedData.length">
      <thead>
        <tr>
          <th v-for="col in tableConfig.cols" :key="col.text">{{ col.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in paginatedData" :key="index">
          <td v-for="col in tableConfig.cols" :key="col.text">
            {{ row[col.text] || "N/A" }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No results found.</p>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="pagination-button"
      >
        Previous
      </button>
      <div class="pagination-input-container">
        <label for="page-input" class="pagination-label">Page</label>
        <input
          id="page-input"
          type="number"
          v-model.number="inputPage"
          @change="goToPage"
          min="1"
          :max="totalPages"
          class="pagination-input"
        />
        <span>of {{ totalPages }}</span>
      </div>
      <button
        @click="currentPage++"
        :disabled="currentPage >= totalPages"
        class="pagination-button"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";

// Props
const props = defineProps({
  json: {
    type: Object,
    required: true, // The entire table configuration object must be passed
  },
});

// Reactive Data
const tableConfig = ref(props.json); // Use the passed json prop
const tableData = ref([]);
const search = ref(""); // Search query
const currentPage = ref(1); // Current page number
const inputPage = ref(1); // Tracks the page input
const rowsPerPage = 50; // Rows displayed per page

// Fetch data based on the tableConfig
const fetchTableData = async () => {
  try {
    if (!tableConfig.value) return;

    //console.log("Fetching data from URL:", tableConfig.value.url);

    const response = await fetch(tableConfig.value.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. HTTP Status: ${response.status}`);
    }

    const rawData = await response.json();
    //console.log("Raw Data Fetched (first 5 entries):", rawData.slice(0, 5));

    tableData.value = tableConfig.value.mapper(rawData);
    //console.log("Mapped Data (first 5 entries):", tableData.value.slice(0, 5));
  } catch (error) {
    console.error("Error fetching or mapping data:", error);
  }
};

// Fetch data on mount
onMounted(fetchTableData);

// Filtered data based on search input
const filteredData = computed(() => {
  if (!search.value) return tableData.value;
  return tableData.value.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );
});

// Total number of pages
const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / rowsPerPage)
);

// Paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  return filteredData.value.slice(start, end);
});

// Navigate to a specific page
const goToPage = () => {
  if (inputPage.value < 1) {
    currentPage.value = 1;
    inputPage.value = 1;
  } else if (inputPage.value > totalPages.value) {
    currentPage.value = totalPages.value;
    inputPage.value = totalPages.value;
  } else {
    currentPage.value = inputPage.value;
  }
};

// Watch currentPage and update inputPage when it changes
watch(currentPage, (newPage) => {
  inputPage.value = newPage;
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

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 1rem;
  color: var(--text-color);
}

.pagination-button {
  padding: 5px 10px;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  background-color: var(--table-header-background);
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination-button:hover:not(:disabled) {
  background-color: var(--table-row-hover);
}

.pagination-input-container {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
}

.pagination-input {
  width: 50px;
  padding: 0;
  border: none;
  background: none;
  color: var(--text-color);
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  appearance: textfield; /* Hides spinners on number input */
}

.pagination-input:focus {
  outline: none;
  color: var(--text-color);
}

.pagination-label {
  font-weight: bold;
}
</style>
