<template>
  <div class="main-container">
    <div class="main-container_profile">
      <img class="profile-image" src="./assets/images/perfil.png" />
      <h2>Jeferson Narváez</h2>
      <p>Desarrollador Web</p>
      <p class="social-icons">
        <a> <i class="fab fa-github"></i></a>
        <a> <i class="fab fa-codepen"></i></a>
        <a> <i class="fab fa-whatsapp"></i></a>
        <a> <i class="fas fa-bolt"></i></a>
      </p>
      <button class="boton-primario">Descargar CV</button>
    </div>
    <div class="main-container_container">
      <router-view></router-view>
    </div>
  </div>
  <Nav />
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: { Nav },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap");
* {
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
}
#app {
  --theme: #ffffff;
  --text-theme: #ffff;
  --primary: #6534ec;
  --secondary: #f83c3c;
  --thertiary:#969696;
  background: #f6f7ff;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
 
}

.main-container {
  width: 85%;
  height: 80%;
  border-radius: 20px;
  display: flex;
 
  box-shadow:0px 0px 20px 0.3rem #D3D0CB;
}

.main-container_profile {
  background: var(--primary);
  color: var(--text-theme);
  border-radius: 20px 0px 0px 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.profile-image {
  height: 220px;
  width: 200px;
  background: var(--text-theme);
  border-radius: 100px;
}
.main-container_container {
  border-radius: 0px 20px 20px 0px;
  width: 100%;
  background-color: var(--theme);
}

.social-icons {
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

.boton-primario{
  background:transparent;
  
  padding:10px 40px;
  font-size: medium;
  border-radius:100px ;
  border: solid var(--secondary) 2px;
  color: var(--text-theme);
  cursor: pointer;
  transition: ease-in-out 0.5s background;
}
.boton-primario:hover{
  background:var(--secondary);
  
  }
h3{
    color:var(--secondary);
}
@media screen and (max-width: 1000px) {
}
</style>
