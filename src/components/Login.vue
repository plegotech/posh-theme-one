<template>
  <div id="ajaxLoader" style="display: none">
    <div id="loader"></div>
  </div>

  <div class="login-area">
    <div class="container top-log">
      <div class="row">
        <div class="col-sm-12">
          <div class="logo">
            <h1>Posh Marketplace</h1>
          </div>

          <div class="login-box mb-5">
            <h1>Sign-In</h1>
            <form @submit.prevent="loginData" method="POST">
              <input
                type="email"
                placeholder="Email Address*"
                v-model="login.email"
              />
              <span class="eye-icon-pass"
                ><input
                  type="password"
                  placeholder="Password*"
                  v-model="login.password" /><i class="fas fa-eye"></i
              ></span>
              <!-- <span class="invalidLogin alert alert-danger"></span> -->
              <label class="group">
                <input type="checkbox" />
                Stay Signed In
              </label>

              <a href="#">Forgot Password?</a>
              <button class="primary btn-block" type="submit">Login</button>
            </form>
          </div>
          <div class="info-login">
            <h2>Don't have account yet?</h2>
            <ul>
              <li>
                <router-link to="signup">User Signup</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      cartform: {
        product_id: 0,
        user_id: 0,
        quantity: 1,
        item_price: 0,
      },

      login: {
        email: null,
        password: null,
      },
    };
  },
  created() {},
  async mounted() {
    if (localStorage.getItem("login")) {
      this.$router.push({ name: "Home" });
    } else {
      //alert("Not Logged In");
    }

    // if(localStorage.getItem("routes")){
    //   const routedata = JSON.parse(localStorage.getItem("routes"));
    //   if(routedata.length>0 && routedata.length>2){
    //     if(routedata[routedata.length-2].name=="signup"){
    //       this.$router.push({name:routedata[routedata.length-3]})
    //     } else if(routedata[routedata.length-2].name=="login"){
    //       this.$router.push({name:"Home"});
    //     }
    //   } else {
    //     this.$router.push({name:"Home"});
    //   }
    // }
  },
  methods: {
    startLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      var target_ContId = document.getElementById("ajaxLoader");
      target_ContId.style.display = "none";
    },
    loginData(e) {
      this.startLoader();
      axios
        .post(axios.defaults.baseURL + "login", this.login)
        .then((result) => {
          console.log(result.data);
          const obj = result.data;
          //console.log(obj);
          this.EndLoader();
          if (obj.success == true) {
            alert(obj.message);

            localStorage.setItem("login", JSON.stringify(obj.userdetail));

            if (localStorage.getItem("guest")) {
              const guestdata = JSON.parse(localStorage.getItem("guest"));

              if (guestdata.length > 0) {
                guestdata.forEach((element) => {
                  this.addProductToCart(obj.userdetail.id, element);
                });
              }
              //const logindata = JSON.parse(localStorage.getItem("login"));
              //logindata.cartitems=guestdata
              //localStorage.setItem("login", JSON.stringify(logindata));
              localStorage.removeItem("guest");
            }

            this.$router.push("home");
            //this.$router.go(-1)
            // if(localStorage.getItem("routes")){
            //   const routedata = JSON.parse(localStorage.getItem("routes"));
            //   if(routedata.length>0 && routedata.length>2){
            //     if(routedata[routedata.length-2].name!="Signup"){
            //       console.log(routedata[routedata.length-2].fullPath);
            //       this.$router.push({name:routedata[routedata.length-2].fullPath})
            //     } else {
            //       this.$router.push({name:"Home"});
            //     }
            //   } else {
            //     this.$router.push({name:"Home"});
            //   }
            // }
          } else {
            alert("Something went wrong, may be credentials are incorrect");
          }
          //console.log(result);
        });
      this.EndLoader();
      e.preventDefault();
    },
    async addProductToCart(user_id, guestData) {
      this.cartform.user_id = user_id;
      this.cartform.product_id = guestData.product_id;
      this.cartform.quantity = guestData.quantity;
      this.cartform.item_price = guestData.item_price;
      axios
        .post(axios.defaults.baseURL + "addtocart", this.cartform)
        .then((result) => {
          console.log(result.data);
          const obj = result.data;
          console.log(obj);
          if (obj.success == true) {
            alert("Guest Products Added to the User Cart");

            var totalQty = obj.message.cartitems.length;
            // obj.message.cartitems.forEach(function(items) {
            //   console.log("Qty: "+items.quantity)
            //   totalQty+=items.quantity
            // })
            //this.itemsincart=totalQty;
            $(".cartitems").children("span").html(totalQty);
            if (totalQty == 0) {
              $(".cartitems").children("span").hide();
            } else {
          $(".cartitems").children("span").show()
        }

            if (localStorage.getItem("login")) {
              console.log("Login Data");
              const logindata = JSON.parse(localStorage.getItem("login"));
              logindata.cartitems = obj.message.cartitems;
              localStorage.setItem("login", JSON.stringify(logindata));
            }
          } else {
            alert("Some error occured");
          }
        });
    },
  },
};
</script>