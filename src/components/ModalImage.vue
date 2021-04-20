<template>
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title " id="exampleModalLabel">Certificado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body mx-auto ">
       <img class="img-fluid bg-dark"  v-bind:src="urlImage">
      </div>
    </div>
  </div>
</div>
 
</template>
<script>
export default {
    name:'ModalImage',
    props:{urlImage:String}
    
}
</script>
<style scoped>
.img-fluid{
align-self: center;
}
</style>