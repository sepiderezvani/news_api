import {defineStore} from "pinia";
import axios from "axios";
import {computed, onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
export const useNewsStore = defineStore('news',
    ()=>{
    const country = ref('us')
        const loaded = ref(false)
       const allNews = ref([])
        const sport_news = ref([])
        const health_news = ref([])
        const business_news = ref([])
        const all_category_news = ref([])
        const sideBar = ref([])
        const news_image = ref([])
        const main_news = ref([])
        const noResults = ref(false)
        const route = useRoute()
        const get_news_country =async ()=>{
       const response =  await axios.get(`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=b3cc929b8a9c40f1bca9eaca5ac8414e`)
            loaded.value = true
            allNews.value = response.data.articles.map(item=>({
                author : item.author,
                description : item.description,
                title : item.title,
                country : item.country,
                image : item.urlToImage,
                time : item.publishedAt,
                id : item.id
           }))
            sideBar.value = allNews.value.filter((item)=>item.image === null && item.author !== null)
           news_image.value = allNews.value.slice(1).filter((item)=>item.image !== null & item.author !== null)
            main_news.value = allNews.value.slice(0,2).filter((item)=>item.image !== null  & item.author !== null)
            console.log(sideBar.value)
            console.log(main_news.value , 'main')
            console.log(news_image.value , 'imageside')
            get_category_news()
            // console.log(allNews.value)
            if (response.data.articles.length === 0) {
                noResults.value = true;
                // Clear data
                allNews.value = null;
                sideBar.value = null;
                news_image.value = null;
                main_news.value = null;
                return ; // Exit the function early
            }
            noResults.value = true
        }
        const get_category_news= async ()=>{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?country=${country.value}&apiKey=b3cc929b8a9c40f1bca9eaca5ac8414e`)
            all_category_news.value  =response.data.sources.map(item=>({
                category : item.category,
                country :item.country,
                description : item.description,
                id : item.id,
                name :item.name
            }))
            sport_news.value = all_category_news.value.filter((item)=>item.category === 'sports')
            console.log(sport_news.value , 'sport')
            health_news.value = all_category_news.value.filter((item)=>item.category === 'health')
            business_news.value = all_category_news.value.filter((item)=>item.category === 'business')
            console.log(business_news.value , 'bus')
            console.log(health_news.value , 'health')
        }
        const details_news_page = (route)=>{
            return route && route.params ? route.params.title : null
        }
        const details = computed(()=>{
            const detailsNews = route.params.title

            const page_of_news = news_image.value.find(page => page.title === detailsNews)
            if (page_of_news){
                return {
                    title : page_of_news.title,
                    image : page_of_news.image,
                    description : page_of_news.description,
                    author : page_of_news.author,
                    time : page_of_news.publishedAt,
                    id : page_of_news.id
                }
            }
            console.log(page_of_news)
        })
    return{
        get_news_country,
        get_category_news,
        country,
        allNews,
        sport_news,
        business_news,
        health_news,
        loaded,
        news_image,
        sideBar,
        main_news,
        noResults,
        details_news_page,
        details,
    }
    })
