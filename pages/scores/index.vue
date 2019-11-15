<template>
  <v-layout column justify-center align-center>
    <div class="text-center">
      <logo />
    </div>
    <v-card class="d-flex flex-column">
      <v-card-title class="headline">
        Globaler Benutzerscore
      </v-card-title>
      <v-list-item>
        <v-list-item-title>Linus Torvalds : 1337</v-list-item-title>
        <v-list-item-content> 1337</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Chuck Norris : 42</v-list-item-title>
        <v-list-item-content> 42</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Bruce Willis : 13</v-list-item-title>
        <v-list-item-content>13</v-list-item-content>
      </v-list-item>
    </v-card>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>
