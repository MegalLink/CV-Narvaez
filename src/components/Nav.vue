<template>
  <div class="main-nav p-2">
      <ul class="icons-container">
        <router-link class="router-link" to="/" exact active-class="active-route"
          ><span class="icon-span">Inicio</span><i class="fas fa-home"></i
        ></router-link>
        <router-link class="router-link" to="/about" active-class="active-route"
          ><span class="icon-span">Sobre mi</span><i class="fas fa-user-alt"></i
        ></router-link>
        <router-link class="router-link" to="/resume" active-class="active-route"
          ><span class="icon-span">Resumen</span
          ><i class="fas fa-graduation-cap"></i
        ></router-link>
        <router-link class="router-link" to="/portfolio" active-class="active-route"
          ><span class="icon-span">Certificados</span
          ><i class="fas fa-briefcase"></i
        ></router-link>
        <div class="siguiente" @click="goNext">
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div class="anterior" @click="goBack">
          <i class="fas fa-chevron-circle-left"></i>
        </div>
      </ul>
    
  </div>
</template>
<script>
export default {
  name: "Nav",
  data(){return {
      rutas:this.$router.options.routes,
      }},
  methods: {

    goNext() {
      
      this.rutas.forEach((element,index,rts) => {
          if(element.path===this.$route.path){
              try{
                   this.$router.push(rts[index+1].path)
              }catch{
                  this.$router.push(rts[0].path)
              }           
                  
          }
      });
      
      
    },
    goBack() {
        const len=this.rutas.length
        console.log(len)
       this.rutas.forEach((element,index,rts) => {
          if(element.path===this.$route.path){
              try{
                   this.$router.push(rts[index-1].path)
              }catch{
                  this.$router.push(rts[len-1].path)
              }           
                  
          }
      });
    },
  },
  
};
</script>
<style scoped>
.main-nav {
  background: var(--primary);
  border-radius: 50px;
}

.main-nav> ul {
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  color: var(--text-theme);
}
.icons-container {
  margin: 0;
  font-size: 2rem;
  height: 100%;
}
.icons-container > * {
  color: var(--text-theme);
}
.icons-container > *:hover {
  color: var(--secondary);
}
.active-route {
  color: var(--secondary);
}
.icon-span {
  position: absolute;
  font-size: 20px;
  right: 5%;
  background: var(--secondary);
  color: var(--text-theme);
  padding: 8px;
  border-radius: 5px;
  visibility: hidden;
}
.icons-container > *:hover > .icon-span {
  visibility: visible;
}
@media only screen and (max-width: 765px) {
  .main-nav{
    border-radius:0;
    width: 100%;
    position: fixed;
    bottom: 0;
    order: 2;

  }
 .main-nav>ul{
    flex-direction: row;
    padding: 0rem;
 }
 .icon-span{
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 0;
   width: 100vw;
   padding: 0.8rem;
   
 }
 .siguiente{
   order: 2;
 }

}

</style>
