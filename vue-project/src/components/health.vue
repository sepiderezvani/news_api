<template>
  <v-row>
    <v-col class="v-col-12 d-inline-flex" v-for="item in health_news" :key="item.id">
      <v-card class="v-col-12" style="border: 1px solid rgba(0,0,255,0.38)">
        <h3 class="float-right" style="color: blue;opacity: .8;font-size: 12px;">health news</h3>
        <h2 class="font-weight-bold" style="color: rgba(0,0,255,0.66);font-size: 15px;">{{item.name}}</h2>
        <p class="font-weight-bold" style="color: rgba(34,34,34,0.89);font-size: 12px;">{{item.description}}</p>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import {useNewsStore} from "@/store/news_store.js";
import {toRefs} from "vue";
const newStore = useNewsStore()
const {health_news} = toRefs(newStore)
</script>
