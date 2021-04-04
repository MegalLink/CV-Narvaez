<template>
<div class="main-container">
  <div class="main-container_profile">
      <img class="profile-image" src="./assets/images/perfil.png" />
      <h2>Jeferson Narváez</h2>
      <p> Desarrollador Web  </p>
      <ul>Social links</ul>
      <button>Descargar CV</button>

  </div>
        <div class="main-container_container">
               <router-view></router-view>
        </div>
        
</div>  
<Nav/>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components:{Nav}
  
}
</script>
<style >

*{
  margin:0;
}
#app{
--theme:#262626;
--text-theme:#ffff;
--primay:#4d6de7;
--secondary:#f05657;
  display: flex;
justify-content: center;
width:  100vw;
height: 100vh;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
align-items: center;
}

.main-container{
  width: 85%;
  height: 80%;
  border-radius: 20px;
  display: flex;
 
}



.main-container_profile{
  background:var(--primay);
  color: var(--text-theme);
  border-radius: 20px 0px 0px 20px;
  width:400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.profile-image{
  height: 220px;
  width: 200px;
  background: var(--text-theme);
  border-radius: 100px;
}
.main-container_container{
  border-radius: 0px 20px 20px 0px;
  width: 100%;
  background-color:var(--theme);
}




@media screen and (max-width:1000px){

}
</style>
