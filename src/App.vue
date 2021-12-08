<template>
<particles-bg type="cobweb" num=200 color="#ffffff" :canvas="{backgroundColor:'#0A2239'}" :bg="true"/>
  <div class="main-container">
    <Profile />
    <div class="main-container_container">
      <router-view></router-view>
    </div>
    <Nav />
  </div>
</template>

<script>
//"color""lines""thick""circle""cobweb""tadpole""fountain""random""custom"
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "App",
  components: { Nav, Profile,ParticlesBg },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  /* #262626 */
  --theme:#fff ;
  --text-theme:#fff ;
  --primary: #4d6de7;
  --secondary: #f05657;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
}
.container{
    height: 90%;
    margin: 1rem;
}
.main-container {
  width: 100%;
  height: 80%;
  border-radius: 20px;
  display: flex;
  margin: 0 1rem;
}
.main-container_container {
  margin: 0 1rem;
  border-radius: 20px;
  width: 100%;
  background-color: var(--theme);
}
h3{
    color:var(--secondary);
}
@media only screen and (max-width: 765px) {
.main-container{
    margin: 0;
   }
  .main-container_container {
    margin: 0;
    border-radius: 0;
  }
  .main-container{
    height: 100%;
    flex-direction: column;
  }
  .container{
    height: 90vh;
    margin-top: 3.5rem;
    padding-bottom: 3rem;
  }
  
}

</style>
