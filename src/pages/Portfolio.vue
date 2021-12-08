<template>
<div data-aos="fade-up" class="container overflow-auto">
   <h3>Certificados</h3>
      <div class="row">
        <div v-for="image in images" :key="image" class="col-md-4">
          <img class="img-fluid mt-2 gallery-item" @click="setImage(image)" :src="image" data-bs-toggle="modal" data-bs-target="#imageModal" />
        </div>
      </div>

<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Certificado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img :src="urlImg" class="img-modal-width" alt="certificado">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>  
</div>

</template>
<script>
export default {
    name:'Portfolio',
    components: {
   
  },
  methods:{
      setImage(image){
          this.urlImg=image
          console.log(this.urlImg)
      }
  },
  data() {
    return {
      urlImg:"https://i.ibb.co/yYQnv0c/image.png",
      images: [
        "https://i.ibb.co/s3XNn1P/image.png",
        "https://i.ibb.co/LpVb8Xd/image.png",
        "https://i.ibb.co/yYQnv0c/image.png",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-8f548292-e2eb-44f6-8a99-96cbe02a020d.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-a595d303-ffc4-486b-bf03-5885dd3d1eee.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-3de25aa5-83f2-480c-897c-e5b2611b500c.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-dbd75754-b486-4b3e-b027-e4270dfce1f8.jpg",
        "https://udemy-certificate.s3.amazonaws.com/image/UC-7113bc1f-0c8e-4d14-9fe6-89773d4ee2bf.jpg",
      ],
    };
  },
}
</script>
<style scoped>
.img-modal-width{
  width: 100%;
}
@media only screen and (max-width: 765px) {
    .gallery-item:hover {
  transform: none
}
}
</style>