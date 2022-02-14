<template>
  <div>
    <header-comp></header-comp>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-sm-2 hide-xs-bx">
          <div class="sidebar-options mt-3">
            <div class="brand-options">
              <h5>Brand</h5>
              <ul class="products-cat-opt">
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      v-model="params.brand"
                      @click="updateParams"
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Apple <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Acer <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />MSI <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Razor <span class="checkmark"></span
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
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Apple <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Acer <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />MSI <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Razor <span class="checkmark"></span
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
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
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
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
                  ></label>
                </li>
              </ul>
            </div>
            <div class="brand-options">
              <h5>CPU Speed</h5>
              <ul class="products-cat-opt">
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
                  ></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-sm-12">
              <div class="cat-title-pg">
                <h4>Gaming Laptops</h4>
                <div class="cat-option-pg">
                  <div class="price-limit-opt">
                    <span>Price: </span>
                    <div class="form-group min-max-bx">
                      <input
                        type="text"
                        placeholder="Min"
                        class="h-34 form-control min-price"
                      />
                      <span> - </span>
                      <input
                        type="text"
                        placeholder="Max"
                        class="h-34 form-control max-price"
                      />
                      <button class="primary h-34">Go</button>
                    </div>
                  </div>
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
                  <router-link :to="{ path: '/product', query: { id: item.id } }">
                    <img :src="getImgUrl(item.featured_image)" @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link
                      :to="{ path: '/product', query: { id: item.id } }"
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
            <div class="col-sm-12 d-flex justify-content-center">
              <div aria-label="Page navigation paginate-bx">
                <ul class="pagination bottm-pagination">
                  <li class="page-item inactive">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-left"></i
                      ></span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      @click.prevent="next ='Foo'" 
                      v-on:click="pagination"
                      aria-label="Next"
                    >
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-right"></i
                      ></span>
                    </a>
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
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      list: [],
      params: {
        page: 1,
        user: "",
        orderBy: "",
        order: "",
        search: "",
        status: "",
        category: "",
        sub_category: "",
      },
      img_url: "https://posh-marketplace.plego.pro/img/product-images/997/",
    };
  },

  created() {},
  async mounted() {
    this.startLoader();
    let result = axios.get(
      "https://posh-marketplace.plego.pro/api/products",
      this.params
    );
    console.warn("Check Data");
    console.warn((await result).data.data);
    this.list = (await result).data.data;
    this.EndLoader();

    setTimeout(() => {
      this.pagination();
    }, 5000);
  },
  methods: {
    startLoader() {
      console.log("karachi")
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      console.log("pak")
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "none";
    },
    getImgUrl(pet) {
      return this.img_url + pet;
    },
    async pagination() {
      this.paginate += 1;
      this.startLoader();
      let result = axios.get(
        "https://posh-marketplace.plego.pro/api/products",
        { params: { page: 2 } }, { useCredentails: true }
      );
    console.warn("Check Data2");
    console.warn((await result).data.data);
    this.list = (await result).data.data;
      this.EndLoader();
      //alert("Hello");
    },
  },
};
</script>