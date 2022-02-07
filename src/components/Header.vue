<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">Posh Market</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerSidebar"
        aria-controls="navbarTogglerSidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  <div class="collapse navbar-collapse" id="navbarTogglerSidebar">
      <!-- menu mobile -->
      <div class="side-menu">
            <h1>TOP CATEGORIES</h1>
            <ul>
              <li>
                <img src="img/menu-template/components.png" />Components<i
                  class="fas fa-angle-right"
                ></i>
                <ul class="side-submenu">
										<li><a href="#">Components</a></li>
										<li><a href="#">Computer Systems</a></li>
										<li><a href="#">Electronics</a></li>
										<li><a href="#">Gaming</a></li>
										<li><a href="#">Networking</a></li>
										<li><a href="#">Office Solutions</a></li>
									</ul>
              </li>
              <li>
                <img src="img/menu-template/computer.png" />Computer Systems<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/electronics.png" />Electronics<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/game.png" />Gaming<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/networking.png" />Networking<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/office.png" />Office Solutions<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/software-service.png" />Software
                Services<i class="fas fa-angle-right"></i>
              </li>
              <li>
                <img src="img/menu-template/automotive.png" />Automotives<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/home&tool.png" />Home & Tools<i
                  class="fas fa-angle-right"
                ></i>
              </li>
              <li>
                <img src="img/menu-template/health.png" />Health & Sports<i
                  class="fas fa-angle-right"
                ></i>
              </li>
            </ul>
          </div>
      <!-- menu mobile -->
  </div>
      <form class="form-inline my-2 my-lg-2">
        <input
          class="form-control mr-sm-2"
          type="Laptops"
          placeholder="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search <img class="search-icon" src="../assets/img/Search-head.png" />
        </button>
      </form>
      <div class="head-right-info">
        <div class="btn-sign-register">
          <img src="../assets/img/user-icon.png" class="uicon" />
          <div class="signin-reg">
            <span class="sign-reg">Sign In</span>
            <span class="sign-or-reg">or</span>
            <span class="sign-reg">Register</span>
          </div>
        </div>
        <div class="bask-bx">
          <img src="../assets/img/bask-icon.png" class="bask-icon" />
          <span class="bx-amount">$0.00</span>
        </div>
      </div>
      </div>
    </nav>

    <div class="sec-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="show-all-cat">
              <span
                ><img src="img/menu-template/category.png" />Show All Categories
                <i class="fas fa-chevron-down"></i
              ></span>
              <ul>
                <li>Cat A</li>
                <li>Cat B</li>
                <li>Cat C</li>
              </ul>
            </div>
          </div>
          <div class="col-6">
            <div class="order-track">
              <ul>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
};
</script>

