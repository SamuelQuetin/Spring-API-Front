<template>
  <v-card elevation="24" class="book" v-if="!isDelete">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Delete
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Are you sure you want to delete {{book.title}}
        </v-card-title>
        <v-card-text>Are you sure you want to delete {{book.title}} ?? ?? ??</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            not delete
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="deleteBook"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <h3>{{ book.title }}</h3>
    <h4>{{ book.author }}</h4>
    <p v-if="book.description.length < 60">{{ book.description }}</p>
    <div v-if="book.description.length >= 60">
      <p>{{ book.description.substr(0, 20) }}... </p>
    </div>
    <router-link class="book-link" :to="{name: 'BookDetail', params: {id: book.id} }">[More detail]</router-link>
  </v-card>
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
      dialog: false,
    };
  },
  methods: {
    deleteBook: function () {
        axios.delete(process.env.VUE_APP_URL + "/api/deleteBook/" + this.book.id);
        this.isDelete = true;
        this.dialog = false;
        this.$store.commit('deleteBook');
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
