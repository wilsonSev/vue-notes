<template>
  <div>
    <nav>
      <router-link to="/">Заметки</router-link>
      <router-link to="/about">О проекте</router-link >
    </nav>
    <router-view />
  </div>
</template>

<style>
/* Глобальные стили для всего приложения */
* {
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #1c1c1e;
  color: #f5f5f7;
}

input, textarea {
  background-color: transparent;
  color: inherit;
  border: none;
  outline: none;
  font-family: inherit;
}

::placeholder {
  color: #888;
}

button {
  background-color: #2c2c2e;
  color: #f5f5f7;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
  background-color: #3a3a3c;
}

button:active {
  transform: scale(0.98);
}

nav {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e9ecef;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #6c757d;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: 500;
}

nav a:hover {
  background-color: #e9ecef;
  color: #495057;
}

nav a.router-link-active {
  background-color: #007AFF;
  color: white;
}

.search-input {
  width: 95%;
  padding: 0.5rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background-color: #ffffff;
  transition: all 0.2s ease;
  outline: none;
  color: #000000;
}

.search-input:focus {
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}
</style>