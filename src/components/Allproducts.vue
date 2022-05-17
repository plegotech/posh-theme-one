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
                  <img src="/src/assets/img/menu-template/home-tools.png" />Home
                  & Tools<i class="fas fa-angle-right"></i>
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
                <li><router-link to="dashboard"> Dashboard</router-link></li>
                <li><router-link to="dashboard"> Orders</router-link></li>
                <li><a href="#">Track My Order</a></li>
                <li><router-link to="profile">My Profile</router-link></li>
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
              <span class="bx-amount">$<span v-html="total_price"></span></span>
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

              <div
                class="brand-options"
              >
                <h5>Brands</h5>
                <ul class="products-cat-opt">
                  <li v-for="(value, index) in this.brandlist" :key="index">
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        :value="value" />{{ value
                      }}<span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>


              <div
                class="brand-options"
                v-for="(value, index) in this.filterlist"
                :key="index"
              >
                <h5>{{ index }} </h5>
                <ul class="products-cat-opt">
                  <li v-for="(subvalue, subindex) in value" :key="subindex">
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="filtersdata[index]"
                        class="form-check-input"
                        :value="subvalue" />{{ subvalue
                      }}<span class="checkmark"></span
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
                <h4>{{ this.MainCategory.title }}</h4>
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
                        <button
                          class="primary h-34"
                          type="submit"
                          name="filter"
                        >
                          Go
                        </button>
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
                    :to="{
                      path: '/product',
                      query: { id: item.id },
                      props: true,
                    }"
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
                      :to="{
                        path: '/product',
                        query: { id: item.id },
                        params: item.id,
                      }"
                      >{{ item.name }}</router-link
                    >
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ item.net_price }}</span>
                    <span class="pro-icons">
                      <img
                        src="/src/assets/img/buy.png"
                        @click="addtocart(item)"
                        class="img-fluid"
                      />
                      <img src="/src/assets/img/heart.png" @click="wishlist" />
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
                    <button
                      id="back"
                      class="page-link"
                      aria-label="Previous"
                      @click="pagination('b')"
                    >
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-left"></i
                      ></span>
                    </button>
                  </li>

                  <li class="page-item">
                    <button
                      id="next"
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
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import axios from "axios";
import FooterComp from "./includes/Footer.vue";
var paginate = 1;
export default {
  name: "Allproducts",
  props: {
    product_id: 0,
  },
  components: { FooterComp },
  data() {
    return {
      total_price: 0,
      cartform: {
        product_id: 0,
        user_id: 0,
        quantity: 1,
        item_price: 0,
        net_price: 0,
        name: null,
        description: null,
      },

      MainCategory: [],
      userTitle: "John",
      itemsincart: 0,
      isHidden: false,
      query: null,
      sub_category: this.$route.query.id,
      parent_category: this.$route.query.p_id,
      list: [],
      brandlist:[],
      filterlist: [],
      filtersdata: [],
      filtersd: {},

      brand: [],
      colors: [],
      warranty: [],
      ram: [],
      processor: [],
      min_price: 0,
      max_price: 0,

      img_url: axios.defaults.url + "/img/product-images",
      //img_url: "https://posh-marketplace.plego.pro/img/product-images",
    };
  },

  async mounted() {
    this.query = this.$route.query.search;

    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));

      if (logindata.cartitems) {
        this.itemsincart = logindata.cartitems.length;
        for (var i = 0; i < logindata.cartitems.length; i++) {
          this.total_price +=
            parseInt(logindata.cartitems[i].item_price) *
            parseInt(logindata.cartitems[i].quantity);
        }
      }
      this.userTitle = logindata.first_name + " " + logindata.last_name;
      this.cartform.user_id = logindata.id;
      console.log(localStorage.getItem("login"));
      this.isHidden = true;
    } else if (!localStorage.getItem("login")) {
      if (localStorage.getItem("guest")) {
        const guestdata = JSON.parse(localStorage.getItem("guest"));
        this.cartitemslist = guestdata;
        var tempTotalPrice = 0;
        this.count_cartitems = this.cartitemslist.length;
        this.cartitemslist.forEach(function (items) {
          console.log("Qty: " + items.quantity);
          tempTotalPrice += items.quantity * items.item_price;
        });
        this.total_price = tempTotalPrice;
        $(".cartitems").children("span").html(this.count_cartitems);
      }
    }
    this.getCategoryFilters();
    //
    this.getFilterData();
    //alert(this.$route.query.search)
  },
  methods: {
    async getCategoryFilters() {
      this.startLoader();
      let cat_result = axios.get(
        axios.defaults.baseURL + "category/pfilters/" + this.sub_category
      );
      if ((await cat_result).data != null) {
        this.filterlist = (await cat_result).data.data;
        this.filtersdata = (await cat_result).data.labels;

        this.brandlist = (await cat_result).data.brandlist;
        //this.brand = (await cat_result).data.brandlist;
      }
      //this.filterlist = (await cat_result).data;
      console.log(this.filterlist);
      this.EndLoader();
    },
    async getFilterData() {
      this.startLoader();
      let cat_result = axios.get(
        axios.defaults.baseURL +
          "seller/getcategorytitle/" +
          this.parent_category
      );
      this.MainCategory = (await cat_result).data;
      
      let result = axios.get(
        axios.defaults.baseURL + "allproducts",
        {
          params: {
            filter:JSON.stringify(this.filtersdata),
            search: this.query,
            min_price: this.min_price,
            max_price: this.max_price,
            brand: this.brand.toString(),
            colors: this.colors.toString(),
            warranty: this.warranty.toString(),
            ram: this.ram.toString(),
            processor: this.processor.toString(),
            sub_category: this.sub_category,
            parent_category: this.parent_category,
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
      return this.img_url + "/" + vendor + "/" + pet;
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
            min_price: this.min_price,
            max_price: this.max_price,
            brand: this.brand.toString(),
            colors: this.colors.toString(),
            warranty: this.warranty.toString(),
            ram: this.ram.toString(),
            processor: this.processor.toString(),
            sub_category: this.sub_category,
            parent_category: this.parent_category,
            page: paginate,
          },
        },
        { useCredentails: true }
      );
      console.warn((await result).data.data);
      this.list = (await result).data.data;
      //page: paginate
      this.EndLoader();
      //alert("Hello");
    },
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.itemsincart = 0;
      this.isHidden = false;
      this.$router.push({ name: "Home" });
    },
    addtocart(item) {
      this.cartform.item_price = item.net_price;
      this.cartform.product_id = item.id;
      this.cartform.quantity = 1;
      this.cartform.id = 1;

      if (!localStorage.getItem("login")) {
        //alert("Please Login First")
        this.cartform.name = item.name;
        this.cartform.description = item.description;
        this.cartform.net_price = item.net_price;

        if (localStorage.getItem("guest")) {
          const guestdata = JSON.parse(localStorage.getItem("guest"));
          if (guestdata.length > 0) {
            var match = false;
            guestdata.forEach((element, index) => {
              if (element.product_id == this.cartform.product_id) {
                match = true;
                element.quantity = parseInt(element.quantity) + 1;
                guestdata[index] = element;
              }
            });
            if (match == false) {
              this.cartform.id = guestdata.length + 1;
              guestdata.push(this.cartform);
            }
            localStorage.setItem("guest", JSON.stringify(guestdata));
          } else {
            const guestdata = [];
            guestdata.push(this.cartform);
            localStorage.setItem("guest", JSON.stringify(guestdata));
          }
        } else {
          const guestdata = [];
          guestdata.push(this.cartform);
          localStorage.setItem("guest", JSON.stringify(guestdata));
        }

        // const guestdata = JSON.parse(localStorage.getItem("guest"));
        // if(localStorage.getItem("guest")){
        //   const guestdata = JSON.parse(localStorage.getItem("guest"));
        //   this.cartform.id = guestdata.length+1
        //   guestdata.push(this.cartform);
        //   localStorage.setItem("guest", JSON.stringify(guestdata));
        // } else {
        //   const guestdata=[];
        //   guestdata.push(this.cartform);
        //   localStorage.setItem("guest", JSON.stringify(guestdata));
        // }

        const guestdata = JSON.parse(localStorage.getItem("guest"));
        this.itemsincart = guestdata.length;

        //this.$router.push({name:"Login"});
      } else {
        //alert("Added to cart")
        console.log(this.cartform);
        this.startLoader();
        axios
          .post(axios.defaults.baseURL + "addtocart", this.cartform)
          .then((result) => {
            console.log(result.data);
            const obj = result.data;
            console.log(obj);
            if (obj.success == true) {
              alert("Product Added to the Cart");

              this.itemsincart = obj.message.cartitems.length;

              if (localStorage.getItem("login")) {
                console.log("Login Data");
                const logindata = JSON.parse(localStorage.getItem("login"));
                logindata.cartitems = obj.message.cartitems;
                localStorage.setItem("login", JSON.stringify(logindata));
              }
            } else {
              alert("Some error occured");
            }
          });
        this.EndLoader();
      }
    },
    wishlist() {
      alert("Added to Wishlist");
    },
  },
};
</script>