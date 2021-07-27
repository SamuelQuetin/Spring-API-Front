<template>
  <h1>Book</h1>

  <form action="#" @submit="send">
    <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <li v-for="error in errors" :key="error">{{ error }}</li>
    </div>
    <p>Title</p>
    <input type="text" v-model="book.title" name="title" placeholder="book's title">
    <p>Author</p>
    <input type="text" v-model="book.author" name="author" placeholder="author's name">
    <p>Description</p>
    <textarea v-model="book.description" name="description" placeholder="description"/>
    <br/>
    <br/>
    <input type="submit" value="add">
    <br>
    <p> </p>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "addBook",
  data() {
    return {
      errors: [],
      book: {}
    }
  },
  methods: {
    send: function () {
      this.errors = [];
      if (!this.book.title)
        this.errors.push("the title is missing");
      if (!this.book.author)
        this.errors.push("the author name is missing");
      if (!this.book.description)
        this.errors.push("the description is missing");
      if (this.errors.length === 0) {
        axios.post(process.env.VUE_APP_URL + "/api/postBook", this.book);
        this.$store.commit('addBook');
        console.log(this.$store.state.nbBooks);
      }
    }
  }
}
</script>

<style scoped>

</style>