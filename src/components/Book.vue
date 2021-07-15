<template>
  <div class="book" v-if="!isDelete">


    <button v-on:click="deleteBook">Delete</button>
    <h3>{{ book.title }}</h3>
    <h4>{{ book.author }}</h4>
    <p v-if="book.description.length < 60">{{ book.description }}</p>
    <div v-if="book.description.length >= 60">
      <p>{{ book.description.substr(0,20) }}... </p>
    </div>
    <router-link class="book-link" :to="{name: 'BookDetail', params: {id: book.id} }">[More detail]</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDelete: false,
    };
  },
  methods: {
    deleteBook: function () {
      if(confirm("deleting the book \""  + this.book.title+ "\" de "+ this.book.author)) {
        axios.delete(process.env.VUE_APP_URL + "/api/deleteBook/" + this.book.id);
        this.isDelete = true;
      }
    },
  },
};
</script>

<style scoped>
.book {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}

.book:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
}

.book-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
