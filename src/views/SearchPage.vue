<template>
  <div>
    <v-parallax
        src="https://cdn.cstj.qc.ca/wp-content/uploads/2020/01/17103643/bibliothe%CC%80que-2952871.jpg"
        height="350"
    >
      <v-card>
        <h1>
          Book's search
        </h1>
        <v-form>
          <v-text-field v-model="keyword">field</v-text-field>
          <v-btn @click="search"
                 :disabled="!keyword">Search</v-btn>
        </v-form>
      </v-card>

    </v-parallax>
    <div class="lineBook">
      <book v-for="book in books" :key="book.id" :book="book"></book>
    </div>
    <h3 v-if="books.length === 0">Zero result</h3>
  </div>
</template>

<script>
import axios from "axios";
import Book from "@/components/Book";

export default {
  name: "SearchPage",
  components: {
    Book: Book
  },
  data() {
    return {
      keyword: "",
      books: {}
    }
  },
  methods: {
    search: function () {
      axios
          .get(process.env.VUE_APP_URL + "/api/getBooksByKeyword/" + this.keyword)
          .then((response) => {
            this.books = response.data;
          });
      console.log(this.books);
    }
  }
}
</script>

<style scoped>
.v-form {
  padding: 2.5%;
}

.lineBook {
  padding: 2.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
}
</style>