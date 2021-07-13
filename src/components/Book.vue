<template>
  <div class="book" v-if="!isDelete">
    <button v-on:click="deleteBook">Delete</button>
    <h3>{{ book.title }}</h3>
    <h4>{{ book.author }}</h4>
    <p>{{ book.description }}</p>
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
      //TODO: leave choice to cancel with a better alert
      alert("deleting of the book \""  + this.book.title+ " \"");
      axios.delete(process.env.VUE_APP_URL+"/api/deleteBook/"+this.book.id);
      this.isDelete = true;
    },
  },
};
</script>

<style scoped>
.book {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}

.book:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
