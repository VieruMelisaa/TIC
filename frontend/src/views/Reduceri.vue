<template>
    <div class="container">
      <div class="prajitura-container" id="croissant">
        <p class="prajitura">
          <strong>Croissant</strong> - Un foietaj clasic franțuzesc, untos și crocant. Acum cu <span class="discount">20% reducere!</span>
        </p>
      </div>
      <div class="prajitura-container" id="ecler">
        <p class="prajitura">
          <strong>Ecler</strong> - Aluat choux umplut cu cremă de vanilie și glazură de ciocolată. <span class="discount">Reducere 10% azi!</span>
        </p>
      </div>
      <div class="prajitura-container" id="strudel">
        <p class="prajitura">
          <strong>Ștrudel cu mere</strong> - Aluat fin umplut cu mere și scorțișoară. <span class="discount">Doar 8 lei porția!</span>
        </p>
      </div>
      <div class="prajitura-container" id="tarta">
        <p class="prajitura">
          <strong>Tartă cu fructe</strong> - O combinație delicioasă de cremă de vanilie și fructe proaspete. <span class="discount">La al doilea, -50%!</span>
        </p>
      </div>
      <div class="prajitura-container" id="cheesecake">
        <p class="prajitura">
          <strong>Cheesecake</strong> - Un desert cremos și fin cu blat crocant de biscuiți. <span class="discount">3+1 Gratis!</span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReduceriPatiserie",
  };
  </script>
  
  <style scoped>
  .container {
    /* background-image: url('https://i.pinimg.com/736x/98/f1/12/98f11229e247bae8bf21b62d50c82f14.jpg'); */
    background-image: url('https://img.freepik.com/premium-photo/homemade-red-velvet-cupcakes-with-whipped-cream-wooden-tray-white-napkin-with-ribbon-white-linen-table-cloth-square-image_72772-21235.jpg?w=740');
    background-size: cover;
    background-position: center;
    height: 84.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    flex-direction: column;
  }
  
  .prajitura-container {
    position: absolute;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    transition: transform 0.4s ease, background 0.3s ease;
    cursor: pointer;
  }
  
  .prajitura {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
  
  .discount {
    color: #ffcc00;
    font-weight: bold;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  #croissant { top: 10%; left: 10%; }
  #ecler { top: 25%; left: 15%; }
  #strudel { top: 40%; left: 12%; }
  #tarta { top: 55%; left: 18%; }
  #cheesecake { top: 70%; left: 14%; }
  
  /* Efecte hover interactive */
  .prajitura-container:hover {
    transform: scale(1.2) rotate(5deg);
    background: rgba(255, 255, 255, 0.8);
  }
  
  .prajitura-container:hover .prajitura {
    color: #222;
  }
  </style>
  