<template>
    <v-container class="mx-auto v-col-xxl-12 mt-10" style="width: 100vw;height: auto;box-shadow: 1px 2px 5px #777" >
      <router-link style="font-size: 10px;" class="font-weight-bold" to="/">
        <v-btn style="font-size: 12px;" class="">back to home</v-btn>
      </router-link>
      <v-row class="v-col-12">
        <v-col v-if="details" class="mx-auto v-col-8 ml-16 mt-16">
          <div class="d-inline-flex">
            <img class="v-col-8" width="400px" height="400px" :src="details.image" alt="">
            <div class="float-right v-col-6 align-content-center">
              <p style="font-size: 25px;color: navy" class="font-weight-bold mb-5">{{ details.title }}</p>
              <p style="color: #2c3e50">{{ details.description }}</p>
            </div>
          </div>
          <p class="text-blue">Author: {{ details.author }}</p>
          <hr>
          <span>{{ details.time }}</span>
        </v-col>
        <v-col class="v-col-2" style="height: 600px;overflow: auto">
          <v-card v-for="news in news_image" :key="news.id" style="padding: 18px">
            <router-link style="color: #222222" :to="{name : 'news' , params :{title :news.title}}">
              <div style="width: 130px;height: 115px"><img style="width: 100%;height: 100%" :src="news.image"></div>
              <h4 class="font-weight-medium" style="padding: 1px;font-size: 11px;line-height: 15px">
                {{ news.title }}</h4>
            </router-link>
            <!--            <p>{{ news.description }}</p>-->
            <span style="font-size: 12px;color: cornflowerblue">{{ news.author }}</span>
            <hr>
            <span style="font-size: 10px;color: #7c6f6f">{{ news.time }}</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script setup>
import {useNewsStore} from "@/store/news_store.js";
import {toRefs} from "vue";
import SearchInput from "@/components/searchInput.vue";
const newStore = useNewsStore()
const {news_image , details} =toRefs(newStore)

</script>
