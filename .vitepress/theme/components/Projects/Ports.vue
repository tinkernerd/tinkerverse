<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Search ports or services..."
    />
    <table>
      <thead>
        <tr>
          <th>Port Number</th>
          <th>Protocol</th>
          <th>Service/Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="port in filteredPorts" :key="port.number">
          <td>{{ port.number }}</td>
          <td>{{ port.protocol }}</td>
          <td>{{ port.service }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      ports: [], // Initialize as an empty array
    };
  },
  created() {
    // Fetch the ports.json data when the component is created
    this.loadPortsData();
  },
  methods: {
    async loadPortsData() {
      try {
        const response = await fetch("https"); // Update the path to your actual JSON file
        const data = await response.json();
        this.ports = data.map((item) => ({
          number: item.port,
          protocol: item.protocol,
          service: item.description,
        }));
      } catch (error) {
        console.error("Error loading ports data:", error);
        console.error(error);
      }
    },
  },
  computed: {
    filteredPorts() {
      return this.ports.filter(
        (port) =>
          port.number.toString().includes(this.search) ||
          port.protocol.toLowerCase().includes(this.search.toLowerCase()) ||
          port.service.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>


<style>
input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
