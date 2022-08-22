<template>
    <div class="navbar-expand-lg">
        <aside
          id="navbarTogglerSidebar"
          class="navbar-collapse collapse"
          style=""
        >
          <div class="sidebar left">
            <div class="user-panel">
              <div class="sidebar-header navbar-dark">
                <router-link to="home"><h3>Posh Market</h3></router-link>
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerSidebar"
                  aria-controls="navbarTogglerSidebar"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                  class="navbar-toggler"
                >
                  <img
                    src="/src/assets/img/close.png"
                    alt=""
                    class="closetag-menu"
                  />
                </button>
              </div>
            </div>
            <ul class="list-sidebar bg-white">
              <li
                data-toggle="collapse"
                data-target="#navbarTogglerSidebar"
                aria-controls="navbarTogglerSidebar"
                aria-expanded="true"
                aria-label="Toggle navigation"
                class=""
              >
                  <router-link to="dashboard"><i class="sb-menu-icon overview-icon"></i>
                  <span class="nav-label">Overview</span></router-link>
              </li>
              <li class="sub-menu active_">
                <a href="#">
                  <i class="sb-menu-icon orders"></i>
                  <span class="nav-label"
                    >My Orders
                    <i>
                      <img
                        src="/src/assets/img/arrow-up.png"
                        alt=""
                        class="arrow" /></i
                  ></span>
                </a>
                <ul>
                  <li>
                    <router-link to="pending">Pending Orders</router-link>
                  </li>
                  <li>
                      <router-link to="allorders">All Orders</router-link>
                  </li>
                </ul>
              </li>
              <li
                
              >
                
                 <router-link to="tracking"><i class="sb-menu-icon track-my-icon"></i>
                  <span class="nav-label">Track My Order</span></router-link>
              </li>
              <li
                
              >
                <router-link to="profile" ><i class="sb-menu-icon my-profile"></i>
                  <span class="nav-label">My Profile</span></router-link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
</template>

<style>
/* @import '@/assets/css/dashboard/style-dashboard.css' */
</style>
<script>
// import axios from "axios";

export default {
  name: "Sidebar",
  mounted() {
  },
}
</script>