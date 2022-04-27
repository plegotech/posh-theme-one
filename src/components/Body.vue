
<template>
  <div>
    <header-comp></header-comp>
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-2 col-sm-3 hideOnMobile">
            <div class="side-menu mt-3 hide-mobile-bx">
              <h1>TOP CATEGORIES</h1>
              <ul>
                <li v-for="item in list" :key="item.id">
                  <i class="menu-icon " :class="[item.newtitle]"><img
                      :src="'https://posh-marketplace.plego.pro/img/menu-template/' + item.newtitle + '.png'"></i>
                  <router-link :to="{ path: 'allproducts', query: { id: item.id }, props: true }">{{ item.title }}
                  </router-link>
                  <i class="fas fa-angle-right"></i>
                  <ul class="side-submenu">
                    <li v-for="subitem in item.children" :key="subitem.id">
                      <router-link :to="{ path: 'allproducts', query: { id: subitem.id }, props: true }">{{
                        subitem.title
                      }}</router-link>
                    </li>
                  </ul>

                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6 col-9 no-pr-pl  mt-3" id="MainSliderbx">

            <!-- <Carousel :autoplay="4000" :itemsToShow="1" :wrapAround="true">
              <Slide v-for="(images, index) in 3" :key="index">
                <div class="bsc-slider-bx">
                  <img src="../assets/img/poshslider-1.png" alt="" class="img-fluid" />
                  <img :src="getImgUrll(images)" alt="" class="img-fluid" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel> -->
            <Carousel :autoplay="4000" :itemsToShow="1" :wrapAround="true">
              <Slide v-for="(slide,index) in this.sliderslen" :key="index">
                <div class="bsc-slider-bx">
                  <img :src="getImgUrll(this.sliders[index])" alt="" class="img-fluid" height="479" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
          <div class="col-xl-3 col-lg-3 col-3 mt-3" id="MainSideBanner">
            <div class="mb-3" v-for="(images, index) in this.promotion" :key="index">
              <!-- <img src="../assets/img/rectangle_1.png" class="banner" alt="" /> -->
              <img :src="getImgUrll(images)" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">

        <div class="row">

          <div class="col-md-4 col-12 mt-4 flex-sm">
            <div class="mb-4">
              <picture>
                <!-- <source media="(min-width:991px)" :srcset="getImgUrll(this.catimages.images_new)" /> -->

                <img :src="getImgUrll(this.catimages.images_new)" alt="" class="img-fluid" height="323" />
              </picture>
            </div>
            <div class="mb-4">
              <picture>
                <!-- <source media="(min-width:991px)" srcset="../assets/img/hot-items-in-gaming-img.jpg" /> -->
                <!-- <img src="../assets/img/hot-items-in-gaming-img-2.jpg" alt="" class="img-fluid" /> -->
                <img :src="getImgUrll(this.catimages.images_hot)" alt="" class="img-fluid" height="210" />
              </picture>
            </div>
          </div>
          <div class="col-md-8 mt-4 flex-sm-bx">
            <div class="row">
              <div class="col-lg-7 mb-4">
                <!-- <img src="../assets/img/hot_categories.png" width="100%" alt="" /> -->
                <img :src="getImgUrll(this.catimages.images_cat)" width="100%" alt="" height="152"/>
              </div>
              <div class="col-lg-5 mb-4">
                <div class="for-signup">
                  <h5>For more details and updates</h5>
                  <div class="signup-btn-bx">
                    <!-- <a href="/signup"><button class="primary">Sign up</button></a> -->
                    <router-link to="signup"><button class="primary">Sign up</button></router-link>
                    <p>Already Registered?<router-link to="login">SIGN IN</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 mb-sm-0 mb-4">
                <!-- <img src="../assets/img/electronic-deals-img.jpg" alt="" /> -->
                <img :src="getImgUrll(this.catimages.images_elec)" alt="" height="385" />
              </div>
              <div class="col-sm-7">
                <!-- <img src="../assets/img/home_and_kitchens.png" width="100%" alt="" style="height: 100%" /> -->
                <img :src="getImgUrll(this.catimages.images_home)" width="100%" alt="" height="385" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="container-fluid bgcolor-gl">
        <div class="produ-listing-bx mt-4">
          <div class="row">
            <div class="col-12">
              <h2 class="cat-title">Featured Products</h2>
              <div class="fea-prod-sm">
                Show More <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" v-for="(product, index) in featuredProducts" :key="index">
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link :to="{
                    path: '/product',
                    query: { id: product.id },
                    props: true,
                  }">
                    <img :src="getImgUrl(product.vendor_id, product.featured_image)" alt="" />
                  </router-link>

                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link :to="{
                      path: '/product',
                      query: { id: product.id },
                      props: true,
                    }">
                      {{ product.name }}
                    </router-link>
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ product.net_price }}</span><span class="pro-icons"><img
                        src="../assets/img/buy.png" class="img-fluid" /><img src="../assets/img/heart.png" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 mb-4">
              <img src="../assets/img/mobile-phones-img.png" height="240" />
            </div>
            <div class="col-sm-6"><img src="../assets/img/new-jackets-img.png" height="240" /></div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="bsCategories">
          <div class="row">
            <div class="col-12">
              <h2 class="cat-title">Browse Seller Categories</h2>
              <div class="fea-prod-sm">
                Show More <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="seller-categories-box">
                <Carousel :itemsToShow="8" :wrapAround="true">
                  <Slide v-for="(slide,index) in this.BestSellerProductsLength" :key="index">
                    <div class="bsc-slider-bx">
                      <img src="../assets/img/Group-59.png" alt="" class="img-fluid" />

                      <!-- <img :src="getImgUrll(this.BestSellerProducts[index])" alt="" class="img-fluid" /> -->
                      <h5>{{this.BestSellerProducts[index]}}</h5>
                    </div>
                  </Slide>
                  <template #addons>
                    <Navigation />
                  </template>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bgcolor-gl">
        <div class="produ-listing-bx">
          <div class="row">
            <div class="col-12">
              <h2 class="cat-title">Just For You</h2>
              <div class="fea-prod-sm">
                Show More <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3" v-for="(product, index) in justForYouProducts" :key="index">
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link :to="{
                    path: '/product',
                    query: { id: product.id },
                    props: true,
                  }">
                    <img :src="getImgUrl(product.vendor_id, product.featured_image)" alt="" />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link :to="{
                      path: '/product',
                      query: { id: product.id },
                      props: true,
                    }">
                      {{ product.name }}
                    </router-link>

                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ product.net_price }}</span><span class="pro-icons"><img
                        src="../assets/img/buy.png" class="img-fluid" /><img src="../assets/img/heart.png" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid about-foot">
        <div class="row">
          <div class="col-sm-10">
            <h2 class="title-about">ABOUT POSH MARKET</h2>
            <p>
              Lörem ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
              euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
              Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
              berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
              kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap. Lörem
              ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
              euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
              Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
              berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
              kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap. Lörem
              ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
              euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
              Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
              berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
              kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap.
            </p>
          </div>
          <div class="col-sm-2">
            <img src="../assets/img/Online-Shopping.png" width="229" height="335" class="img-fluid onlineShp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>


