<template>
  <div id="loader-container">
    <div class="back-load"></div>
    <div class="loader"></div>
  </div>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="/home">Posh Market</a> -->
        <router-link to="home" class="navbar-brand">
          <img v-if="list.logo!=''" :src="getImgUrll(list.logo)" />
          <span>{{ list.h_shop_name }}</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerSidebar"
          aria-controls="navbarTogglerSidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse naviForHeader" id="navbarTogglerSidebar" >
          <!-- menu mobile -->
          <div class="side-menu">
            <h1>TOP CATEGORIES <span class="sidemenuArrow" @click="hidesidemenu"><i class="fas fa-arrow-alt-circle-left"></i></span></h1>
            <ul>
              <li>
                <img
                  src="/src/assets/img/menu-template/components.png"
                />Components<i class="fas fa-angle-right"></i>
                <ul class="side-submenu">
                  <li><a href="#">Components</a></li>
                  <li><a href="/allproducts">Computer Systems</a></li>
                  <li><a href="#">Electronics</a></li>
                  <li><a href="#">Gaming</a></li>
                  <li><a href="#">Networking</a></li>
                  <li><a href="#">Office Solutions</a></li>
                </ul>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/computersystem.png"
                />Computer Systems<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/electronics.png"
                />Electronics<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img src="/src/assets/img/menu-template/gaming.png" />Gaming<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/networking.png"
                />Networking<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/officesolutions.png"
                />Office Solutions<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/softwareservices.png"
                />Software Services<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/automotives.png"
                />Automotives<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img src="/src/assets/img/menu-template/home-tools.png" />Home &
                Tools<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img
                  src="/src/assets/img/menu-template/health-sports.png"
                />Health & Sports<i class="fas fa-angle-right"></i>
              </li>
            </ul>
          </div>
          <!-- menu mobile -->
        </div>
        <form
          class="form-inline my-2 my-lg-2"
          @submit.prevent="getFilterData"
          method="post"
        >
          <input
            v-model="query"
            class="form-control mr-sm-2"
            type="Laptops"
            placeholder="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
            <img class="search-icon" src="/src/assets/img/Search-head.png" />
          </button>
        </form>
        <div class="head-right-info">
          <div class="userLogined" v-if="isHidden">
            <div class="usr-img">
              <img src="/src/assets/img/profile.png" class="proImg" />
            </div>
            <div class="usr-title">{{ userTitle }}</div>
            <i class="fas fa-chevron-down"></i>
            <ul class="userProfileMenu">
              <li>
                <router-link to="dashboard"> Dashboard</router-link>
              </li>
              <li>
                <router-link to="dashboard"> Orders</router-link>
              </li>
              <li><a href="#">Track My Order</a></li>
              <li>
                <router-link to="profile">My Profile</router-link>
              </li>
              <li>
                <a href="#" @click="logout">Logout</a>
                <!-- <router-link to="logout">Logout</router-link> -->
              </li>
            </ul>
          </div>
          <div class="btn-sign-register" v-if="!isHidden">
            <img src="/src/assets/img/user-icon.png" class="uicon" />
            <div class="signin-reg">
              <span class="sign-reg">
                <!-- <a href="/login">Sign In</a> -->
                <router-link to="login">Sign In</router-link>
              </span>
              <span class="sign-or-reg">or</span>
              <span class="sign-reg">
                <!-- <a href="/signup">Register</a> -->
                <router-link to="signup">Register</router-link>
              </span>
            </div>
          </div>
          <div class="bask-bx">
            <!-- <a href="/cart"><img src="../assets/../assets/img/bask-icon.png" class="bask-icon" /></a> -->
            <router-link to="cart" class="cartitems"
              ><img
                src="/src/assets/img/bask-icon.png"
                class="bask-icon" /><span v-html="itemsincart"></span
            ></router-link>
            <span class="bx-amount">$<span v-html="amountincart"></span></span>
          </div>
        </div>
      </div>
    </nav>

    <div class="sec-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="show-all-cat" @click="showcatlist">
              <span
                ><img src="/src/assets/img/menu-template/category.png" />Show
                All Categories <i class="fas fa-chevron-down"></i
              ></span>
              <ul>
                <li>Cat A</li>
                <li>Cat B</li>
                <li>Cat C</li>
              </ul>
            </div>
          </div>
          <div class="col-6">
            <div class="order-track">
              <ul>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="/contact">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "header",

  data() {
    return {
      userTitle: "John",
      itemsincart: 0,
      amountincart: "0.00",
      isHidden: false,
      query: null,
      list: [],
      showTitle: true,
      img_url: axios.defaults.url + "/img/product-images",
    };
  },
  async callOutMethod() {
    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      var amount = 0;
      if (logindata.cartitems) {
        this.itemsincart = logindata.cartitems.length;
        for (var i = 0; i < logindata.cartitems.length; i++) {
          amount +=
            parseInt(logindata.cartitems[i].item_price) *
            parseInt(logindata.cartitems[i].quantity);
        }
        this.amountincart = amount;
      }
      this.userTitle = logindata.first_name + " " + logindata.last_name;
      console.log(localStorage.getItem("login"));
      this.isHidden = true;
    } else {
      localStorage.removeItem("login");
      // localStorage.clear();
      //this.$router.push({name:"Login"})
    }
    this.getHeadFoot();
  },
  async mounted() {
    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      var amount = 0;
      if (logindata.cartitems) {
        this.itemsincart = logindata.cartitems.length;
        for (var i = 0; i < logindata.cartitems.length; i++) {
          amount +=
            parseInt(logindata.cartitems[i].item_price) *
            parseInt(logindata.cartitems[i].quantity);
        }
        this.amountincart = amount;
      }
      this.userTitle = logindata.first_name + " " + logindata.last_name;
      console.log(localStorage.getItem("login"));
      this.isHidden = true;
    } else if (localStorage.getItem("guest")) {
      const guestdata = JSON.parse(localStorage.getItem("guest"));
      this.itemsincart = guestdata.length;
      var tempTotalPrice=0;
      guestdata.forEach(function (items) {
        console.log("Qty: " + items.quantity);
        tempTotalPrice += items.quantity * items.item_price;
      });
      this.amountincart = tempTotalPrice;
      $(".cartitems").children("span").show();
      $(".cartitems").children("span").html(this.itemsincart);
      if (this.count_cartitems == 0) {
        $(".cartitems").children("span").hide();
      } else {
        $(".cartitems").children("span").show();
      }
    } else {
      localStorage.removeItem("login");
      // localStorage.clear();
      //this.$router.push({name:"Login"})
    }
    if (this.itemsincart == 0) {
      $(".cartitems").children("span").hide();
    } else {
      $(".cartitems").children("span").show();
    }
    this.getHeadFoot();
  },

  methods: {
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.itemsincart = 0;
      this.amountincart = "0.00";
      this.isHidden = false;
      this.$router.push({ name: "Home" });
    },
    getFilterData() {
      //alert(this.query);
      //this.$router.go({name:"Allproducts"});
      this.$router.push({ name: "Allproducts", query: { search: this.query } });
      //this.$router.go({name:'Allproducts', query: { search: this.query } })
      // this.$router.push({name:"Allproducts"});
    },
    async getHeadFoot() {
      let result = axios.get(axios.defaults.baseURL + "headerfooter/977");
      console.log("header footer");
      this.list = (await result).data;
      if (this.list.logo) this.showTitle = false;
    },
    getImgUrll(pet) {
      return this.img_url + "/977/" + pet;
    },
    showcatlist(){
      $("#navbarTogglerSidebar").addClass("active")
    },
        hidesidemenu(){
      $("#navbarTogglerSidebar").removeClass("active")
    },
  },
};
</script>

