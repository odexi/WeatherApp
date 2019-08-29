<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Varma</span>
        <span class="font-weight-light">SÄÄ</span>
      </v-toolbar-title>
      
    </v-app-bar>

    <v-content>
        <Weather/>
    </v-content>
  </v-app>
</template>

<script>
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
    Weather,
  },
  data: () => ({
    //
  }),
};
</script>
