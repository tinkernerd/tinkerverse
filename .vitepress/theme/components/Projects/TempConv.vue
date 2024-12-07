<template>
  <div class="project-example">
    <div class="temp-converter">
      <header :class="headerColor">
        <h1>Because math is hard, duh.</h1>
      </header>
      <article>
        <form>
          <div class="temp-section">
            <div class="temp-box">
              <h3>Temp in F</h3>
              <input type="number" v-model.number="fahrenheit" @input="updateCelsius" />
            </div>
            <div class="temp-box">
              <h3>Temp in C</h3>
              <input type="number" v-model.number="celsius" @input="updateFahrenheit" />
            </div>
          </div>
        </form>
        <footer>
          Enter a Fahrenheit or Celsius temperature in either input box and press Tab to
          convert.
          <br />
          Try going below 30°F / 0°C or above 80°F / 26.7°C to see the color change.
        </footer>
      </article>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";

// Reactive temperature values
const fahrenheit = ref(32);
const celsius = ref(0);

// Update Celsius when Fahrenheit changes
function updateCelsius() {
  celsius.value = parseFloat(((fahrenheit.value - 32) / 1.8).toFixed(2));
}

// Update Fahrenheit when Celsius changes
function updateFahrenheit() {
  fahrenheit.value = parseFloat((celsius.value * 1.8 + 32).toFixed(2));
}

// Compute header color class based on Fahrenheit
const headerColor = computed(() => {
  if (fahrenheit.value < 32) return "blue";
  if (fahrenheit.value > 80) return "red";
  return "yellow";
});
</script>


<style scoped>
/* Temperature Converter Styles */
.temp-converter {
  max-width: 500px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.temp-converter header {
  font-size: 2rem;
  text-align: center;
  padding: 1em;
  border-radius: 8px 8px 0 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.temp-converter header h1 {
  margin: 0;
  font-size: 2rem;
}

.temp-converter article {
  text-align: center;
  padding: 20px 0;
}

.temp-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;
  position: relative;
}

.temp-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.temp-box h3 {
  margin-bottom: 0.5rem;
}

/* Traditional input box styles */
.temp-converter input[type="number"] {
  width: 120px;
  padding: 5px 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: right;
  appearance: auto; /* Ensure spinner controls are displayed */
}

.temp-converter input:focus {
  outline: 2px solid #007bff;
  box-shadow: none;
}

/* Temperature-based color classes with transitions */
.temp-converter .blue {
  background: #007bff;
  color: #fff;
}

.temp-converter .yellow {
  background: #ffc340;
  color: #333;
}

.temp-converter .red {
  background: #ff6347;
  color: #fff;
}

.temp-converter footer {
  margin-top: 1em;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
