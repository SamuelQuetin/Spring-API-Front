<template>
  <h1>Livre</h1>

  <form action="#" @submit="send" >
    <p>Author</p>
    <input type="text" v-model="livre.author" name="author">
    <p>Title</p>
    <input type="text" v-model="livre.title" name="title">
    <p>Description</p>
    <input type="text" v-model="livre.description" name="description">
    <input type="submit" value="submit">
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "addLivre",
  data() {
    return {
      livre: {}
    }
  },
  methods:{
    send: function (){
      console.log(this.livre);
      axios.post("http://localhost:8080/api/postLivre",this.livre);
    }
  }
}
</script>

<style scoped>

</style>