<template>
  <div id="ajaxLoader" style="display: none">
    <div id="loader"></div>
  </div>
  <div id="app" class="main dashboardArea">
    <div class="wrapper">
      <sidebar></sidebar>
      <div class="body">
        <navbar></navbar>
        <div class="container-fluid pending-vend orders-all-order">
          <div class="adj-margin">
            <div class="row mt-4">
              <div class="col-sm-12">
                <div class="row">
                  <div class="prof-area vendor-pro-b1">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="user-prof">
                          <div class="uploadProfile">
                            <div class="profileImage">
                              <input type="file" id="upload-photo" />
                              <img src="/src/assets/img/edit.png" alt="" class="uploadImgBx" />
                            </div>
                            <img src="/src/assets/img/user_profile.png" alt="" />
                          </div>
                          <h1>
                            {{ summary.first_name + " " + summary.last_name }}
                          </h1>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <table class="user-desc">
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>
                                {{
                                  summary.first_name + " " + summary.last_name
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{{ summary.email }}</td>
                            </tr>
                            <tr>
                              <td>Phone</td>
                              <td>{{ summary.phone }}</td>
                            </tr>
                            <!---->
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-3">
                        <button class="edit edit-tab edit-top-section">
                          <img src="/src/assets/img/edit.png" alt="" />EDIT
                          PROFILE
                        </button>
                      </div>
                      <div id="userProfile" class="col-sm-12" style="display: none">
                        <form @submit.prevent="setProfile" method="post">
                          <input type="hidden" :value="profile" name="action" />
                          <div class="row">

                            <div class="col-md-6">
                              <label>First Name:</label>
                              <input type="text" v-model="firstname" class="form-control" /><br />
                            </div>
                            <div class="col-md-6">
                              <label>Last Name:</label>
                              <input v-model="lastname" type="text" class="form-control" /><br />
                            </div>
                            <div class="col-md-6">
                              <label>Email:</label>
                              <input v-model="email" type="email" class="form-control" /><br />
                            </div>
                            <div class="col-md-6">
                              <label>Phone:</label>
                              <input type="text" v-model="phone" class="form-control" /><br />
                            </div>
                            <div class="offset-sm-3 col-sm-6">
                              <button type="submit" class="primary tab-update">Update</button>
                              <a class="close-tab close-01">Close</a>
                            </div>

                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid profile-middle-section">
          <div class="row">
            <div class="col-xl-5">
              <div class="prof-area vendor-pro-b1 edit-profile-page">
                <button class="edit edit-tab edit-password-field">
                  <img src="/src/assets/img/edit.png" alt="" />UPDATE
                </button>
                <h3>Security</h3>
                <div id="userPassword" class="col-sm-12" style="display: none">
                  <form @submit.prevent="setPassword" method="post">
                    <div class="row">

                      <div class="col-md-12">
                        <label>Password:</label>
                        <input type="password" v-model="password" class="form-control" /><br />
                      </div>
                      <div class="" style="width:100%;">
                        <button type="submit" class="primary tab-update">Update</button>
                        <a class="close-tab close-02">Close</a>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="form-cont">
                  <label>Password</label>
                  <input type="password" value="********" />
                  <div class="message-rf">
                    <p>Last Changed: Sep 23, 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-7">
              <div class="prof-area vendor-pro-b1 edit-profile-page">
                <div class="tabs-grp">
                  <button class="add-new btn-width">
                    <img src="/src/assets/img/plus-icon.png" alt="" />ADD NEW
                  </button>
                  <button class="edit edit-tab companyEdit">
                    <img src="/src/assets/img/edit.png" alt="" />EDIT
                  </button>
                </div>
                <h3>Location</h3>
                <div class="clearfix"></div>
                <div class="location-rm">
                  <div id="companyEdit" class="col-sm-12" style="display: none;">
                    <form @submit.prevent="setLocation" method="post">
                      <div class="row">
                        <div class="col-md-12"></div>
                        <div class="col-sm-6">
                          <label>Address:</label>
                          <input type="text" v-model="address" class="form-control" /><br />
                        </div>
                        <div class="col-sm-6">
                          <label>City:</label>
                          <input type="text" v-model="city" class="form-control" /><br />
                        </div>
                        <div class="col-sm-6">
                          <label>State:</label>
                          <input type="text" v-model="state" class="form-control" /><br />
                        </div>
                        <div class="col-sm-6">
                          <label>Zip Code:</label>
                          <input type="text" v-model="zip" class="form-control" /><br />
                        </div>
                        <div class="offset-sm-3 col-sm-6">
                          <button type="submit" class="primary tab-update">Update</button>
                          <a class="close-tab close-03">Close</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <h6>Address</h6>
                      <span>{{ summary.u_address }}</span>
                    </div>
                    <div class="col-lg-6">
                      <h6>City</h6>
                      <span>{{ summary.u_city }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <h6>State</h6>
                      <span>{{ summary.u_state }}</span>
                    </div>
                    <div class="col-lg-6">
                      <h6>Zip Code</h6>
                      <span>{{ summary.u_zip }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="prof-area vendor-pro-b1 edit-profile-page">
            <div class="tabs-grp">
            <button class="add-new btn-width">
              <img src="/src/assets/img/plus-icon.png" alt="" />ADD NEW
            </button>
            <button class="edit">
              <img src="/src/assets/img/edit.png" alt="" />EDIT
            </button>
            </div>
            <h3>Add Bank Details</h3>
            <div class="clearfix"></div>
            <div class="location-rmr">
              <div class="row">
                <div class="col-md-6">
                  <input type="text" name="" value="Account Holder Name*" />
                </div>
                <div class="col-md-6">
                  <input type="text" name="" value="Bank Name*" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <input type="text" name="" value="Account Number*" />
                </div>
                <div class="col-md-6">
                  <input type="text" name="" value="Credit Card Number*" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="tabs-group">
            <button type="submit" class="submit">SUBMIT</button>
            <button type="reset" class="reset">CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import sidebar from "./Sidebar.vue";
import navbar from "./Navbar.vue";
import axios from "axios";
export default {
  name: "Profile",
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
    this.getPrfile();
  },
  computed: {

    firstname: {
      get() {
        return this.info.fname
      },
      set(val) {
        this.info.fname = val
      }
    },
    lastname: {
      get() {
        return this.info.lname
      },
      set(val) {
        this.info.lname = val
      }
    },
    phone: {
      get() {
        return this.info.phone
      },
      set(val) {
        this.info.phone = val
      }
    },
    email: {
      get() {
        return this.info.email
      },
      set(val) {
        this.info.email = val
      }
    },
    password: {
      get() {
        return this.info.password
      },
      set(val) {
        this.info.password = val
      }
    },
    city: {
      get() {
        return this.info.u_city
      },
      set(val) {
        this.info.u_city = val
      }
    },
    address: {
      get() {
        return this.info.u_address
      },
      set(val) {
        this.info.u_address = val
      }
    },
    zip: {
      get() {
        return this.info.u_zip
      },
      set(val) {
        this.info.u_zip = val
      }
    },
    state: {
      get() {
        return this.info.u_state
      },
      set(val) {
        this.info.u_state = val
      }
    },


  },
  data() {
    return {
      action: null,
      summary: [],
      data: [],
      user_id: 0,
      info: {
        fname: null,
        lname: null,
        phone: null,
        email: null,
        password: null,
        u_city: null,
        u_address: null,
        u_zip: null,
        u_state: null
      }
    };
  },
  methods: {
    async getPrfile() {
      this.startLoader();
      let resultsummary = await axios.get(
        axios.defaults.baseURL + "user-profile/" + this.user_id
      );
      this.summary = (await resultsummary).data;
      this.info.fname = this.summary.first_name;
      this.info.lname = this.summary.last_name;
      this.info.phone = this.summary.phone;
      this.info.email = this.summary.email;
      this.info.password = this.summary.password;
      this.info.u_city = this.summary.u_city;
      this.info.u_address = this.summary.u_address;
      this.info.u_zip = this.summary.u_zip;
      this.info.u_state = this.summary.u_state;
      console.log(resultsummary);
      this.EndLoader();
    },
    async setProfile() {

      this.startLoader();
      let resultsummary = await axios.post(
        axios.defaults.baseURL + "user-profile-update",
        {
          params: {
            user_id: this.user_id,
            first_name: this.info.fname,
            last_name: this.info.lname,
            phone: this.info.phone,
            email: this.info.email
          },
        },
        { useCredentails: true }
      );
      // this.summary = (await resultsummary).data;
      // console.log(resultsummary);
      // this.EndLoader();
      this.getPrfile()
    },
    async setPassword() {

      this.startLoader();
      let resultsummary = await axios.post(
        axios.defaults.baseURL + "user-profile-password",
        {
          params: {
            user_id: this.user_id,
            password: this.info.password
          },
        },
        { useCredentails: true }
      );
      // this.summary = (await resultsummary).data;
      // console.log(resultsummary);
      // this.EndLoader();
      this.getPrfile()
    },
    async setLocation() {

      this.startLoader();
      let resultsummary = await axios.post(
        axios.defaults.baseURL + "user-profile-location",
        {
          params: {
            user_id: this.user_id,
            u_address: this.info.u_address,
            u_city: this.info.u_city,
            u_zip: this.info.u_zip,
            u_state: this.info.u_state,
          },
        },
        { useCredentails: true }
      );
      // this.summary = (await resultsummary).data;
      // console.log(resultsummary);
      // this.EndLoader();
      this.getPrfile()
    },
    startLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "none";
    },
    closeAllModals() {
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
    },
    readyJS() {
      $(document).ready(function () {
        $(".sub-menu a").click(function () {
          $(".sub-menu ul").slideToggle();
        });
        $(".edit-top-section").click(function () {
          $("#userProfile").show();
        });
        $(".close-01").click(function () {
          $("#userProfile").hide();
        });
        $(".companyEdit").click(function () {
          $("#companyEdit").show();
        });
        $(".close-03").click(function () {
          $("#companyEdit").hide();
        });
        $(".edit-password-field").click(function () {
          $("#userPassword").show();
        });
        $(".close-02").click(function () {
          $("#userPassword").hide();
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
