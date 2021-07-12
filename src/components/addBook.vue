<template>
  <h1>Book</h1>

  <form action="#" @submit="send" >
    <p>Author</p>
    <input type="text" v-model="book.author" name="author">
    <p>Title</p>
    <input type="text" v-model="book.title" name="title">
    <p>Description</p>
    <input type="text" v-model="book.description" name="description">
    <input type="submit" value="submit">
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "addBook",
  data() {
    return {
      book: {}
    }
  },
  methods:{
    send: function (){
      console.log(this.book);
      axios.post("http://localhost:8080/api/postLivre",this.book);
    }
  }
}
</script>

<style scoped>

</style>