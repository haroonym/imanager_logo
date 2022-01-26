<template>
  <v-app>
    <v-main>
      <v-app-bar color="white accent-4" dark app>
        <v-toolbar-title>
          <v-img src="./assets/imanager.png" width="50px" class="mr-3"></v-img>
        </v-toolbar-title>
        <h3 class="black--text">iManager</h3>
      </v-app-bar>
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
