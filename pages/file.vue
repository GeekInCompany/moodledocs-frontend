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
          <v-list-item-title>Skript Kapitel 1</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Skript Kapitel 2</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>Skript Kapitel 3</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
