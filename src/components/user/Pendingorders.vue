<template>
<!-- START PRODUCT DETIAL POPUP -->
<div class="modal fade" id="productViewMore" tabindex="-1" role="dialog" aria-labelledby="productViewMoreLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
          <div class="modal-content">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

<div class="col-12">
  <div class="details-bx-area">
    <div class="row">
      <div class="col-sm-8">
        <div class="vendorBox-left">
          <div class="vendor-rod-imag">
            <img src="https://nypost.com/wp-content/uploads/sites/2/2021/10/anti-aging-skincare-products.jpg" class="img-x-v-view">
          </div>
        <div class="vendor-detail-bx">
          <h5>Organic Balloon Garland</h5>
          <div class="ven-q-bx">Quantity Needed: 1</div>
          <div class="ven-q-bx">Order Date: May 09, 2022 | 10:20 PM</div>
          </div>
          </div>
          </div>
          <div class="col-sm-4">
            <div class="vendor-rod-detail">
              <div class="topaid-bx">Total Paid:</div>
              <div class="topaid-amout">$355.06</div>
              </div>
              </div>
              </div>
              </div>
              <div class="details-bx-area">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="box-vender-view">
                      <h5>Seller Name</h5>
                      <p>Lauren Graduation Party</p>
                      </div>
                      </div>
                       <div class="col-sm-3">
                        <div class="box-vender-view">
                          <h5>Seller Email</h5>
                          <p>Lauren Graduation Party</p>
                          </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="box-vender-view">
                              <h5>Seller Phone Number</h5>
                              <p>Lauren Graduation Party</p>
                              </div>
                              </div>
                              <div class="col-sm-3">
                                <div class="box-vender-view">
                                  <h5>Shipping Details</h5>
                                  <p>Lauren Graduation Party</p>
                                  </div>
                              </div>
                          </div>
                          </div>
                          <div class="details-bx-area">
                            <div class="row">
                              <div class="col-sm-9">
                                <div class="box-vender-view">
                                  <h5>Description of Product</h5>
                                  <p>Description of Product Description of Product Description of Product Description of Product Description of Product Description of Product </p>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
