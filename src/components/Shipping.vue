<template>
  <div>
    <header-comp :key="HeaderKey"></header-comp>
    <div class="container-fluid">
      <div class="checkout-itesm-bx">
        <div class="row mt-4">
          <div class="col-12">
            <h4>
              <strong>Checkout</strong>
              <span>({{ count_cartitems }} Items)</span>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="cartIBilling-shipping">
              <form method="post" @submit.prevent="postShippingData">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="checkout-process">
                      <ul class="checkout-method">
                        <li class="shipping-pay active">
                          <div class="step-counter-point"></div>
                          <div class="step-name">Shipping</div>
                        </li>
                        <li class="shipping-pay">
                          <div class="step-counter-point"></div>
                          <div class="step-name">Payment</div>
                        </li>
                      </ul>
                    </div>
                    <div class="ba-title"><h4>Billing Address</h4></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">First Name*</label>
                      <input type="text" v-model="shippingdetails.first_name" />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">Last Name*</label>
                      <input type="text" v-model="shippingdetails.last_name" />
                    </div>
                  </div>
                  <div class="col-sm-12 mb-4">
                    <div class="form-group">
                      <label class="top-position">Address*</label>
                      <input type="text" v-model="shippingdetails.address" />
                    </div>
                  </div>

                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">Country*</label>
                      <select
                        class="select-custom-point"
                        v-model="shippingdetails.country"
                      >
                        <option>United States</option>
                        <option>Chile</option>
                        <option>Czechia</option>
                        <option>Denmark</option>
                        <option>Fiji</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">State/Province*</label>
                      <input type="text" v-model="shippingdetails.state" />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">City*</label>
                      <input type="text" v-model="shippingdetails.city" />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">Postal Zip Code*</label>
                      <input type="text" v-model="shippingdetails.zip" />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">Email Address*</label>
                      <input type="text" v-model="shippingdetails.email" />
                    </div>
                  </div>
                  <div class="col-sm-6 mb-4">
                    <div class="form-group">
                      <label class="top-position">Phone Number*</label>
                      <input type="text" v-model="shippingdetails.phone" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="check-shipping-m">
                      <ul class="products-cat-opt">
                        <li>
                          <label class="form-check-label"
                            ><input
                              type="checkbox"
                              class="form-check-input"
                              value="" />Shipping address same as billing
                            <span class="checkmark"></span
                          ></label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <h5 class="mt-4 mb-4">Shipping Method</h5>
                    <ul class="products-cat-opt shipping-meth">
                      <li>
                        <label class="form-check-label"
                          ><input
                            type="radio"
                            class="form-check-input"
                            name="radio" />1 Day <strong>$30</strong>
                          <span class="checkmark_radio"></span
                        ></label>
                      </li>
                      <li>
                        <label class="form-check-label"
                          ><input
                            type="radio"
                            class="form-check-input"
                            name="radio" />2-3 Days <strong>$20</strong>
                          <span class="checkmark_radio"></span
                        ></label>
                      </li>
                    </ul>
                  </div>

                  <div class="col-12 mt-4 mb-5">
                    <button class="primary" type="submit">Update</button>  
                    <router-link
                      class="primary nxtbtn"
                      to="payment"
                      v-if="count_cartitems"
                      >NEXT</router-link
                    >
                  </div>
                </div>
                
              </form>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="cartSummary-bx shipping-right">
              <div class="cartsum-title">Your Order</div>
              <div
                class="youorder-opt-bx"
                v-for="items in cartitemslist"
                :key="items.id"
              >
                <!-- <img src="../assets/img/cart-item-1.png" alt="" /> -->
                <img
                  class="img-fluid"
                  :src="getImgUrl(items.vendor_id, items.featured_image)"
                  @error="
                    $event.target.src =
                      'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                  "
                />
                <div class="youorder-item">
                  <h5>{{ items.name }}</h5>
                  <div class="yr-disc">
                    <div class="yr-disc-bx">Color <strong>Black</strong></div>
                    <div class="yr-disc-bx2">
                      Screen Size <strong>15.6</strong>
                    </div>
                  </div>
                  <div class="">
                    $<strong>{{ items.item_price }}</strong> X
                    {{ items.quantity }}
                  </div>
                </div>
              </div>
              <div class="cartSum-list">
                <div class="cartSummary-items">
                  <div class="csi-title">Item(s)</div>
                  <div class="csi-title-amount">
                    $<strong>{{ this.total_price }}</strong>
                  </div>
                </div>
                <div class="cartSummary-items">
                  <div class="csi-title">Est. Delivery</div>
                  <div class="csi-title-amount">$<strong>28</strong></div>
                </div>
                <div class="cartSummary-items bt-0">
                  <div class="csi-title">Discount</div>
                  <div class="csi-title-amount">-$<strong> 10.00</strong></div>
                </div>
                <div class="cartSummary-items justify-sbetw pt-4">
                  <div class="csi-title-t">Total</div>
                  <div class="csi-total-amount">
                    $<strong>{{ total_price + 28 - 10 }}</strong>
                  </div>
                </div>
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
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";
import axios from "axios";
export default {
  name: "Shipping",
  components: {
    HeaderComp,
    FooterComp,
  },

  data() {
    return {
      user_id: null,
      cartitemslist: [],
      count_cartitems: 0,
      total_price: 0,
      count: 0,
      shippingdetails:{
        user_id: null,
        first_name:null,
        last_name:null,
        email:null,
        phone:null,
        address:null,
        zip:null,
        city:null,
        state:null,
        country:null

      },
      userdetails: [],
      img_url: "https://posh-marketplace.plego.pro/img/product-images/",
    };
  },

  async mounted() {
    this.loadSession();
    this.getCartData();
  },
  methods: {
    async postShippingData(e) {
      axios
        .post(axios.defaults.baseURL + "update-shipping", this.shippingdetails)
        .then((result) => {
          console.log(result.data);
          const obj = result.data;
          console.log(obj);
          if (obj.success == true) {
            alert("Shipping Form submitted successfully");
            //this.shippingdetails = null
          } else {
            alert("Some error occured in saving data");
          }
          console.log(result);
        });
        e.preventDefault();
    },
    loadSession() {
      if (localStorage.getItem("login")) {
        console.log("Login Data");
        const logindata = JSON.parse(localStorage.getItem("login"));
        this.userdetails = logindata;

        this.shippingdetails.first_name = logindata.first_name
        this.shippingdetails.last_name = logindata.last_name
        this.shippingdetails.email = logindata.email
        this.shippingdetails.phone = logindata.phone
        this.shippingdetails.address = logindata.u_address
        this.shippingdetails.city = logindata.u_city
        this.shippingdetails.city = logindata.u_city
        this.shippingdetails.state = logindata.u_state
        this.shippingdetails.zip = logindata.u_zip

        console.log(logindata.id);
        console.log(logindata);
        this.user_id = logindata.id;
        this.shippingdetails.user_id = logindata.id
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    async getCartData() {
      this.startLoader();
      this.total_price = 0;
      this.count = 0;
      let result = axios.post(
        axios.defaults.baseURL + "usercartdata",
        {
          user_id: this.user_id,
        },
        {
          useCredentails: true,
        }
      );
      console.log("Cart Check Data2");
      console.log((await result).data);

      this.cartitemslist = (await result).data;

      var tempTotalPrice = 0;
      this.count_cartitems = this.cartitemslist.length;
      this.cartitemslist.forEach(function (items) {
        console.log("Qty: " + items.quantity);
        tempTotalPrice += items.quantity * items.item_price;
      });
      this.total_price = tempTotalPrice;
      //this.itemsincart=totalQty;
      $(".cartitems").children("span").html(this.count_cartitems);
      if(this.count_cartitems==0){
          $(".cartitems").children("span").hide()
          } else {
          $(".cartitems").children("span").show()
        }

      if (localStorage.getItem("login")) {
        console.log("Login Data");
        const logindata = JSON.parse(localStorage.getItem("login"));
        this.user_id = logindata.id;
        logindata.cartitems = this.cartitemslist;
        localStorage.setItem("login", JSON.stringify(logindata));
      }

      //this.count_cartitems = this.cartitemslist.length
      this.HeaderKey += 1;
      this.EndLoader();
    },
    async removeAll() {
      this.startLoader();
      this.cartitemslist = null;
      $(".cartitems").children("span").html(0);
          $(".cartitems").children("span").hide()

      let result = axios.post(
        axios.defaults.baseURL + "removecartdata",
        {
          user_id: this.user_id,
        },
        {
          useCredentails: true,
        }
      );

      console.log("Cart Check Data2");
      console.log((await result).data);

      this.getCartData();
      // if(localStorage.getItem("login")){
      // console.log("Login Data")
      // const logindata = JSON.parse(localStorage.getItem("login"));
      // logindata.cartitems=[]
      // localStorage.setItem("login", JSON.stringify(logindata));
      // }
      this.HeaderKey += 1;
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
    myMethod(val, qty) {
      //alert(val)
      this.count++;

      // if(this.count==1){
      // 	this.total_price=0
      // }
      // if(this.count<=this.cartitemslist.length){
      // 	this.total_price= this.total_price+(val*qty);
      // }
      return;
    },
    increment(cart_id) {
      var val = $("#cart_" + cart_id).val();
      //if(val>=1){
      val++;
      $("#cart_" + cart_id).val(val);
      //}
      //var val = $this.previousElementSibling.value;
      //alert(cart_id+" - "+val);
    },
    decrement(cart_id) {
      var val = $("#cart_" + cart_id).val();
      if (val >= 1) {
        val--;
      }
      $("#cart_" + cart_id).val(val);
    },
    removecartitem(cart_id) {
      var val = $("#cart_" + cart_id).val();
      console.log(cart_id);
      this.startLoader();
      //this.cartitemslist = null
      //$(".cartitems").children("span").html(0)

      let result = axios.post(
        axios.defaults.baseURL + "removecartdata",
        {
          user_id: this.user_id,
          cart_item_id: cart_id,
        },
        {
          useCredentails: true,
        }
      );

      this.getCartData();
      // console.log("Cart Check Data2");
      // console.log((await result).data);

      // if(localStorage.getItem("login")){
      // console.log("Login Data")
      // const logindata = JSON.parse(localStorage.getItem("login"));
      // logindata.cartitems=[]
      // localStorage.setItem("login", JSON.stringify(logindata));
      // }
      this.HeaderKey += 1;
      //this.EndLoader();
    },
    updatecart() {},
    getImgUrl(vendor, pet) {
      return this.img_url + "/" + vendor + "/" + pet;
    },
  },
};
</script>