<template>
<div>
    <header-comp></header-comp>
  <div class="container-fluid">
    <div class="checkout-itesm-bx">
      <div class="row mt-4">
        <div class="col-12">
          <h4><strong>Checkout</strong> <span>({{count_cartitems}} Items)</span></h4>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="cartIBilling-shipping">
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
                  <input type="text" v-bind:value="''+userdetails.first_name+''" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Last Name*</label>
                  <input type="text" v-bind:value="''+userdetails.last_name+''" />
                </div>
              </div>
              <div class="col-sm-12 mb-4">
                <div class="form-group">
                  <label class="top-position">Address*</label>
                  <input type="text" v-bind:value="''+userdetails.u_address+''" />
                </div>
              </div>

              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Country*</label>
                  <select class="select-custom-point">
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
                  <input type="text" value="California" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">City*</label>
                  <input type="text" v-bind:value="''+userdetails.u_city+''" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Postal Zip Code*</label>
                  <input type="text" v-bind:value="''+userdetails.u_zip+''" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Email Address*</label>
                  <input type="text" v-bind:value="''+userdetails.email+''" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Phone Number*</label>
                  <input type="text" v-bind:value="''+userdetails.phone+''" />
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
              <div class="col-12 mb-5">
                
                <router-link class="primary nxtbtn" to="payment" v-if="count_cartitems">NEXT</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="cartSummary-bx shipping-right">
            <div class="cartsum-title">Your Order</div>
            <div class="youorder-opt-bx" v-for="items in cartitemslist" :key="items.id">
              <img src="../assets/img/cart-item-1.png" alt="" />
              <div class="youorder-item">
                <h5>{{items.name}}</h5>
                <div class="yr-disc">
                  <div class="yr-disc-bx">Color <strong>Black</strong></div>
                  <div class="yr-disc-bx2">
                    Screen Size <strong>15.6</strong>
                  </div>
                </div>
                <div class="">$<strong>{{items.item_price}}</strong> X {{items.quantity}}</div>
              </div>
            </div>
            <div class="cartSum-list">
              <div class="cartSummary-items">
                <div class="csi-title">Item(s)</div>
                <div class="csi-title-amount">$<strong>{{this.total_price}}</strong></div>
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
                <div class="csi-total-amount">$<strong>{{ total_price+28-10 }}</strong></div>
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


import HeaderComp from './Header.vue'
import FooterComp from "./Footer.vue";
import axios from "axios";
export default {
  name: "Shipping",
  components: {
      HeaderComp, FooterComp
  },


  data() {
    return {
		user_id : null,
		cartitemslist:[],
		count_cartitems:0,
		total_price:0,
		count:0,
    userdetails:[]
    };
  },

  async mounted() {
    this.loadSession();
	this.getCartData();	
  },
  methods: {
	  loadSession(){
		if(localStorage.getItem("login")){
			console.log("Login Data")
			const logindata = JSON.parse(localStorage.getItem("login"));
      this.userdetails = logindata;
			console.log(logindata.id);
      console.log(logindata);
			this.user_id = logindata.id;			
		} else {
      this.$router.push({name:"Login"})
    }
	  },
	async getCartData() {
		this.startLoader();
		this.total_price = 0;
		this.count = 0
		let result = axios.post(
		axios.defaults.baseURL + "usercartdata",
		{
				user_id: this.user_id
		},
		{ 
			useCredentails: true 
		}
		);
		console.log("Cart Check Data2");
		console.log((await result).data);
		
		this.cartitemslist = (await result).data;	
		
		var tempTotalPrice=0;
		this.count_cartitems = this.cartitemslist.length;
		this.cartitemslist.forEach(function(items) {
			console.log("Qty: "+items.quantity)
			tempTotalPrice+=(items.quantity*items.item_price)
			
		})
		this.total_price = tempTotalPrice
		//this.itemsincart=totalQty;
		$(".cartitems").children("span").html(this.count_cartitems);

		if(localStorage.getItem("login")){
			console.log("Login Data")
			const logindata = JSON.parse(localStorage.getItem("login"));
			this.user_id = logindata.id;			
			logindata.cartitems=this.cartitemslist;
			localStorage.setItem("login", JSON.stringify(logindata));
		}
		

		//this.count_cartitems = this.cartitemslist.length
		this.EndLoader();
	},
	async removeAll(){
		this.startLoader();
		this.cartitemslist = null
		$(".cartitems").children("span").html(0)
		let result = axios.post(
		axios.defaults.baseURL + "removecartdata",
		{
				user_id: this.user_id
		},
		{ 
			useCredentails: true 
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
	myMethod(val, qty){
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
	increment(cart_id){
		var val = $("#cart_"+cart_id).val();
		//if(val>=1){
			val++;
			$("#cart_"+cart_id).val(val);
		//}
		//var val = $this.previousElementSibling.value;
		//alert(cart_id+" - "+val);
	},
	decrement(cart_id){
		var val = $("#cart_"+cart_id).val();
		if(val>=1){
			val--;
		}
		$("#cart_"+cart_id).val(val);
	},
	removecartitem(cart_id){
		var val = $("#cart_"+cart_id).val();
		console.log(cart_id);
		this.startLoader();
		//this.cartitemslist = null
		//$(".cartitems").children("span").html(0)
		
		let result = axios.post(
		axios.defaults.baseURL + "removecartdata",
		{

				user_id: this.user_id,
				cart_item_id: cart_id

		},
		{ 
			useCredentails: true 
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


		//this.EndLoader();


	},
	updatecart(){

	}

  }

};
</script>