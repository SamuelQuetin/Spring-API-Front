<template>
  <div class="home">
    <add-livre/>
    <livre v-for="livre in livres" :key="livre.id" :livre="livre"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Livre from "@/components/Livre.vue";
import axios from "axios"
import AddLivre from "@/components/addLivre";

export default {
  name: "Home",
  components: {
    AddLivre,
    Livre,
  },
  data() {
    return {
      livres: {}
    }
  },
  created() {
    axios.get('http://localhost:8080/api/getLivres')
    .then( response => {this.livres = response.data;})
    .catch(error => console.log(error))
  }

};
</script>
