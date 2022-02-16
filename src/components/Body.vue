
<template>
  <div>
<header-comp></header-comp>
<div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-sm-3 hideOnMobile">
          <div class="side-menu mt-3 hide-mobile-bx">
            <h1>TOP CATEGORIES</h1>
            <ul>
              <li>
                <img src="../assets/img/menu-template/components.png" />Components<i
                  class="fas fa-angle-right"
                ></i>
                <ul class="side-submenu">
                  <li><a href="#">Components</a></li>
                  <li>
                    <a href="/allproducts"  >Computer Systems</a>
                  </li>
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
        </div>
        <div class="col-xl-7 col-lg-6 col-9 no-pr-pl" id="MainSliderbx">
          <div
            id="HomecarouselControls"
            class="carousel slide mt-3"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../assets/img/poshslider-1.png"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/img/poshslider-1.png"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/img/poshslider-1.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#HomecarouselControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#HomecarouselControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-3 mt-3" id="MainSideBanner">
          <div class="mb-3">
            <img src="../assets/img/rectangle_1.png" class="banner" alt="" />
          </div>
          <div class="">
            <img src="../assets/img/rectangle_2.png" class="banner" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
    
      <div class="row">
      
        <div class="col-md-4 col-12 mt-4 flex-sm">
          <div class="mb-4">
            <picture>
              <source
                media="(min-width:991px)"
                srcset="../assets/img/new-arrivals-img.jpg"
              />
              <img src="../assets/img/new-arrivals-img-2.jpg" alt="" class="img-fluid" />
            </picture>
          </div>
          <div class="mb-4">
            <picture>
              <source
                media="(min-width:991px)"
                srcset="../assets/img/hot-items-in-gaming-img.jpg"
              />
              <img
                src="../assets/img/hot-items-in-gaming-img-2.jpg"
                alt=""
                class="img-fluid"
              />
            </picture>
          </div>
        </div>
        <div class="col-md-8 mt-4 flex-sm-bx">
          <div class="row">
            <div class="col-lg-7 mb-4">
              <img src="../assets/img/hot_categories.png" width="100%" alt="" />
            </div>
            <div class="col-lg-5 mb-4">
              <div class="for-signup">
                <h5>For more details and updates</h5>
                <div class="signup-btn-bx">
                  <a href="/signup"><button class="primary">Sign up</button></a>
                  <p>Already Registered?<a href="/login"> SIGN IN </a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5 mb-sm-0 mb-4">
              <img src="../assets/img/electronic-deals-img.jpg" alt="" />
            </div>
            <div class="col-sm-7">
              <img
                src="../assets/img/home_and_kitchens.png"
                width="100%"
                alt=""
                style="height: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    

    <div class="container-fluid bgcolor-gl">
      <div class="produ-listing-bx mt-4">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Featured Products</h2>
            <div class="fea-prod-sm">
              Show More <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL-111.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Goodthreads Men's Slim-Fit Long-Sleeve End on End Shirt
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$22.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL-1.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display,
                  AMD Ryzen 3 3200U, Vega 3 Gr...
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$22.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL-11.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Under Armour Men’s Charged Pursuit 2 Running Shoe
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$22.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL-12.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphones
                  Chip, Class 1 Blueth...
                </h3>
                <div class="prod-p-icon">
                  <span class="pro-price">$22.50</span
                  ><span class="pro-icons"
                    ><img src="../assets/img/buy.png" class="img-fluid" /><img
                      src="../assets/img/heart.png"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-4">
            <img src="../assets/img/mobile-phones-img.png" />
          </div>
          <div class="col-sm-6"><img src="../assets/img/new-jackets-img.png" /></div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="bsCategories">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Browse Seller Categories</h2>
            <div class="fea-prod-sm">
              Show More <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

       <div class="row">
      <div class="col-sm-12">
        <Carousel :itemsToShow="8" :wrapAround="true" >
          <Slide v-for="slide in 20" :key="slide">
             <div class="bsc-slider-bx">
              <img src="../assets/img/Group-59.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
        <div class="row" style="display:none">
          <div class="owl-carousel owl-theme" id="sellerCAtegories">
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-59.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-60.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-61.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-62.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-63.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-64.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-65.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-66.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-64.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-65.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
            <div class="bsc-slider-bx">
              <img src="../assets/img/Group-66.png" alt="" class="img-fluid" />
              <h5>Watches</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bgcolor-gl">
      <div class="produ-listing-bx">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Just For You</h2>
            <div class="fea-prod-sm">
              Show More <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL-122.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Double Wall Stainless Steel Insulated Ice
                </h3>
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
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYL111-1.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Electric Shaker Bottle, 220z Shaker Bottles for Protein Mixes,
                  USB-Rechargeable Protei...
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
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYLL1-2.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  TOZO NC2 Hybrid Active Noise Cancelling Wireless Earbuds,
                  in-Ear Detection Headph...
                </h3>
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
          <div class="col-sm-3">
            <div class="product-item">
              <div class="pro-img-bx">
                <img src="../assets/img/810G-B68TYLp1-3.png" alt="" />
              </div>
              <div class="pro-title-bx">
                <h3 class="prod-title">
                  Wrangler Authentics Men’s Premium Relaxed Fit Straight Leg
                  Cargo Pant
                </h3>
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
    <div class="container-fluid about-foot">
      <div class="row">
        <div class="col-sm-10">
          <h2 class="title-about">ABOUT POSH MARKET</h2>
          <p>
            Lörem ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
            euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
            Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
            berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
            kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap. Lörem
            ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
            euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
            Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
            berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
            kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap. Lörem
            ipsum jess mån rugbyförälder berade. Odyrade spenyda femissa
            euktiga. Intraliga geoligt valigen kontrakåd. Pomeliga smygflyga.
            Speskade vument tahet tefåskap. Lörem ipsum jess mån rugbyförälder
            berade. Odyrade spenyda femissa euktiga. Intraliga geoligt valigen
            kontrakåd. Pomeliga smygflyga. Speskade vument tahet tefåskap.
          </p>
        </div>
        <div class="col-sm-2">
          <img
            src="../assets/img/Online-Shopping.png"
            width="229"
            height="335"
            class="img-fluid onlineShp"
            alt=""
          />
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
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';


export default {
  name: "Body",
  components: {
      HeaderComp, FooterComp, Carousel, Slide, Pagination, Navigation,
  }
};
</script>
