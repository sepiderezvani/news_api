<template>
  <div>
    <v-row>
      <search-input/>
    </v-row>
    <v-container v-if="loaded && !noResults.value" class="v-col-xl-12"
                 style="width: 100vw ; height: auto;position:relative">
      <h2 class="ml-5">latest news</h2>
      <v-row class="v-col-12 d-inline-flex">
        <v-col class="v-col-2">
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
        <v-col v-if="!noResults.value" v-for="item in main_news" class="v-col-6">
          <img style="position:relative;" width="550px" height="380px" :src="item.image" alt="">
          <p style="position:relative;top:-100px;width: 500px;color: white;font-family: Roboto, sans-serif;"
             class="pl-10 font-weight-bold">{{ item.title }}</p>
          <p class="font-weight-bold" style="margin-top: -25px;padding: 0 5px;font-family: Roboto, sans-serif;">
            {{ item.description }}</p>
          <div style="background-color:#eceeee;border-radius: 10px;">
            <v-col class="v-col-8 mx-auto mt-5 mb-5" style="padding: 15px;">
              <router-link class="mr-1 font-weight-bold" style="padding: 15px;color:#333" to="/business">
                <span class="font-weight-bold" style="color: orangered">B</span>usiness
              </router-link>
              <router-link class="mr-1 font-weight-bold" style="padding: 15px;color: #333" to="/health">
                <span class="font-weight-bold" style="color: blue">H</span>ealth
              </router-link>
              <router-link class="mr-1 font-weight-bold" style="padding: 15px;color: #333" to="/sports">
                <span class="font-weight-bold" style="color: darkgreen">S</span>port
              </router-link>
            </v-col>
          </div>
          <div>
            <router-view/>
          </div>
        </v-col>
        <v-col class="v-col-4">
          <v-card v-for="news in sideBar" :key="news.id" style="padding: 18px">
            <h3 class="font-weight-bold" style="padding: 5px;color: rgba(1,5,9,0.62);font-size: 13px;">{{
                news.title
              }}</h3>
            <span style="color:cornflowerblue;font-size: 12px;">{{ news.author }}</span>
            <hr>
            <span style="color: #7c6f6f;font-size: 10px;">{{ news.time }}</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div v-else class="no-results">
      No result found.
    </div>
  </div>
</template>
<script setup>
import SearchInput from "@/components/searchInput.vue";
import {useNewsStore} from "@/store/news_store.js";
import {onMounted, toRefs,watch} from "vue";
const newStore = useNewsStore()
const {allNews,sport_news,health_news,business_news , loaded ,sideBar , news_image,main_news,noResults,country} = toRefs(newStore)
const {get_news_country , get_category_news} = newStore
onMounted(()=>{
  get_news_country()
})
watch(country, (newValue, oldValue) => {
  // This will be called anytime `country` changes
  get_news_country();
}, { immediate: true }); // { immediate: true } ensures this runs on mounted as well

onMounted(() => {
  // This ensures it runs once on component mount, but it's redundant if immediate is true in watch
  // get_news_country();
});
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
