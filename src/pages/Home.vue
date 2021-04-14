<template>
  <div data-aos="fade-up" class="home-container">
    <h1 class="titulo">Jeferson  <span class="typewritter">{{textoEfecto}}</span></h1>
    <p>
      Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Vivamus
      magna justo, lacinia eget consectetur sed, convallis at tellus.
    </p>
  </div>
</template>
<script>
export default {
  name: "Home",
  data(){
   return { textoOriginal:'Narvaez ',textoEfecto:'',reloj:null}
  } ,
  mounted(){
    this.impresora()
  },
  methods:{
    impresora(){
      this.reiniciar()
      let i=-1
      this.reloj=setInterval(()=>{
          i++
          const x=i%this.textoOriginal.length  
          this.textoEfecto+=this.textoOriginal[x]

      },300)
    },
    reiniciar(){
      clearInterval(this.reloj)
      this.textoEfecto=''
    }
  },
  watch:{
    textoEfecto:function(){
      if(this.textoEfecto.length==this.textoOriginal.length){
          this.textoEfecto=''
      }
    }
  } 
   
}
</script>
<style scoped>
.home-container {
  margin: 2rem;
  height: 90%;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo{
  align-self: flex-start;
  font-size: 3rem;
  margin-bottom: 10vh;
}
.typewritter{
  color: var(--secondary);
  border-right: 2px var(--secondary) solid;
  animation: titilar 0.4s infinite ;
}
@keyframes titilar {
  from {border-right: 2px var(--secondary) solid ;}
  to{ border-right: 2px transparent solid ;}
}

</style>
