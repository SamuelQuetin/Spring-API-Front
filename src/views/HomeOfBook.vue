<template>
  <div class="home">
    <add-book></add-book>
    <div class="lineBook">
      <book v-for="book in books" :key="book.id" :book="book"></book>
    </div>
  </div>
</template>

<script>

import Book from "@/components/Book.vue";
import axios from "axios";
import AddBook from "@/components/addBook";

export default {
  name: "Home",
  components: {
    AddBook: AddBook,
    Book: Book,
  },
  data() {
    return {
      books: {},
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_URL+"/api/getBooks")
      .then((response) => {
        this.books = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped>

.lineBook {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;


}
</style>