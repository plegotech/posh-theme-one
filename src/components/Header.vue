<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Posh Market</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

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
    </nav>

    <div class="sec-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2">
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
          <div class="offset-sm-7 col-sm-3">
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

