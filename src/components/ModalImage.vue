<template>
   <div v-if="active"  class="modal-contenedor">
    
<img class="img-fluid" v-bind:src="urlImage" >
 <button @click="$emit('click')" class="btn btn-danger mt-2">Cerrar</button>
           

   </div>
</template>
<script>
export default {
    name:'ModalImage',
    
    props:{
        active:Boolean,urlImage:String
    },methods: {
   
  }
}
</script>
<style scoped>
.modal-contenedor{
     position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(60,60,60,0.5);
}
.modal-contenedor>img{
    width: 80vw;
    height: 80vh;
}
button{
    background: var(--secondary);
}
</style>