<template>
  <div class="nasaApi">
    <h1>Astronomy Picture of the Day</h1>
    <div id="dateContainer">
      <label for="photoDate">Picture Date</label>
      <input type="date" id="dateBox" v-model="date" @change="fetchNasaImage" />
      <div id="nasaImage" v-html="nasaContent" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "", // Bind the date input to this variable
      nasaContent: "", // Bind the content to this variable
    };
  },
  methods: {
    async fetchNasaImage() {
      if (!this.date) return; // Prevent API call if date is not selected

      const apiKey = "DEMO_KEY"; // Replace with your actual NASA API key
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${this.date}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.showPicture(data);
      } catch (error) {
        console.error("Error fetching NASA API data:", error);
        this.nasaContent = "<p>Error fetching data. Please try again later.</p>";
      }
    },
    showPicture(data) {
      if (data.media_type === "video") {
        this.nasaContent = `
          <iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>
          <h1>${data.title}</h1>
          <p>${data.explanation}</p>`;
      } else if (data.media_type === "image") {
        this.nasaContent = `
          <img src="${data.url}" alt="${data.title}" />
          <h1>${data.title}</h1>
          <p>${data.explanation}</p>`;
      } else {
        this.nasaContent = "<p>Image not available for the selected date.</p>";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.nasaApi {
    text-align: left;
    border: 2px solid #dedede;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);  
    

    label {
      display: block; /* Ensure the label is on a separate line */
      margin-bottom: 0.5rem; /* Add space below the label */
      font-size: 1rem; /* Optional: Adjust label font size */
    }

    input[type="date"] {
      margin: 0.5rem 0;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  #nasaImage {
    margin-top: 1rem;
    iframe,
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
    h1 {
      margin: 1rem 0 0.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>
