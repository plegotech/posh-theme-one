<template>
  <div>
    <header-comp :key="HeaderKey"></header-comp>
    <div class="container-fluid">
      <div class="cart-itesm-bx">
        <div class="row mt-4">
          <div class="col-12">
            <h4>
              Cart <span id="cartcount">({{ count_cartitems }} Items)</span>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 col-12">
            <div class="cartItems">
              <div class="cartItems-box">
                <div class="cartI-1">
                  <h5 class="ci-tile">Item</h5>
                </div>
                <div class="cartI-2">
                  <h5 class="ci-tile">Quantity</h5>
                </div>
                <div class="cartI-3">
                  <h5 class="ci-tile">Price</h5>
                </div>
                <div class="cartI-4"></div>
              </div>
              <div
                class="cartItems-box"
                v-for="item in cartitemslist"
                :key="item.id"
              >
                <div class="cartI-1">
                  <div class="cart-item-img">
                    <img
                      class="img-fluid"
                      :src="getImgUrl(item.vendor_id, item.featured_image)"
                      @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />
                    <!-- <img src="../assets/img/cart-item-1.png" alt=""
												class="img-fluid">-->
                  </div>
                  <div class="cartProduct-bx">
                    <p class="titleNamep">{{ item.name }}</p>
                    <p class="descNamep">{{ item.description }}</p>
                  </div>
                </div>
                <div class="cartI-2">
                  <div class="ci-push-bx">
                    <input
                      v-bind:value="'' + item.quantity + ''"
                      v-bind:id="'cart_' + item.id + ''"
                      class="qty-number cart_id"
                    />
                    <input
                      type="hidden"
                      v-bind:value="'' + item.product_id + ''"
                      v-bind:id="'' + item.product_id + '_'"
                      class="qty-number prod_id"
                    />
                    <div class="cart-add-item">
                      <button
                        class="btnplus-item"
                        v-on:click="increment(item.id)"
                      >
                        +
                      </button>
                      <button
                        class="btnminus-item"
                        v-on:click="decrement(item.id)"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <div class="cartI-3">
                  <h5 class="ci-price">${{ item.item_price }}</h5>
                </div>
                <div class="cartI-4">
                  <div class="carti-remove">
                    <button
                      v-on:click="removecartitem(item.id, item.product_id)"
                    >
                      <img
                        src="../assets/img/remove-icon.png"
                        alt=""
                        class="img-fluid"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div class="cart-item-updates">
                <button class="primary" v-on:click="updatecart">
                  <img src="../assets/img/edit-icon.png" alt="" />Update cart
                </button>
                <button class="secndary" v-on:click="removeAll">
                  <img src="../assets/img/remove-icon.png" alt="" />REMOVE ALL
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <div class="cartSummary-bx">
              <div class="cartsum-title">Cart Summary</div>
              <div class="cartSum-list">
                <div class="cartSummary-items">
                  <div class="csi-title">Item(s)</div>
                  <div class="csi-title-amount">
                    $<strong>{{ total_price }}</strong>
                  </div>
                </div>
                <div class="cartSummary-items">
                  <div class="csi-title">Est. Delivery</div>
                  <div class="csi-title-amount">$<strong>0</strong></div>
                </div>
                <div class="cartSummary-items">
                  <div class="csi-title">Discount Code:</div>
                  <div class="csi-title-dc">Posh200</div>
                </div>
                <div class="cartSummary-items">
                  <div class="csi-title-t">Total</div>
                  <div class="csi-total-amount">
                    $<strong>{{ total_price }}</strong>
                  </div>
                </div>
                <!-- <a class="primary" href="/shipping" v-if="count_cartitems">PROCEED TO CHECKOUT <img src="../assets/img/checkout-icon.png"></a> -->
                <router-link
                  to="shipping"
                  class="primary"
                  v-if="count_cartitems"
                  >PROCEED TO CHECKOUT
                  <img src="../assets/img/checkout-icon.png"
                /></router-link>
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
  name: "Cart",
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      HeaderKey: 0,
      user_id: null,
      cartitemslist: [],
      count_cartitems: 0,
      total_price: 0,
      count: 0,
      img_url: axios.defaults.url + "/img/product-images/",
    };
  },

  async mounted() {
    this.loadSession();
    this.getCartData();
  },
  methods: {
    loadSession() {
      if (localStorage.getItem("login")) {
        console.log("Login Data");
        const logindata = JSON.parse(localStorage.getItem("login"));
        console.log(logindata.id);
        this.user_id = logindata.id;
      }
    },
    async getCartData() {
      this.startLoader();

      if (!localStorage.getItem("login")) {
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
          $(".cartitems").children("span").show()
          $(".cartitems").children("span").html(this.count_cartitems);
          if (this.count_cartitems == 0) {
            this.HeaderKey++;
            $(".cartitems").children("span").hide();
          } else {
          $(".cartitems").children("span").show()
        }
          //alert("No Logged");
        } else {
          //alert("No Guest");
        }
      } else {
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
        if (this.count_cartitems == 0) {
          //this.HeaderKey++;
        }
        this.cartitemslist.forEach(function (items) {
          console.log("Qty: " + items.quantity);
          tempTotalPrice += items.quantity * items.item_price;
        });
        this.total_price = tempTotalPrice;
        //this.itemsincart=totalQty;
        $(".cartitems").children("span").html(this.count_cartitems);
        if (this.count_cartitems == 0) {
          $(".cartitems").children("span").hide();
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
      }
      //this.count_cartitems = this.cartitemslist.length
      this.EndLoader();
    },
    async removeAll() {
      this.startLoader();
      this.cartitemslist = null;
      $(".cartitems").children("span").html(0);

      $(".cartitems").children("span").hide();

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
      if (!localStorage.getItem("login") && localStorage.getItem("guest")) {
        localStorage.clear();
      }

      this.getCartData();
      // if(localStorage.getItem("login")){
      // console.log("Login Data")
      // const logindata = JSON.parse(localStorage.getItem("login"));
      // logindata.cartitems=[]
      // localStorage.setItem("login", JSON.stringify(logindata));
      // }

      this.EndLoader();
      alert("Products Removed");
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
      if (val > 1) {
        val--;
      }
      $("#cart_" + cart_id).val(val);
    },
    getImgUrl(vendor, pet) {
      console.log(this.img_url + "/" + vendor + "/" + pet);
      return this.img_url + "/" + vendor + "/" + pet;
    },
    removecartitem(cart_id, product_id) {
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
      if (!localStorage.getItem("login")) {
        const guestdata = JSON.parse(localStorage.getItem("guest"));
        if (guestdata.length > 0) {
          guestdata.forEach((element, index) => {
            if (element.product_id == product_id) {
              guestdata.splice(index);
            }
          });
          localStorage.setItem("guest", JSON.stringify(guestdata));
        }
      }
      this.getCartData();
      // console.log("Cart Check Data2");
      // console.log((await result).data);

      // if(localStorage.getItem("login")){
      // console.log("Login Data")
      // const logindata = JSON.parse(localStorage.getItem("login"));
      // logindata.cartitems=[]
      // localStorage.setItem("login", JSON.stringify(logindata));
      // }
      alert("Products Removed");

      this.EndLoader();
    },
    updatecart() {
      //updatecart
      this.startLoader();
      $(".ci-push-bx").each(function () {
        // console.log($(this).children("input").val())
        // console.log($(this).children("input").attr("id"))
        var product_id = $(this).children(".prod_id").val();

        axios.post(axios.defaults.baseURL + "updatecart", {
          quantity: $(this).children("input").val(),
          cart_id: $(this).children("input").attr("id"),
        });

        if (!localStorage.getItem("login")) {
          const guestdata = JSON.parse(localStorage.getItem("guest"));
          if (guestdata.length > 0) {
            guestdata.forEach((element, index) => {
              if (element.product_id == product_id) {
                // guestdata.splice(index)
                element.quantity = $(this).children("input").val();
                guestdata[index] = element;
              }
            });
            localStorage.setItem("guest", JSON.stringify(guestdata));
          }
        }
      });

      this.getCartData();
      // this.EndLoader();
      // alert("Products Quantity Updated");
    },
  },
};
</script>