<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div id="navbarTogglerDemo01">
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerSidebar"
        aria-controls="navbarTogglerSidebar"
        aria-expanded="true"
        aria-label="Toggle navigation"
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="dashboard" class="navbar-brand">Dashboard</router-link>
      <ul class="topnav-user">
        <li>
          <router-link to="cart" class="cart-p"
            ><img src="/src/assets/img/cart-p.png" alt="" class="notify" /><span
              class="numberof-ma"
              >{{cartitems}}</span
            ></router-link>
        </li>
         <li>
                    <a href="" class="dropdown-toggle" id="dropdownMenuButton22" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                        <img src="/src/assets/img/notification-bell.png" class="notify" alt=""><span class="numberof-ma">4</span>
                    </a>
                    <div class="dropdown-menu notificationBx" aria-labelledby="dropdownMenuButton22">
                        <ul class="noti-list-bx">
                            <li><a href="#"><strong>32GB DDR4 Memory, 512GB SSD + 1TB HDD, RGB Backlit Keyboard, Windows 10 Home, Gray </strong> <span class="noti-ful-des">ASUS TUF F15 Gaming Laptop, 15.6" Full HD 144Hz Screen, Intel Core i7-10870H Processor, NVIDIA GeForce GTX 1660 Ti</span> <span class="time-boxx"><span class="right-rem-bx">4 hours ago</span></span></a></li>
                            <li><a href="#"><strong>ASUS TUF F15 Gaming Laptop, 15.6" Full HD 144Hz Screen, Intel Core i7-10870H Processor,</strong> <span class="noti-ful-des">32GB DDR4 Memory, 512GB SSD + 1TB HDD, RGB Backlit Keyboard, Windows 10 Home, Gray</span> <span class="time-boxx"><span class="right-rem-bx">4 hours ago</span></span></a></li>
                            <li><a href="#"><strong>Bilal Khan</strong> <span class="noti-ful-des">ASUS TUF F15 Gaming Laptop, 15.6" Full HD 144Hz Screen, Intel Core i7-10870H Processor</span> <span class="time-boxx"><span class="right-rem-bx">4 hours ago</span></span></a></li>
                        </ul>
                    </div>
                </li>
        <li>
          <img src="/src/assets/img/profile.png" alt="" class="profile" />
          <div class="dropdown foruser-pmarket">
            <div
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="userlogined dropdown-toggle"
            >
              {{userTitle}}
            </div>
            <div
              aria-labelledby="dropdownMenuButton"
              class="dropdown-menu dropdown-menu dropdown-menu-right"
            >
              <a href="javascript:void(0)" class="dropdown-item"> Logout </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      cartitems:0,
      userTitle:"Name"
    }
  },
  mounted() {
    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.user_id = logindata.id;
      if(logindata.cartitems){
        this.cartitems = logindata.cartitems.length;
      }
      
      this.userTitle = logindata.first_name + " " + logindata.last_name;
    }
  },
};
</script>