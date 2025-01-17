<template>
    <div class="container">
      <div class="prajitura-container" id="tiramisu">
        <p class="prajitura">
          Tiramisu este un desert italian delicios, pe bază de biscuiți savoiardi, cafea, mascarpone și cacao.
        </p>
      </div>
      <div class="prajitura-container" id="savarina">
        <p class="prajitura">
          Savarina este un desert clasic, preparat dintr-un aluat pufos, însiropat cu sirop de rom și ornat cu frișcă.
        </p>
      </div>
      <div class="prajitura-container" id="amandina">
        <p class="prajitura">
          Amandina este un tort mic și delicios, format dintr-un blat de ciocolată, umplut cu cremă de ciocolată și acoperit cu glazură.
        </p>
      </div>
      <div class="prajitura-container" id="negresa">
        <p class="prajitura">
          Negresa este un desert dens și pufos pe bază de ciocolată, cu o textură umedă și un gust intens de cacao.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AsteaSuntPrajituri",
  };
  </script>
  
  <style scoped>
  .container {
    background-image: url('https://i.pinimg.com/736x/73/e5/e9/73e5e9be6878a1e0a2bdf06b35f267f2.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  
  .prajitura-container {
    position: absolute;
    padding: 5px;
    width: max-content;
    background: rgba(0, 0, 0, 0.5); /* Pentru un efect de fundal pe text */
    border-radius: 8px;
  }
  
  .prajitura {
    font-size: 1.5rem;
    color: white;
    margin: 0;
    text-align: center;
    padding: 10px;
  }
  
  #tiramisu {
    top: 30%;
    left: 15%;
  }
  
  #savarina {
    top: 40%;
    left: 10%;
  }
  
  #amandina {
    top: 50%;
    left: 10%;
  }
  
  #negresa {
    top: 60%;
    left: 15%;
  }
  
  .prajitura-container:hover {
    transform: translateX(100px) translateY(100px);
  }
  
  #tiramisu:hover {
    transform: translateX(-100px) translateY(-100px);
  }
  
  #savarina:hover {
    transform: translateX(-100px) translateY(100px);
  }
  
  #amandina:hover {
    transform: translateX(100px) translateY(-100px);
  }
  
  #negresa:hover {
    transform: translateX(-100px) translateY(50px);
  }
  </style>
  