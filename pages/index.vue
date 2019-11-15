<template>
  <v-layout column justify-center align-center>
    <div class="text-center">
      <logo />
    </div>
    <v-card class="d-flex flex-column">
      <v-card-title class="headline">
        Welche Datei wollen sie Bearbeiten
      </v-card-title>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            ><nuxt-link to="/doc/skript1"
              >Skript Kapitel 1</nuxt-link
            ></v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-content>
          <nuxt-link to="/doc/skript2">Skript Kapitel 2</nuxt-link>
        </v-list-item-content>
        <v-list-item-content>
          <nuxt-link to="/doc/skript3">Skript Kapitel 3</nuxt-link>
        </v-list-item-content>
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
