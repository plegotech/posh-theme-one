<template>
  <footer>
    <div class="container-fluid footer-box">
      <div class="footer-wrap">
        <div class="row">
          <div class="col-md-2 col-6">
            <h3 class="pm-title">{{ list.h_shop_name }}</h3>
            <p class="pm-description">
              {{ list.h_shop_address }}
            </p>
          </div>
          <div class="col-md-2 col-6">
            <h5>{{ list.f_main_menu_title }}</h5>
            <ul class="footer-list">
              <li v-for="(item, index) in list.f_main_menu_links" :key="index">
                <a href="#"> {{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>{{ list.f_company_title }}</h5>
            <ul class="footer-list">
              <li v-for="(item, index) in list.f_company_links" :key="index">
                <a href="#"> {{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>{{ list.f_discover_title }}</h5>
            <ul class="footer-list">
              <li v-for="(item, index) in list.f_discover_links" :key="index">
                <a href="#"> {{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>{{ list.f_findus_title }}</h5>
            <ul class="footer-list">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i> {{list.f_findus_links[0]}}</a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i> {{list.f_findus_links[1]}}</a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i> {{list.f_findus_links[2]}}</a>
              </li>

            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Download App</h5>
            <div class="download-links">
              <img src="/src/assets/img/Google-Play.png" class="downloadapp" alt="" />
              <img src="/src/assets/img/App-Store.png" class="downloadapp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-weaccept">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <p class="footer-wa">We Accept</p>
            <div class="footer-cards">
              <img src="/src/assets/img/Rectangle-22.png" class="img-fluid" alt="" />
              <img src="/src/assets/img/Rectangle-23.png" class="img-fluid" alt="" />
              <img src="/src/assets/img/Rectangle-24.png" class="img-fluid" alt="" />
              <img src="/src/assets/img/Rectangle-25.png" class="img-fluid" alt="" />
              <img src="/src/assets/img/Rectangle-26.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <p class="copyright-text">
              Copyright © 2021 Posh Market, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
                


<script>
import axios from 'axios'
export default {
  name: "Footer",
  data() {
    return {
      list:[]
    }
  },
  mounted() {
    this.getHeadFoot();
  },
  methods: {
    async getHeadFoot(){
      let result = axios.get(axios.defaults.baseURL+"headerfooter/977");
      console.log("header footer");
      // console.log(result);
      // this.list = result;
      this.list = (await result).data
      $('.navbar-brand').html(this.list.h_shop_name)
    }

  }
};
</script>