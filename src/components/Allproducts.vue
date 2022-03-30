<template>
  <div>
    <header-comp></header-comp>
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
                      :src="getImgUrl(item.featured_image)"
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
                      <img src="../assets/img/buy.png" class="img-fluid" />
                      <img src="../assets/img/heart.png" />
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
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "./Header.vue";
import FooterComp from "./Footer.vue";
import axios from "axios";
var paginate = 1;
export default {
  name: "Allproducts",
  props : {
    product_id:0
  },
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      query: null,
      subcategory: this.$route.query.id,
      list: [],
      filterlist: [],
      brand: [],
      colors: [],
      warranty: [],
      ram: [],
      processor: [],
      img_url: "https://posh-marketplace.plego.pro/img/product-images/997/",
      min_price: 0,
      max_price: 0,
    };
  },

  async mounted() {
    this.getFilterData();
  },
  methods: {
    async getFilterData() {
      this.startLoader();
      let result = axios.get(
        axios.defaults.baseURL + "products",
        {
          params: {
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
    getImgUrl(pet) {
      return this.img_url + pet;
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
        axios.defaults.baseURL + "products",
        {
          params: {
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
  },
};
</script>