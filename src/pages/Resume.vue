<template>
  <div data-aos="fade-up" class="container overflow-auto">
    <h1>Resumen</h1>
    <div class="row">
      <div class="col-md-6">
        <h3>Educacion</h3>
        <div class="ed">
          <div class="ed-title">UNIVERSIDAD POLITÉCNICA NACIONAL</div>
          <p class="ed-date">(agosto 2016 - Presente)</p>
          <p class="ed-content">
            Ingeniería de sistemas informáticos y de computación
          </p>
        </div>
        <div class="ed">
          <div class="ed-title">UNIDAD EDUCATIVA VICENTE FIERRO</div>
          <p class="ed-date">(- julio 2015)</p>
          <p class="ed-content">
            Bachiller Técnico industrial en Electrónica de Consumo
          </p>
        </div>
        <div class="ed">
          <div class="ed-title">CENTRO DE EDUCACION CONTINUA-EPN</div>
          <p class="ed-date">(2017-2019)</p>
          <p class="ed-content">Ingles Avanzado 2</p>
        </div>
      </div>
      <div class="col-md-6">
        <h3>Lenguajes de programación</h3>
        <p class="label-progress">Javascript</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 90%;"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            95%
          </div>
        </div>
        <p class="label-progress">Typescript</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 80%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <p class="label-progress">Java</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 80%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <p class="label-progress">Kotlin</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 80%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <p class="label-progress">Python</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%;"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <h3>Frameworks</h3>
        <p class="label-progress">Angular 9+</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 90%;"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            90%
          </div>
        </div>
        <p class="label-progress">Vue 3</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%;"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <p class="label-progress">React</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%;"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
        </div>
        <p class="label-progress">Ionic 4+</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 80%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h3>Certificados</h3>
      <div class="row">
        <div v-for="image in images" :key="image" class="col-md-4">
          <img class="img-fluid mt-2 gallery-item" v-bind:src="image" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                 <ModalImage v-bind:urlImage=image />
        </div>
   
      </div>
    </div>
  </div>
</template>
<script>
import ModalImage from "../components/ModalImage";
export default {
  name: "Resume",
  components: {
    ModalImage,
  },
  data() {
    return {
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
};
</script>
<style scoped>
.progress-bar {
  background: var(--primary);
}

.row {
  margin-top: 2rem;
}
.gallery-item{
     cursor: pointer;
}
.gallery-item:hover {
   
  transform: scale(1.1);
  transition: transform 0.5s;
}
.ed {
  margin-bottom: 3rem;
}
.ed-title::after {
  content: "";
  display: block;
  height: 3px;
  widows: 100%;
  background: var(--secondary);
}
.ed > .ed-title {
  color: var(--primary);
}
.ed > .ed-date {
  color: var(--thertiary);
  font-style: italic;
}
@media only screen and (max-width: 765px) {
    .gallery-item:hover {
  transform: none
}

}
</style>
