<template>
  <v-row>
    <v-col class="v-col-12 d-inline-flex" v-for="item in sport_news" :key="item.id">
      <v-card class="v-col-12 " style="border: 1px solid rgba(0,100,0,0.25)">
        <h3 class="float-right" style="color: darkgreen;opacity: .7;font-size: 12px;">sports news</h3>
        <h2 class="font-weight-bold" style="color: rgba(0,100,43,0.73);font-size: 15px;">{{item.name}}</h2>
        <p style="font-size: 12px;color: rgba(34,34,34,0.89)" class="font-weight-bold">{{item.description}}</p>

      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import {useNewsStore} from "@/store/news_store.js";
import {toRefs} from "vue";
const newStore = useNewsStore()
const {sport_news} = toRefs(newStore)
</script>