<!-- END PRODUCT DETAILS POPUP -->
  <div id="ajaxLoader" style="display: none">
    <div id="loader"></div>
  </div>
  <div id="app" class="main dashboardArea">
    <div class="wrapper">
      <div class="navbar-expand-lg">
        <sidebar></sidebar>
      </div>
      <div class="body">
        <navbar></navbar>
        <div class="container-fluid pending-vend comp-seller-myorders">
          <div class="row mt-4">
            <div class="col-sm-12">
              <div class="container-fluid top-newOrder container-sp-box">
                <div class="row">
                  <div class="col-lg-8 col-12">
                    <div class="search-box mb-4">
                      <img
                        src="/src/assets/img/search-icon.png"
                        alt=""
                        class="search-icon"
                      />
                      <input
                        type="text"
                        data-type="pending"
                        class="search_BX"
                        style="float: left"
                      />
                      <img
                        src="/src/assets/img/close-srch.png"
                        alt=""
                        class="close-icon"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-12">
                    <div class="row cst-row"></div>
                  </div>
                </div>
                <!-- <h4>Recent Order</h4> -->
                <div class="pendingOrder-bx">
                  <table
                    id="pvs-tab"
                    class="table recent-Orders-table mobile-btn-show"
                  >
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Recipient</th>
                        <th>Delivery Date</th>
                        <th>Shipping Details</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in data" :key="index">
                        <td>
                          <span>{{ item.id }}</span>
                        </td>
                        <td>
                          <span>{{ item.id }}</span>
                        </td>
                        <td>
                          <span>{{ item.delivery_date }}</span>
                        </td>
                        <td>
                          <span>{{ item.shipping_address }}</span>
                        </td>
                        <td>
                          <span>{{ item.status }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="foot-table">
                  <div class="left">
                    <span>
                      Rows Per Page:
                      <select>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                      </select>
                    </span>
                  </div>
                  <div class="right">
                    <span>1-25 of 31 Items</span>
                    <img
                      src="/src/assets/img/prev-arrow.png"
                      alt=""
                      class="prev-itm"
                    />
                    <img
                      src="/src/assets/img/next-arrow.png"
                      alt=""
                      class="next-itm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sidebar from "./Sidebar.vue";
import navbar from "./Navbar.vue";
export default {
  name: "UserDashboard",
  components: {
    sidebar,
    navbar,
  },
  mounted() {
    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.user_id = logindata.id;
    }

    this.readyJS();
    this.getOrders();
  },
  data() {
    return {
      summary: [],
      data: [],
      user_id: 0,
    };
  },
  methods: {
    async getOrders() {
      this.startLoader();

      let result = axios.get(
        axios.defaults.baseURL + "user-order",
        {
          params: {
            user_id: this.user_id,
            order: "pending",
          },
        },
        { useCredentails: true }
      );

      console.log("Orders");
      this.data = (await result).data;
      console.log(result);
      this.EndLoader();
    },
    startLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "none";
    },
    readyJS() {
      $(document).ready(function () {
        $(".sub-menu a").click(function () {
          $(".sub-menu ul").slideToggle();
        });
      });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
      $(document).ready(function () {
        $(".button-left").click(function () {
          $(".sidebar").toggleClass("fliph");
        });

        $(".more-opt").on("click", function () {
          $(this).each(function () {
            $(this).siblings("ul").show();
          });
        });

        $(".cst-slct ul li").on("click", function () {
          if ($(window).width() < 960) {
            return false;
          } else {
            $(this).each(function () {
              $(this).parent("ul").hide();
            });
          }
        });

        $(".pdf-down").on("click", function () {
          $(this).each(function () {
            alert("File has been downloaded!");
          });
        });
      });

      function closeAllModals() {
        // get modals
        const modals = document.getElementsByClassName("modal");

        // on every modal change state like in hidden modal
        for (let i = 0; i < modals.length; i++) {
          modals[i].classList.remove("show");
          modals[i].setAttribute("aria-hidden", "true");
          modals[i].setAttribute("style", "display: none");
        }

        // get modal backdrops

        // remove every modal backdrop
        for (let i = 0; i < modalsBackdrops.length; i++) {
          document.body.removeChild(modalsBackdrops[i]);
        }
      }

      $(document.body).on("click", ".sub-menu", function () {
        if ($(this).hasClass("active_")) {
          $(this).children().children("ul").slideUp();
          $(this).removeClass("active_");
          $(this)
            .children()
            .find(".arrow")
            .attr("src", "/src/assets/img/menu-icons/arrow-down.png");
        } else {
          $(this).children().children("ul").slideDown();
          $(this).addClass("active_");
          $(this)
            .children()
            .find(".arrow")
            .attr("src", "/src/assets/img/menu-icons/arrow-up.png");
        }
      });
      $(document.body).on("click", ".cancel-popup", function () {
        $(".cstm-modal").removeClass("show");
        $("body").removeClass("modal-open");
        $(".modal")
          .attr("aria-hidden", "true")
          .removeAttr("aria-modal", "true")
          .removeAttr("role", "dialog")
          .css("display", "none");
        $(".modal-backdrop").remove();
      });

      $(document.body).on("click", "#signInOpt", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(".signInOpt").hide();
        } else {
          $(this).addClass("active");
          $(".signInOpt").show();
        }
      });
      $(document.body).on("click", ".signInOpt li", function () {
        $(".signInOpt").hide();
        var li_value = $(this).text();
        $("#signInOpt").removeClass("active").text(li_value);
      });
      $(document.body).on("mouseup", function (e) {
        var container = $(".signInOpt");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.hide();
          $("#signInOpt").removeClass("active");
        }
      });

      $(document.body).on("click", ".eye-icon-pass i", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this).siblings("input").attr("type", "password");
          $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
          $(this).addClass("active");
          $(this).siblings("input").attr("type", "text");
          $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        }
      });

      $(document.body).on("click", "table", function () {
        if ($(window).width() < 960) {
          var tableId = $(this).attr("id");

          var headT = $("table#" + tableId + " thead th");
          headT.on("click", function () {
            alert("clicked!");
            return false;
          });
          var tableHeads = [];
          var x = $("table#" + tableId + " thead tr th").each(function () {
            var data = $(this).contents();
            return data;
          });
          var length_col = x.length;
          for (var i = 0; i <= length_col - 1; i++) {
            var push_Arr = $(x[i]).text();
            tableHeads.push(push_Arr);
            var intNth = parseInt(i + 1);
            var dyn_nth = "nth-child(" + intNth + ")";
            $("table#" + tableId + " tbody tr.set-table td:" + dyn_nth).prepend(
              "<span class='title-span'>" + $(x[i]).text() + "</span>"
            );
          }
        }
      });

      $(document.body).on("click", "tbody tr", function () {
        var table_Class_1 = $(this).closest("table").attr("class");
        if (table_Class_1 == "tabsTable") {
          return false;
        } else {
          if ($(window).width() < 960) {
            $("table.table.recent-Orders-table tr .title-span").remove();
            $("table.table.recent-Orders-table tr").removeClass("set-table");
            $(this).addClass("set-table");
          }
        }
      });
    },
  },
};
</script>