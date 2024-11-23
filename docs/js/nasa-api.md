---
title: NASA Astronomy Picture of the Day Viewer
outline: deep
---

<script setup>
import NasaApi from '@theme/components/Projects/NasaApi.vue'
</script>

# NASA Astronomy Picture of the Day Viewer

## Project Summary:
The NASA Astronomy Picture of the Day Viewer is a simple web application built using Vue.js. It allows users to select a date and retrieve the corresponding astronomy picture or video for that day from NASA's API. The project demonstrates the use of Vue's reactive data handling, event listeners, and modern JavaScript features like `async/await`.

## Working Example:
<NasaApi/>

## Explanation:

### HTML Structure
The project includes the following key HTML elements:

- **Title Section**: A header (`<h1>`) that introduces the application.
- **Date Input Field**: An input element of type `date` (`<input type="date">`) that allows users to select a date.
- **Content Display Section**: A `<div>` with the ID `nasaImage` dynamically populated with content fetched from the NASA API.

### JavaScript Code Explanation
The application uses Vue.js and JavaScript for interactivity and data handling. Key elements include:

#### **Data Properties:**
- `date`: Stores the user-selected date.
- `nasaContent`: Holds the HTML content generated dynamically based on the API response.

#### **Methods:**
- `fetchNasaImage()`: 
  - Triggered when the user selects a date.
  - Sends an HTTP GET request to the NASA API with the selected date.
  - Handles errors gracefully, displaying a user-friendly message in case of issues.
  
- `showPicture(data)`:
  - Parses the API response and dynamically generates HTML for the media (image or video), title, and explanation.
  - Supports different media types (`image`, `video`, or others) with appropriate handling.

#### **CSS Styling:**
- Scoped SCSS styles ensure that the layout is clean and visually appealing.
- The label and date input are spaced using `margin-bottom`, and images/videos are responsive.

#### **Key Features:**
- **Responsive Media Display**: Images and videos adjust to screen size for an optimal user experience.
- **Error Handling**: Displays a fallback message if the API call fails or if the requested date doesn't have available media.
- **Reactive UI**: Changes are immediately reflected in the DOM using Vue's reactive data bindings.

This project is an excellent demonstration of combining a public API with Vue.js for building an interactive and user-friendly application.
