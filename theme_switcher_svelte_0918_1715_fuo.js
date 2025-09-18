// 代码生成时间: 2025-09-18 17:15:18
import { writable } from 'svelte/store';

// Create a writable store to hold the theme state
const theme = writable('light');

// Function to toggle the theme between light and dark
function toggleTheme() {
  const currentTheme = theme();
  // Check if the current theme is light, if so switch to dark, otherwise switch to light
  theme(currentTheme === 'light' ? 'dark' : 'light');
}

// Svelte component for theme switcher
export default function ThemeSwitcherSvelte() {
  // Subscribe to the theme store to get the current theme
  const currentTheme = theme;

  // Return the component markup
  return `
    <div class="theme-switcher">
      <!-- Theme switcher button -->
      <button on:click="${toggleTheme}">
        Toggle Theme
      </button>
      <!-- Display current theme state -->
      <p>Current Theme: ${currentTheme}</p>
    </div>
  `;
}

// Subscribe to theme changes to perform actions when the theme changes
theme.subscribe((themeName) => {
  console.log(`Theme changed to: ${themeName}`);
  // Perform any additional actions required when the theme changes
  // For example, updating document classes, sending analytics, etc.
});