<template>
  <v-row>
    <v-col>
      <v-form class="d-inline-flex v-col-12">
        <v-text-field variant="outlined" class="v-col-10 pb-0" placeholder="search where you know" v-model="country" style=""></v-text-field>
        <v-btn class="v-col-1 mt-5 pt-5 pb-5 align-content-center" @click="get_news_country" @keyup.enter="get_news_country">search</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<script setup>
import {useNewsStore} from "@/store/news_store.js";
import {toRefs} from "vue";
const newStore = useNewsStore()
const {country} = toRefs(newStore)
const {get_news_country} = newStore
</script>
