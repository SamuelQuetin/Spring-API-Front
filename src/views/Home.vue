<template>
  <div class="home">
    <livre v-for="livre in livres" :key="livre.id" :livre="livre"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Livre from "@/components/Livre.vue";

export default {
  name: "Home",
  components: {
    Livre,
  },
  data() {
    return {
      livres:
          [
            {
              id: 1,
              titre: 'titre',
              auteur: 'auteur',
              description: 'fdeafjalk elk jflakejmalk jlkfjaejk lahfjh a'
            },
            {
              id: 2,
              titre: 'titre2',
              auteur: '2auteur',
              description: 'fdeafj2alk elk jflakejmalk jlkfjaejk lahfjh a'
            },
            {
              id: 3,
              titre: 'ti3tre',
              auteur: 'aute3ur',
              description: 'fdea3fjalk elk jflakejmalk jlkfjaejk lahfjh a'
            }
          ]
    }
  }

};
</script>
