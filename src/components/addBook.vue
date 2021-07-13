<template>
  <h1>Book</h1>

  <form action="#" @submit="send" >
    <p>Author</p>
    <input type="text" v-model="book.author" name="author">
    <p>Title</p>
    <input type="text" v-model="book.title" name="title">
    <p>Description</p>
    <input type="text" v-model="book.description" name="description">
    <br/>
    <input type="submit" value="add">
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
      axios.post(process.env.VUE_APP_URL+"/api/postBook",this.book);
    }
  }
}
</script>

<style scoped>

</style>