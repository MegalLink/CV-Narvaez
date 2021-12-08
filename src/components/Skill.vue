<template>
    <p class="label-progress">{{title}}</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            v-bind:style="{width: percentage + '%'}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{percentage}}%
          </div>
        </div>
</template>
<script>
export default {
    name:'Skill',
    props:{title:String,percentage:String}
}
</script>
<style scoped>
.progress-bar {
  background: var(--primary);
}
</style>
