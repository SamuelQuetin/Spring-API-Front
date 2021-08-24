<template>
  <div class="home">
    <v-parallax
        src="https://cdn.cstj.qc.ca/wp-content/uploads/2020/01/17103643/bibliothe%CC%80que-2952871.jpg"
        height="750"
    >
      <v-card>
        <h1>Book</h1>
        <h2>Nombre de livre stocké : {{ $store.state.nbBooks }}</h2>
      </v-card>
      <br>
      <add-book></add-book>
      <br>

    </v-parallax>


    <br/>
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
        .get(process.env.VUE_APP_URL + "/api/getBooks")
        .then((response) => {
          this.books = response.data;
          this.$store.commit("updateBook", this.books.length);
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
  flex-grow: 1;
}

#addblock {
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
</style>
