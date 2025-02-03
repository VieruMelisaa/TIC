<template>
    <nav class="navbar">
      <router-link to ="/" class="nav-item">Acasa</router-link>
      <router-link to="/toateSortimentele" class="nav-item">Toate Sortimentele</router-link>
      <router-link to="/specialitati" class="nav-item">Specialități</router-link>
      <router-link to="/foietaje" class="nav-item">Foietaje</router-link>
      <router-link to="/prajituri" class="nav-item">Prăjituri</router-link>
      <router-link to="/reduceri" class="nav-item">Reduceri</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; 
    background-color: #fce4d6;
    border-bottom: 2px solid #a0522d;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-item {
    text-decoration: none;
    color: #a0522d;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .nav-item:hover {
    color: #d2691e;
    text-decoration: underline;
  }
  
  body {
    margin: 0;
    padding-top: 70px;
  }
  </style>
  