<template>
  <v-row>
    <v-col class="v-col-12 d-inline-flex" v-for="item in business_news" :key="item.id">
      <v-card class="v-col-12" style='border: 1px solid rgba(225,63,7,0.47)' >
        <h3 class="float-right" style="color: orangered;opacity: .8;font-size: 12px;"> business news</h3>
        <h2 style="color: rgba(255,69,0,0.77);font-size: 15px;" class="font-weight-bold">{{item.name}}</h2>
        <p style="font-size: 12px;color: rgba(34,34,34,0.89)" class="font-weight-bold">{{item.description}}</p>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import {useNewsStore} from "@/store/news_store.js";
import {toRefs} from "vue";
const newStore = useNewsStore()
const {business_news} = toRefs(newStore)
</script>
