<template>
  <div>
    
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
      <form class="form-inline my-2 my-lg-2" @submit.prevent="getFilterData" method="post">
        <input
          v-model="query"
          class="form-control mr-sm-2"
          type="Laptops"
          placeholder="Search"
        />
        <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">
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
                  <!-- <router-link to="logout">Logout</router-link> -->
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
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-sm-2 hide-xs-bx">
          <form @submit.prevent="getFilterData" method="post">
            <div class="sidebar-options mt-3">
              <div class="brand-options">
                <h5>Brand</h5>
                <ul class="products-cat-opt">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="hp" />HP <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="dell" />Dell <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        v-model="brand"
                        type="checkbox"
                        class="form-check-input"
                        value="asus" />ASUS <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="lenovo" />Lenovo <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="Apple"
                        class="form-check-input"
                        value="Apple" />Apple <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="acer" />Acer <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="MSi" />MSI <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        value="Razor" />Razor <span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
              <div class="brand-options">
                <h5>Available Colours</h5>
                <ul class="products-cat-opt">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="colors"
                        class="form-check-input"
                        value="black" />Black<span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="colors"
                        class="form-check-input"
                        value="white" />White<span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="colors"
                        class="form-check-input"
                        value="red" />Red<span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="colors"
                        class="form-check-input"
                        value="green" />Green<span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
              <div class="brand-options">
                <h5>Warranty Duration</h5>
                <ul class="products-cat-opt">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="warranty"
                        class="form-check-input"
                        value="1" />1 Year <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        v-model="warranty"
                        type="checkbox"
                        class="form-check-input"
                        value="2" />2 Years <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="warranty"
                        class="form-check-input"
                        value="3" />3 Years <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="warranty"
                        class="form-check-input"
                        value="4" />4 Years <span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
              <div class="brand-options">
                <h5>Processor Type</h5>
                <ul class="products-cat-opt">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="processor"
                        class="form-check-input"
                        value="3" />Core i3 <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="processor"
                        class="form-check-input"
                        value="5" />Core i5 <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="processor"
                        class="form-check-input"
                        value="7" />Core i7 <span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
              <div class="brand-options">
                <h5>RAM</h5>
                <ul class="products-cat-opt">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="ram"
                        class="form-check-input"
                        value="2" />2 GB RAM <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="ram"
                        class="form-check-input"
                        value="4" />4 GB RAM <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="ram"
                        class="form-check-input"
                        value="8" />8 GB RAM <span class="checkmark"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="ram"
                        class="form-check-input"
                        value="16" />16 GB RAM <span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit" name="filter" class="col-sm-12 primary h-34">
              Apply Filter
            </button>
          </form>
        </div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-sm-12">
              <div class="cat-title-pg">
                <h4>Gaming Laptops</h4>
                <div class="cat-option-pg">
                  <form @submit.prevent="getFilterData" method="post">
                  <div class="price-limit-opt">
                    
                    <span>Price: </span>
                    <div class="form-group min-max-bx">
                      
                        <input
                          type="text"
                          v-model="min_price"
                          placeholder="Min"
                          class="h-34 form-control min-price"
                        />
                        <span> - </span>
                        <input
                          type="text"
                          v-model="max_price"
                          placeholder="Max"
                          class="h-34 form-control max-price"
                        />
                        <button class="primary h-34" type="submit" name="filter">Go</button>
                      
                    </div>
                    
                  </div>
                  </form>
                  <div class="sortby-opt">
                    <label class="top-position">Sort By</label>
                    <select class="select-custom-point">
                      <option>Featured</option>
                      <option>Brand</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-sm-4 item" v-for="item in list" :key="item.id">
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link
                    :to="{ path: '/product', query: { id: item.id }, props: true }"
                  >
                    <img
                      :src="getImgUrl(item.vendor_id, item.featured_image)"
                      @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link
                      :to="{ path: '/product', query: { id: item.id }, params: item.id }"
                      >{{ item.name }}</router-link
                    >
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ item.net_price }}</span>
                    <span class="pro-icons">
                      <img src="../assets/img/buy.png" @click="addtocart(item.id, item.net_price)" class="img-fluid" />
                      <img src="../assets/img/heart.png" @click="wishlist" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-sm-12 d-flex align-items-end">
              <div aria-label="Page navigation paginate-bx">
                <ul class="pagination bottm-pagination">
                  <li class="page-item inactive">
                    <button id="back"
                      class="page-link"
                      aria-label="Previous"
                      @click="pagination('b')"
                    >
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-left"></i
                      ></span>
                    </button>
                  </li>

                  <li class="page-item ">
                    <button id="next"
                      class="page-link"
                      aria-label="Next"
                      @click="pagination('n')"
                    >
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-right"></i
                      ></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
    <div class="container-fluid footer-box">
      <div class="footer-wrap">
        <div class="row">
          <div class="col-md-2 col-6">
            <h3 class="pm-title">Posh Market</h3>
            <p class="pm-description">
              4949 Forecast Ave, First FL<br />Downers Grove, IL 60515
            </p>
          </div>
          <div class="col-md-2 col-6">
            <h5>Main Menu</h5>
            <ul class="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Company</h5>
            <ul class="footer-list">
              <li><a href="#">The Company</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Discover</h5>
            <ul class="footer-list">
              <li><a href="#">The Team</a></li>
              <li><a href="#">Our History</a></li>
              <li><a href="#">Brand Motto</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Find Us On</h5>
            <ul class="footer-list">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 col-6">
            <h5>Download App</h5>
            <div class="download-links">
              <img
                src="../assets/img/Google-Play.png"
                class="downloadapp"
                alt=""
              />
              <img
                src="../assets/img/App-Store.png"
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
                src="../assets/img/Rectangle-22.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="../assets/img/Rectangle-23.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="../assets/img/Rectangle-24.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="../assets/img/Rectangle-25.png"
                class="img-fluid"
                alt=""
              />
              <img
                src="../assets/img/Rectangle-26.png"
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
              Copyright © 2021 Posh Market, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import axios from "axios";
