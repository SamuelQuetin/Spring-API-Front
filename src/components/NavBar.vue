<template>
  <nav>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-toolbar-title
          @click="$router.push('/')"
          class="display-1 Bold text"
          style="cursor:pointer">Hello-Abes
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-for="link in links" :key="link.text">
        <v-btn
            :to="link.route"
            text
        >
          <span class="mr-2">{{ link.namePage }}</span>
        </v-btn>
      </div>

    </v-app-bar>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  data: () => ({
    links: [
      {'namePage': 'Home of Book', 'route': '/'},
      {'namePage': 'Useless', 'route': '/useless'},
    ]
  }),
}

</script>