<template>

  <div id="loader-container">
    <div class="back-load"></div>
    <div class="loader"></div>
  </div>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
      <!-- <a class="navbar-brand" href="/home">Posh Market</a> -->
      <router-link to="home" class="navbar-brand">Posh Market</router-link>
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
  <div class="collapse navbar-collapse" id="navbarTogglerSidebar">
      <!-- menu mobile -->
      <div class="side-menu">
            <h1>TOP CATEGORIES</h1>
            <ul>
              <li>
                <img src="../assets/img/menu-template/components.png" />Components<i
                  class="fas fa-angle-right"
                ></i>
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
                <img src="../assets/img/menu-template/computer.png" />Computer Systems<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/electronics.png" />Electronics<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/game.png" />Gaming<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/networking.png" />Networking<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/office.png" />Office Solutions<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/software-service.png" />Software
                Services<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/automotive.png" />Automotives<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/home&tool.png" />Home & Tools<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="../assets/img/menu-template/health.png" />Health & Sports<i
                  class="fas fa-angle-right"
                ></i>
              </li>
            </ul>
          </div>
      <!-- menu mobile -->
  </div>
      <form class="form-inline my-2 my-lg-2">
        <input
          class="form-control mr-sm-2"
          type="Laptops"
          placeholder="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search <img class="search-icon" src="../assets/../assets/img/Search-head.png" />
        </button>
      </form>
      <div class="head-right-info">
        <div class="userLogined " v-if="isHidden" >
          <div class="usr-img"><img src="../assets/../assets/img/profile.png" class="proImg"></div>
          <div class="usr-title">{{ userTitle }}</div>
          <i class="fas fa-chevron-down"></i>
          <ul class="userProfileMenu">
            <li><a href="#">Dashboard</a></li>
              <li><a href="#">My Orders</a></li>
               <li><a href="#">Track My Order</a></li>
                <li><a href="#">My Profile</a></li>
                <li>
                  <a href="#" @click="logout">Logout</a>
                  </li>
            </ul>
        </div>
        <div class="btn-sign-register" v-if="!isHidden" >
          <img src="../assets/../assets/img/user-icon.png" class="uicon" />
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
          <router-link to="cart" class="cartitems"><img src="../assets/../assets/img/bask-icon.png" class="bask-icon" /><span v-html="itemsincart"></span></router-link>
          <span class="bx-amount">$0.00</span>
        </div>
      </div>
      </div>
    </nav>

    <div class="sec-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="show-all-cat">
              <span
                ><img src="../assets/img/menu-template/category.png" />Show All Categories
                <i class="fas fa-chevron-down"></i
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
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
  
  data() {
    return {
      userTitle:"John",
      itemsincart:0,
      isHidden: false
    };
  },
  async mounted(){
    if(localStorage.getItem("login")){
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      var totalQty=0;
      logindata.cartitems.forEach(function(items) {
        console.log("Qty: "+items.quantity)
        totalQty+=items.quantity
      })
      this.itemsincart=totalQty;
      this.userTitle=logindata.first_name+" "+logindata.last_name;
      console.log(localStorage.getItem("login"))
      this.isHidden=true;
    } else {
      localStorage.clear();
      //this.$router.push({name:"Login"})
    }
  },
  methods:{
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.isHidden=false;
    }
  }
};
</script>

