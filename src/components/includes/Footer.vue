<template>
  <footer>
    <div class="container-fluid footer-box">
      <div class="footer-wrap">
        <div class="row">
          <div class="col-md-2 col-6">
            <h3 class="pm-title">
              <!-- <img src="/src/assets/img/Google-Play.png"> -->
              <router-link to="home" class="navbar-brand">
                <img v-if="list.logo != ''" :src="getImgUrll(this.list.logo)" />
                <span>{{ list.h_shop_name }}</span>
              </router-link>
            </h3>
            <p class="pm-description">
              {{ list.h_shop_address }}
            </p>
          </div>
          <div class="col-md-2 col-6">
            <h5>Main Menu</h5>
            <ul class="footer-list">
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[0] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[0] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[2] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[2] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[3] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[3] : ""
                  }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Company</h5>
            <ul class="footer-list">
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[0] : ''"
                  >{{ list.f_company_title ? list.f_company_title[0] : "" }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[1] : ''"
                  >{{ list.f_company_title ? list.f_company_title[1] : "" }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[2] : ''"
                  >{{ list.f_company_title ? list.f_company_title[2] : "" }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Discover</h5>
            <ul class="footer-list">
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[0] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[0] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[1] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[1] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[2] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[2] : ""
                  }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Find Us</h5>
            <ul class="footer-list">
              <li>
                <a
                  :href="list.f_findus_links ? list.f_findus_links[0] : '#'"
                  target="_blank"
                  ><i class="fab fa-facebook-f"></i>Facebook</a
                >
              </li>
              <li>
                <a
                  :href="list.f_findus_links ? list.f_findus_links[1] : '#'"
                  target="_blank"
                  ><i class="fab fa-twitter"></i>Twitter</a
                >
              </li>
              <li>
                <a
                  :href="list.f_findus_links ? list.f_findus_links[2] : '#'"
                  target="_blank"
                  ><i class="fab fa-instagram"></i>Instagram</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Download App</h5>
            <div class="download-links">
              <img
                src="/src/assets/img/Google-Play.png"
                class="downloadapp"
                alt=""
              />
              <img
                src="/src/assets/img/App-Store.png"
                class="downloadapp"
                alt=""
              />
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
              <img
                src="/src/assets/img/Rectangle-22.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="/src/assets/img/Rectangle-23.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="/src/assets/img/Rectangle-24.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="/src/assets/img/Rectangle-25.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="/src/assets/img/Rectangle-26.png"
                class="img-fluid"
                alt=""
              />
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
              Copyright © {{ new Date().getFullYear() }} Posh Market, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
                


<script>
import axios from "axios";
export default {
  name: "Footer",
  data() {
    return {
      list: [],
      showTitle: true,
      // img_url: "https://posh-marketplace.plego.pro/img/product-images",
      img_url: axios.defaults.url + "/img/product-images",
      seller_id: import.meta.env.VITE_SELLER_ID,
    };
  },
  mounted() {
    this.getHeadFoot();
  },
  methods: {
    async getHeadFoot() {
      let result = axios.get(
        axios.defaults.baseURL + "headerfooter/" + this.seller_id
      );
      console.log("header footer");
      // console.log(result);
      // this.list = result;
      this.list = (await result).data;
      $(".navbar-brand span").html(this.list.h_shop_name);
      if (this.list.logo) this.showTitle = false;
      $(".about-foot p").html(this.list.about_us);
    },
    getImgUrll(pet) {
      return this.img_url + "/" + this.seller_id + "/" + pet;
    },
  },
};
</script>