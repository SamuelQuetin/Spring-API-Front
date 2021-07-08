<template>
  <div class="livre">
    <h3>{{ livre.titre }}</h3>
    <h4>{{ livre.auteur }}</h4>
    <p>{{ livre.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    livre: {
      type: Object,
      required: true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.livre {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.livre:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
