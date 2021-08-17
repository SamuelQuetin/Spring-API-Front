<template>
  <v-parallax
      src="https://cdn.cstj.qc.ca/wp-content/uploads/2020/01/17103643/bibliothe%CC%80que-2952871.jpg"
  >
    <v-card class="book-detail" v-if="book">

      <div v-if="!isUpdate">
        <h3>{{ book.title }}</h3>
        <h4>{{ book.author }}</h4>
        <p>{{ book.description }}</p>
        <v-btn @click="updateBook">update</v-btn>
      </div>
      <div v-if="isUpdate">
        <v-form
            ref="form"
            action="#"
            @submit="saveBook"
            v-model="valid"><p>Title</p>
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
          <v-btn type="submit" value="save">save</v-btn>
          <br>
        </v-form>
      </div>
    </v-card>
  </v-parallax>
</template>

<script>
import axios from "axios";

export default {
  name: "BookDetail",
  props: ['id'],
  data() {
    return {
      isUpdate: false,
      book: null,
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
.book-detail {
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}
</style>