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
      <div class="col-md-6 mb-2">
        <h3>Lenguajes de programación</h3>
        <skill v-for="i in languages" :key="i.title" :title="i.title" :percentage="i.percentage" ></skill>
        <h3>Frameworks/Libraries</h3>
         <skill v-for="i in otherSkills" :key="i.title" :title="i.title" :percentage="i.percentage" ></skill>
      </div>
    </div>
  </div>
</template>
<script>
import Skill from "../components/Skill.vue";
export default {
  name: "Resume",
  components: { Skill },
  data(){
    return {
      languages:[
      {title:"Javascript",percentage:"90"},
      {title:"GO",percentage:"80"},
      {title:"Typescript",percentage:"80"},
      {title:"Kotlin",percentage:"70"},
      {title:"Java",percentage:"60"},
      ],
      otherSkills:[
      {title:"Angular 9+",percentage:"90"},
      {title:"Vue 3",percentage:"70"},
      {title:"React",percentage:"70"},
      {title:"Ionic 4+",percentage:"80"},
      ]
      }
  }
};
</script>
<style scoped>

.row {
  margin-top: 2rem;
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
</style>
