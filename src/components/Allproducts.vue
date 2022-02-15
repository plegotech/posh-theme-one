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
                      @change="Filter('HP')"
                      class="form-check-input"
                      value="" />HP <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Dell')"
                      class="form-check-input"
                      value="" />Dell <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Asus')"
                      class="form-check-input"
                      value="" />ASUS <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Lenovo')"
                      class="form-check-input"
                      value="" />Lenovo <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Apple')"
                      class="form-check-input"
                      value="" />Apple <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Acer')"
                      class="form-check-input"
                      value="" />Acer <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('MS')"
                      class="form-check-input"
                      value="" />MSI <span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Razor')"
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
                      @change="Filter('Black')"
                      class="form-check-input"
                      value="" />Black<span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('White')"
                      class="form-check-input"
                      value="" />White<span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Red')"
                      class="form-check-input"
                      value="" />Red<span class="checkmark"></span
                  ></label>
                </li>
                <li>
                  <label class="form-check-label"
                    ><input
                      type="checkbox"
                      @change="Filter('Green')"
                      class="form-check-input"
                      value="" />Green<span class="checkmark"></span
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
          <!-- <button
            type="button"
            name="filter"
            class="col-sm-12 primary h-34"
            @click="Filter"
          >
            Apply Filter
          </button> -->
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
                  <router-link
                    :to="{ path: '/product', query: { id: item.id } }"
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
                    <button
                      class="page-link"
                      aria-label="Previous"
                      @click="pagination('b')"
                    >
                      <span aria-hidden="true"
                        ><i class="fas fa-chevron-left"></i
                      ></span>
                    </button>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <button
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
  },
  methods: {
    data: {
      brand: "",
    },
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
    async Filter(brand) {
      alert(brand);
      this.startLoader();
      let result = axios.get(
        "https://posh-marketplace.plego.pro/api/products",
        { params: { sub_category: brand } },
        { useCredentails: true }
      );
      console.warn("Check Data2");
      console.warn((await result).data.data);
      this.list = (await result).data.data;
      this.EndLoader();
    },
    async pagination(action) {
      if (action == "b") {
        if (paginate > 0) paginate -= 1;
        alert("Back: " + paginate);
      } else {
        if (paginate <= 3) paginate += 1;
        alert("Next: " + paginate);
      }
      this.startLoader();
      let result = axios.get(
        "https://posh-marketplace.plego.pro/api/products",
        { params: { page: paginate } },
        { useCredentails: true }
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