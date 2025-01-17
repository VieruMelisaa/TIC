<template>
    <div class="container">
      <div class="text-container">
        <h1>Specialități în Patiserie din Lume</h1>
        <p>
          În lumea patiseriei, fiecare țară are propriile sale rețete și tehnici
          care fac dulciurile și produsele de patiserie unice. Iată câteva exemple
          aduse de noi:
        </p>
        <div class="specialties">
          <div class="specialty-item">
            <h2>Franta - Croissant</h2>
            <p>
              Croissant-ul franțuzesc este unul dintre cele mai cunoscute produse
              de patiserie din lume. Este un produs din aluat foietaj care poate fi
              servit simplu sau umplut cu ciocolată sau cremă de migdale.
            </p>
          </div>
          <div class="specialty-item">
            <h2>Turcia - Baklava</h2>
            <p>
              Baklava este o patiserie tradițională din Orientul Mijlociu, făcută
              din straturi de aluat filo, umplut cu nuci sau fistic și îmbibată într-un
              sirop dulce. Este apreciată pentru textura crocantă și dulceața intensă.
            </p>
          </div>
          <div class="specialty-item">
            <h2>Italia - Cannoli</h2>
            <p>
              Cannoli sunt tuburi crocante de aluat prăjit umplute cu un amestec de
              ricotta dulce și alte ingrediente, cum ar fi ciocolata sau fructele confiate.
            </p>
          </div>
          <div class="specialty-item">
            <h2>Austria - Sachertorte</h2>
            <p>
              Sachertorte este un tort de ciocolată originar din Viena, cu o glazură
              de ciocolată și un strat subțire de gem de caise, considerat un simbol
              al patiseriei austriece.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PatiserieSpecialities"
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("https://i.pinimg.com/736x/7f/80/df/7f80dfe4c3de298069c075ba6b1eca76.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
  }
  
  .text-container {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    margin: 10px;
  }
  
  .specialties {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .specialty-item {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }
  
  .specialty-item:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.6);
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    .text-container {
      padding: 15px;
    }
  
    h1 {
      font-size: 2rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
  </style>
  