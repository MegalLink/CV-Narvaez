<template>
  <div class="main-nav">
    <div>
      <ul class="icons-container">
        <router-link to="/" exact active-class="active-route"
          ><span class="icon-span">Inicio</span><i class="fas fa-home"></i
        ></router-link>
        <router-link to="/about" active-class="active-route"
          ><span class="icon-span">Sobre mi</span><i class="fas fa-user-alt"></i
        ></router-link>
        <router-link to="/resume" active-class="active-route"
          ><span class="icon-span">Resumen</span
          ><i class="fas fa-graduation-cap"></i
        ></router-link>
        <router-link to="/portfolio" active-class="active-route"
          ><span class="icon-span">Portafolio</span
          ><i class="fas fa-briefcase"></i
        ></router-link>
        <router-link to="/blog" active-class="active-route"
          ><span class="icon-span">Blog</span><i class="fas fa-book"></i
        ></router-link>
        <router-link to="/contact" active-class="active-route"
          ><span class="icon-span">Contacto</span><i class="fas fa-phone"></i
        ></router-link>
        <div class="siguiente" @click="goNext">
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div class="anterior" @click="goBack">
          <i class="fas fa-chevron-circle-left"></i>
        </div>
      </ul>
    </div>
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
  margin-left: 1rem;
  padding-right: 15px;
  width: 6rem;
  background: var(--primay);
  height: 80%;
  border-radius: 50px;
}
.main-nav > div {
  height: 100%;
}
.main-nav > div > ul {
  list-style: none;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  color: var(--text-theme);
}
.icons-container {
  margin: 0;
  font-size: 2rem;
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
  right: 10%;
  background: var(--secondary);
  color: var(--text-theme);
  padding: 8px;
  border-radius: 5px;
  visibility: hidden;
}
.icons-container > *:hover > .icon-span {
  visibility: visible;
}
</style>