var paginate = 1;
export default {
  name: "Allproducts",
  props : {
    product_id:0
  },
  components: {

  },
  data() {

    
    return {
      cartform: {
        product_id: 0,
        user_id:0,
        quantity:1,
        item_price:0
      },

      userTitle:"John",
      itemsincart:0,
      isHidden: false,
      query: null,
      subcategory: this.$route.query.id,
      list: [],
      filterlist: [],
      brand: [],
      colors: [],
      warranty: [],
      ram: [],
      processor: [],
      img_url: "https://posh-marketplace.plego.pro/img/product-images/",
      min_price: 0,
      max_price: 0,
    };
  },

  async mounted() {
    this.query = this.$route.query.search;

    if(localStorage.getItem("login")){
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.itemsincart = logindata.cartitems.length;
      this.userTitle=logindata.first_name+" "+logindata.last_name;
      this.cartform.user_id = logindata.id
      console.log(localStorage.getItem("login"))
      this.isHidden=true;
    } else {
      localStorage.clear();
      //this.$router.push({name:"Login"})
    }    
    this.getFilterData();
    //alert(this.$route.query.search)
  },
  methods: {

    async getFilterData() {
      this.startLoader();
      let result = axios.get(
        axios.defaults.baseURL + "allproducts",
        {
          params: {
            search: this.query,
              min_price:this.min_price,
              max_price:this.max_price,
              brand:this.brand.toString(), 
              colors: this.colors.toString(),
              warranty: this.warranty.toString(), 
              ram:this.ram.toString(),
              processor: this.processor.toString(),
              sub_category: this.sub_category
          },
        },
        { useCredentails: true }
      );
      console.warn("Check Data2");
      console.warn((await result).data.data);
      this.list = (await result).data.data;
      this.EndLoader();
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
      return this.img_url+"/"+vendor+"/" + pet;
    },
    async pagination(action) {
      if (action == "b") {
        if (paginate > 0) paginate -= 1;
        //alert("Back: " + paginate);
      } else {
        if (paginate <= 3) paginate += 1;
        //alert("Next: " + paginate);
      }
      this.startLoader();
      let result = axios.get(
        axios.defaults.baseURL + "allproducts",
        {
          params: {
              search: this.query,
              min_price:this.min_price,
              max_price:this.max_price,
              brand:this.brand.toString(), 
              colors: this.colors.toString(),
              warranty: this.warranty.toString(), 
              ram:this.ram.toString(),
              processor: this.processor.toString(),
              sub_category: this.sub_category,
              page: paginate
          },
        },
        { useCredentails: true }
      );
      console.warn("Check Data2");
      var t_data = (await result).data;
      var remaining = t_data.total-t_data.per_page;

      console.warn("Total: "+(t_data.total));
      console.warn("Per Page: "+(t_data.per_page));
      console.warn("remaining: "+remaining);
      console.warn("current_page: "+(t_data.current_page));

      console.warn((await result).data.data);
      this.list = (await result).data.data;
      //page: paginate
      this.EndLoader();
      //alert("Hello");
    },
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.itemsincart=0
      this.isHidden=false;
      this.$router.push({name:"Home"});
    },
    addtocart(product_id, net_price){
      if(!localStorage.getItem("login")){
        alert("Please Login First")
        this.$router.push({name:"Login"});
      } else {
      //alert("Added to cart")
        this.cartform.item_price = net_price;
        this.cartform.product_id = product_id;
        this.cartform.quantity=1;
        console.log(this.cartform)
        this.startLoader()
        axios.post(axios.defaults.baseURL +"addtocart",this.cartform).then((result)=>{
            console.log(result.data);
            const obj = result.data;
            console.log(obj);
            if(obj.success==true){
              alert("Product Added to the Cart");  

              this.itemsincart =obj.message.cartitems.length;
              
              if(localStorage.getItem("login")){
                console.log("Login Data")
                const logindata = JSON.parse(localStorage.getItem("login"));
                logindata.cartitems=obj.message.cartitems
                localStorage.setItem("login", JSON.stringify(logindata));
              }

            } else {
              alert("Some error occured");
            }
        })
        this.EndLoader()
      }
    },
    wishlist(){
      alert("Added to Wishlist")
    }
  },
};
</script>