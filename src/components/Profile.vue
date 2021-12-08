<template>
<div class="profile p-2 d-none d-md-flex ">
      <img class="img-thumbnail rounded-circle" src="../assets/images/perfil.png" />
      <h2 >Jeferson Narváez</h2>
      <p> Desarrollador Web  </p>
      <ul class="social-icons">
        <a> <i class="fab fa-github"></i></a>
        <a> <i class="fab fa-codepen"></i></a>
        <a> <i class="fab fa-whatsapp"></i></a>
        <a> <i class="fas fa-bolt"></i></a>
      </ul>
      <button>Descargar CV</button>
</div>
</template>
<script>
export default {
    name:'Profile',

}
</script>
<style>
.profile{
    text-align: center;
  background: var(--primary);
  color: var(--text-theme);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
}
.img-thumbnail{
    width: 180px;
    
}
.social-icons {
  padding: 0;
  width: 100%;
  font-size: x-large;
  display: flex;
  justify-content: space-around;
  
}

.social-icons>a{
  cursor: pointer;
  text-align: center;
  width: 25%;
  height: 100%;
  border-radius: 100px;
  transition: 0.5s ease-in background;
}

.social-icons>a:hover {
  
  background-color: var(--secondary);
}

</style>