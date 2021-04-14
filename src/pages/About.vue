<template>
  <div class="about-container" data-aos="fade-up">
    <h1>Sobre mi</h1>
    <div class="row">
      <div class="col">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sunt
        quibusdam suscipit deleniti enim eius consectetur facilis illum quae
        perferendis.
      </div>
      <div class="col">
        <p class="about-info">Edad <span>24</span></p>
        <p class="about-info">Dirección <span>Quito, Ecuador </span></p>
        <p class="about-info">Telefono <span>593-998-695-861</span></p>
        <p class="about-info">Email <span>jeferson.narvaez@epn.edu.ec</span></p>
        
      </div>
    </div>
    <div class="col">
        <h3>Redes Sociales</h3>
         <p class="social-icons">
        <a> <i class="fab fa-github"></i></a>
        <a> <i class="fab fa-codepen"></i></a>
        <a> <i class="fab fa-whatsapp"></i></a>
        <a> <i class="fas fa-bolt"></i></a>
      </p>

    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
.about-container {
  margin: 2rem;
  height: 90%;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
    
}

.social-icons{
   margin-top: 2rem;
}
.social-icons>a{
   
    justify-content: center;
    font-size: xx-large;
}
.about-info{
    margin-bottom: 1rem;
    
}
.about-info>span{
    display: block;
    color: var(--text-theme);
    background: var(--primary);
    border-radius: 100px;
    padding: 0px 1rem;
}

</style>
