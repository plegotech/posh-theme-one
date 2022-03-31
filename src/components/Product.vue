<template>
<div>
    <header-comp></header-comp>
    <div class="breadcrumbs">
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-12">
							<ul class="breadcrumbs-list"> 
								<li><a href="">All Categories</a></li>
								<li><a href="">Laptop Computers</a></li>
								<li><a href="">Traditional Laptop Computers</a></li>
								<li>Item#: N82E16834235729</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
  <div class="wrapper seller-temp">
    <div class="container-fluid">
      <div class="details-pm-section">
        <div class="row mt-5">
          <div class="col-lg-5">
            <div class="gallery-pm-detail">
              <div class="gallery-pm-main">
                <!-- START GALLERY HERE -->               
                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL1-7.png" style="width:100%">
                  </div>

                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL1-6.png" style="width:100%">
                  </div>

                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL1-5.png" style="width:100%">
                  </div>
                    
                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL1-4.png" style="width:100%">
                  </div>

                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL1-3.png" style="width:100%">
                  </div>
                    
                  <div class="mySlides">
                    <img src="../assets/img/810G-B68TYL-1.png" style="width:100%">
                  </div>
                  <div class="row gallery-pm-thumb">
                    <div class="column">
                      <img class="demo cursor active" src="../assets/img/pro-thu-1.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="../assets/img/pro-thu-2.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="../assets/img/pro-thu-3.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="../assets/img/pro-thu-4.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">
                    </div>
                    <div class="column">
                      <img class="demo cursor" src="../assets/img/pro-thu-5.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise">
                    </div>    
                    <div class="column">
                      <img class="demo cursor" src="../assets/img/pro-thu-6.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains">
                    </div>
                  </div>              
                <!-- END:: GALLERY HERE -->
              </div>
                
              </div>
            </div>
          <div class="col-lg-7">
            <div class="detial-sect">
              <h1 class="title-pm-detail">{{ product_info.name }}</h1>
              <h1 class="price-pm-detail">$<strong>{{ product_info.net_price }}</strong></h1>
              <div class="short-pm-detail">{{product_info.description}}
                
              </div>
              <div class="addtocart-select-pm">
                <form method="post" @submit.prevent="addtocart">
                  <div class="qty-push-bx">							
                    <input type="hidden" v-model="product_id" />
                    <input type="hidden" v-model="user_id" />
                    <input type="number" min="1" max="100" v-model="cartform.quantity" placeholder="1" id="txtAcrescimo" class="qty-number" />
                  </div>
                  
                  <button type="submit" class="primary" on>Add to Cart</button>
                </form>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgcolor-gl mb-5">
      <div class="produ-listing-bx">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Recommended For You</h2>
            <div class="fea-prod-sm">
              Show More <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL1-10.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  DELL E13 Flip EVO Professional Laptop
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$1,200.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL1-3.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Acer Predator Helios 300 PH315-54-760S Gaming Laptop
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$1,000.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL1-2.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">Acer Nitro 5 Gaming Laptop</h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$700.25</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL1-5.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">DELL Strix G15 (2021) Gaming Laptop</h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$899.99</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgcolor-gl">
      <div class="produ-listing-bx">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Customers Also Bought</h2>
            <div class="fea-prod-sm">
              Show More <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/ab810G-B68TYL1.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">Logitech M310 910-001675</h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$19.49</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/ab810G-B68TYL4.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Rosewill 4 Buttons x 1 Wheel USB Wired Optical Mouse
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$34.99</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/ab810G-B68TYL3.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">Logitech S120 2.0 Stereo Speakers</h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$179.49</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/ab810G-B68TYL2.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">Logitech 910-002726</h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$25.04</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
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

import HeaderComp from './Header.vue'
import FooterComp from "./Footer.vue";
import 'vue3-carousel/dist/carousel.css';
import axios from "axios";
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';


export default {
  name: "Product",
  components: {
      HeaderComp, FooterComp, Carousel, Slide, Pagination, Navigation,
  },
  data() {
    return {
      cartform: {
        product_id: 0,
        user_id:0,
        quantity:0,
        item_price:0
      },
      product_info:[]
      
    };
  },
  async mounted(){
    if(localStorage.getItem("login")){
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.cartform.user_id = logindata.id
    }
    this.cartform.product_id = this.$route.query.id;
    
    this.getProductInfo();
  },
  methods: {
    async getProductInfo(){
      this.startLoader();
      
      let result = axios.get(axios.defaults.baseURL+"product/get/"+(this.cartform.product_id));
      console.log((await result).data);
      this.product_info = (await result).data
      this.EndLoader();
    },
    async addtocart(e) {
this.startLoader()
          if(this.cartform.quantity==0){
            alert("Quantity must be atleast 1")
          } else {
            
            this.cartform.item_price = this.product_info.net_price;
            this.cartform.product_id = this.$route.query.id;
            console.log(this.cartform)
              axios.post(axios.defaults.baseURL +"addtocart",this.cartform).then((result)=>{
                console.log(result.data);
                const obj = result.data;
                console.log(obj);
                if(obj.success==true){
                  alert("Product Added to the Cart");  

                  var totalQty=0;
                  obj.message.cartitems.forEach(function(items) {
                    console.log("Qty: "+items.quantity)
                    totalQty+=items.quantity
                  })
                  //this.itemsincart=totalQty;
                  $(".cartitems").children("span").html(totalQty);
                  
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
        
    }
    this.EndLoader()
    e.preventDefault();
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
  }  
};
</script>