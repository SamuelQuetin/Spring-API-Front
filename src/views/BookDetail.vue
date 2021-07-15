<template>
  <div class="book-detail" v-if="book">
    <h3>{{ book.title }}</h3>
    <h4>{{ book.author }}</h4>
    <p>{{ book.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookDetail",
    props: ['id'],
  data() {
    return{
      book: null
    }
  },
  created() {
    axios.get(process.env.VUE_APP_URL+"/api/getBook/"+this.id)
        .then((response) => {
          this.book = response.data;
        })
        .catch((error) => console.log(error));
  }
}
</script>

<style scoped>

</style>