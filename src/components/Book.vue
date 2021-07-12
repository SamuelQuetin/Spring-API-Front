<template>
  <div class="book">
    <h3>{{ book.title }}</h3>
    <h4>{{ book.author }}</h4>
    <p>{{ book.description }}</p>
<!--    <button v-on:click="clicked(livre.id)">Get Livre</button>-->

  </div>
</template>

<script>

// function clicked(element) {
//   console.log('atest('+element+')');
// }

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  // methods: clicked(),
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
