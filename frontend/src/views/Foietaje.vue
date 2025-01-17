<template>
    <div class="wrapper">
      <div class="content">
        <h1>Delicii din Lumea Foietajelor</h1>
        <p>
          Foietajele sunt unele dintre cele mai delicate și rafinate produse de
          patiserie. Fiecare țară are propriile sale rețete și tradiții când vine
          vorba de foietaje. Descoperă câteva dintre cele mai apreciate tipuri de
          foietaje din întreaga lume:
        </p>
  
        <div class="pastries">
          <div class="pastry-item">
            <h2>Franta - Pain au Chocolat</h2>
            <p>
              Pain au Chocolat este un foietaj franțuzesc delicios, umplut cu ciocolată
              fină. Este adesea servit ca mic dejun sau gustare.
            </p>
          </div>
          <div class="pastry-item">
            <h2>Spania - Empanadas</h2>
            <p>
              Empanadas sunt un tip de foietaj umplut cu diverse ingrediente, cum ar
              fi carne, pui sau brânză. Acestea sunt populare în Spania și în întreaga
              Americă Latină.
            </p>
          </div>
          <div class="pastry-item">
            <h2>Italia - Sfogliatella</h2>
            <p>
              Sfogliatella este un tip de foietaj italian din sudul Italiei, cu un
              interior dulce, de brânză ricotta sau fructe confiate. Este foarte crocant
              și ușor de savurat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PastrySpecialties"
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("https://i.pinimg.com/736x/55/13/33/551333f17e333aee6d0617d87b391e11.jpg");
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 20px;
  }
  
  .content {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    padding: 30px;
    max-width: 1000px;
    width: 100%;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .pastries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .pastry-item {
    background: rgba(255, 255, 255, 0.4);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .pastry-item:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.7);
  }
  
  h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  
    .pastries {
      grid-template-columns: 1fr;
    }
  }
  </style>
  