<script>

import HeaderComp from './includes/Header.vue'
import FooterComp from "./includes/Footer.vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import axios from "axios";
export default {
  name: "Body",
  components: {
    HeaderComp, FooterComp, Carousel, Slide, Pagination, Navigation,
  },
  data() {
    return {
      BestSellerProducts: [],
      BestSellerProductsLength: 1,
      featuredProducts: [],
      justForYouProducts: [],
      list: [],
      list_homepage: [],
      sliders: [],
      sliderslen: 1,
      catimages: [],
      catimageslen: 1,
      promotion: [],
      img_url: "https://posh-marketplace.plego.pro/img/product-images",

      user_id: 0
    };
  },
  async mounted() {

    this.startLoader();


    this.getCategories()
    this.getSlidersPromotionsCategoryImages()
    this.getBestSellerCategories()
    this.getFeaturedProducts()
    this.getJustForYouProducts()

    if (localStorage.getItem("login")) {
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.user_id = logindata.id
      if (logindata.cartitems) {
        $(".cartitems").children("span").html(logindata.cartitems.length);
      } else {
        $(".cartitems").children("span").html(0);
      }

    } else if (!localStorage.getItem("login")) {
      if (localStorage.getItem("guest")) {
        const guestdata = JSON.parse(localStorage.getItem("guest"));
        $(".cartitems").children("span").html(guestdata.length);
      }
    }

    //console.warn((await result).data);
    //this.list = (await result).data;
    this.EndLoader();
  },
  methods: {
    async getSlidersPromotionsCategoryImages() {
      let result = axios.get(axios.defaults.baseURL + "seller/homepage/977");
      console.log((await result).data);
      this.list_homepage = (await result).data
      this.catimages = (await result).data.CatImages;
      this.catimageslen = (await result).data.CatImages.length;
      this.sliders = (await result).data.Sliders.sliders;
      this.sliderslen = (await result).data.Sliders.sliders.length;
      this.promotion = (await result).data.Sliders.promotion;
      console.log(this.list_homepage);
    },
    async getCategories() {
      let result = axios.get(axios.defaults.baseURL + "categories", this.params);
      console.warn("Check Data");
      const obj = (await result).data;
      console.warn(obj);
      if (obj.success == true) {
        this.list = obj.data;
      } else {
        alert("Issue loading categories");
      }

    },
    async getFeaturedProducts() {
      let result = axios.get(axios.defaults.baseURL + "product/featured");
      console.log((await result).data);
      this.featuredProducts = (await result).data


    },
    async getBestSellerCategories(){
      let result = axios.get(axios.defaults.baseURL + "seller/bestcategories/977");
      console.log((await result).data);
      this.BestSellerProducts = (await result).data
      console.log((await result).data.length)
      this.BestSellerProductsLength = (await result).data.length
    },
    async getJustForYouProducts() {
      let result = axios.get(axios.defaults.baseURL + "product/justforyou/" + this.user_id);
      console.log((await result).data);
      this.justForYouProducts = (await result).data

    },

    startLoader() {
      console.log("karachi");
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      console.log("pak");
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "none";
    },

    getImgUrl(vendor, pet) {
      return this.img_url + "/" + vendor + "/" + pet;
    },
    getImgUrll(pet) {
      return this.img_url + "/" + this.catimages.seller_id + "/" + pet;
    },


  }

};
</script>
