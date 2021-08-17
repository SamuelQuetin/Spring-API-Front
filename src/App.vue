<template>

  <div id="app">
    <v-app>
<!--          src="https://cdn.cstj.qc.ca/wp-content/uploads/2020/01/17103643/bibliothe%CC%80que-2952871.jpg"-->
      <v-main>
        <router-link to="/">Home of Book</router-link>
        <router-link to="/useless">useless page</router-link>

        <router-view/>
      </v-main>

    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#inspire img {
  height: 100%;
  width: 100%;
  transform: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
