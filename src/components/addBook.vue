<template>
  <div id="addblock">
    <v-card elevation="12">
      <v-card-title> New Book </v-card-title>
      <v-form
          ref="form"
          action="#"
          @submit="send"
          v-model="valid">
        <p>Title</p>
        <v-text-field
            v-model="book.title"
            :rules="titleRules"
            name="title"
            placeholder="book's title"
            required/>
        <p>Author</p>
        <v-text-field
            type="text"
            v-model="book.author"
            name="author"
            placeholder="author's name"
            :rules="authorRules"
            required/>
        <p>Description</p>
        <v-textarea
            clearable
            clear-icon="X"
            v-model="book.description"
            name="description"
            placeholder="description"
            :rules="descriptionRules"
            required/>
        <br/>
        <v-btn
            :disabled="!valid"
            type="submit"
            value="add">
          add {{ book.title }}
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "addBook",
  data() {
    return {
      book: {},
      valid: true,
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 100) || 'Title must be less than 100 characters',
      ],
      authorRules: [
        v => !!v || 'Author is required',
        v => (v && v.length <= 50) || 'Author must be less than 50 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 500) || 'Description must be less than 500 characters',
      ],
    }
  },
  methods: {
    send: function () {
      axios.post(process.env.VUE_APP_URL + "/api/postBook", this.book);
      this.$store.commit('addBook');
      console.log(this.$store.state.nbBooks);
    }
  }
}
</script>

<style scoped>
.addblock {
  width: 10px;
  height: 10px;
}
</style>