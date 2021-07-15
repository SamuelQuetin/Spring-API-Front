<template>
  <div class="book-detail" v-if="book">
    <div v-if="!isUpdate">
      <h3>{{ book.title }}</h3>
      <h4>{{ book.author }}</h4>
      <p>{{ book.description }}</p>
      <button v-on:click="updateBook">update ?</button>
    </div>
    <div v-if="isUpdate">
      <form action="#" @submit="saveBook">
        <p>Title</p>
        <input type="text" v-model="book.title" name="title" placeholder="book's title">
        <p>Author</p>
        <input type="text" v-model="book.author" name="author" placeholder="author's name">
        <p>Description</p>
        <textarea v-model="book.description" name="description" placeholder="description"/>
        <br/>
        <br/>
        <input type="submit" value="save">
        <br>
        <p></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookDetail",
  props: ['id'],
  data() {
    return {
      isUpdate: false,
      book: null
    }
  },
  created() {
    axios.get(process.env.VUE_APP_URL + "/api/getBook/" + this.id)
        .then((response) => {
          this.book = response.data;
        })
        .catch((error) => console.log(error));
  },
  methods: {
    updateBook: function () {
      this.isUpdate = true;
    },
    saveBook: function () {
      this.isUpdate = false;
      axios.put(process.env.VUE_APP_URL + "/api/updateBook/" + this.book.id, this.book);
    },
  },
}
</script>

<style scoped>

</style>