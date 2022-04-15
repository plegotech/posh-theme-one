<template>
  <div id="ajaxLoader" style="display: none">
    <div id="loader"></div>
  </div>
  <div id="app" class="main dashboardArea">
    <div class="wrapper">
      <sidebar></sidebar>
      <div class="body">
          
       <!-- <navbar></navbar> -->
            <nav class="navbar navbar-expand-lg navbar-dark">
         <div id="navbarTogglerDemo01">
            <button type="button" data-toggle="collapse" data-target="#navbarTogglerSidebar" aria-controls="navbarTogglerSidebar" aria-expanded="true" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button> <a href="" class="navbar-brand">Track My Order</a> 

            <div class="head-search-box">
           <div class="pending-vend">
                  <div class="search-box mb-4"><img src="/src/assets/img/search-icon.png" alt="" class="search-icon"> <input type="text" data-type="pending" class="search_BX" style="float: left;"> <img src="/src/assets/img/close-srch.png" alt="" class="close-icon"></div>
               </div>
            </div>
            <ul class="topnav-user">
              
               <li><a href="#" class="cart-p"><img src="/src/assets/img/cart-p.png" alt="" class="notify"><span class="numberof-ma">5</span></a></li>
               <li><a href="#"><img src="/src/assets/img/notification-bell.png" alt="" class="notify"><span class="numberof-ma">3</span></a></li>
               <li>
                  <img src="/src/assets/img/profile.png" alt="" class="profile"> 
                  <div class="dropdown foruser-pmarket">
                     <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="userlogined dropdown-toggle">
                        John Doe
                     </div>
                     <div aria-labelledby="dropdownMenuButton" class="dropdown-menu dropdown-menu dropdown-menu-right"><a href="javascript:void(0)" class="dropdown-item">
                        Logout
                        </a>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
        <div class="container-fluid pending-vend orders-all-order">
          <div class="row mt-4">
            <div class="container-fluid track-my-order">
              <div class="prof-area">
                <section class="track-top">
                  <div class="row">
                    <div class="col-xl-4">
                      <h3>Order# AKN 1250</h3>
                      <p>Friday, Sep 05, 2021 - 02:03PM</p>
                    </div>
                    <div class="col-xl-5">
                      <h5>Completed</h5>
                      <span class="progress-value"> 60% </span>
                      <div class="progress" style="max-width: 350px">
                        <div
                          class="progress-bar bg-info"
                          style="width: 60%"
                        ></div>
                      </div>
                    </div>
                    <div class="col-xl-3">
                      <h5>Expected Completion</h5>
                      <p>Wednesday, Sep 10, 2021 - 02:03PM (5 Days)</p>
                    </div>
                  </div>
                </section>

                <div class="progress-container">
                  <ol class="progtrckr" data-progtrckr-steps="5">
                    <li class="progtrckr-done">
                      <span class="progress-message p-message1">Received</span>
                    </li>
                    <li class="progtrckr-done">
                      <span class="progress-message p-message2">At Depot</span>
                    </li>
                    <li class="progtrckr-done">
                      <span class="progress-message p-message3"
                        >In Transit</span
                      >
                    </li>
                    <li class="progtrckr-todo">
                      <span class="progress-message p-message4"
                        >Out of Delivery</span
                      >
                    </li>
                    <li class="progtrckr-todo">
                      <span class="progress-message p-message5">Delivered</span>
                    </li>
                  </ol>
                </div>

                <section class="track-bottom">
                  <div class="row">
                    <div class="col-xl-3">
                      <h3>Recipient Information</h3>
                      <p>
                        PSD125 Fulfilment Street,<br />
                        Shippington,<br />
                        Chicago, <br />
                        IL, 60008, US
                      </p>
                    </div>
                    <div class="col-xl-3">
                      <div class="pd-box">
                        <h3>Order Id</h3>
                        <p>Order# AKN 1250</p>
                      </div>
                      <div>
                        <h3>Consumer</h3>
                        <p>John Doe</p>
                      </div>
                    </div>
                    <div class="col-xl-3">
                      <div class="pd-box">
                        <h3>Invoice Amount</h3>
                        <p>$2.24</p>
                      </div>
                      <div>
                        <h3>Payment Method</h3>
                        <p>
                          <span class="card-c"
                            ><img src="/src/assets/img/card-04.png" /></span
                          >****5788
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-3">
                      <div class="pd-box">
                        <h3>Shipping Options</h3>
                        <p>FedEx, DHL</p>
                      </div>
                      <div>
                        <h3>Tracking Number</h3>
                        <p>000zx2rmd123782</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import axios from "axios";
import sidebar from "./Sidebar.vue";
import navbar from "./Navbar.vue";
export default {
  name: "Trackorder",
  components: {
    sidebar,
    navbar,
  },
  mounted() {},
};
</script>