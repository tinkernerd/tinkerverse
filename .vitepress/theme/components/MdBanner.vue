<template>
  <div v-if="banner" class="banner-wrapper">
    <img
      :src="banner"
      :alt="alt"
      class="banner-image"
      :style="{ objectPosition: `${bannerX} ${bannerY}` }"
    />
  </div>
</template>

<script setup>
import { useData } from 'vitepress' // Correct function for accessing page data in VitePress 1.x

const { page } = useData()

// Read frontmatter values
const banner = page.value.frontmatter.mdbanner || '' // Banner image URL or path
const alt = page.value.frontmatter.alt || 'Banner Image' // Alt text for accessibility
const bannerX = page.value.frontmatter['md_banner-x'] || 'center' // Horizontal alignment
const bannerY = page.value.frontmatter['md_banner-y'] || 'center' // Vertical alignment
</script>

<style scoped>
.banner-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Optional: separator line */
}

.banner-image {
  width: 100%;
  height: auto;
  max-height: 350px; /* Limit banner height */
  object-fit: cover; /* Crop the image while keeping its aspect ratio */
  filter: brightness(0.85); /* Optional: darken image slightly for readability */
}
</style>
