
      <template>
  <div>
    <header-comp :key="HeaderKey"></header-comp>
    <div style="text-align: center; padding: 40px 0; background: #ebf0f5">
      <div
        class="card"
        style="
          background: white;
          padding: 60px;
          border-radius: 4px;
          box-shadow: 0 2px 3px #cccccc;
          display: inline-block;
          margin: 0 auto;
        "
      >
        <div
          style="
            border-radius: 200px;
            height: 200px;
            width: 200px;
            background: #0862a3;
            margin: 0 auto;
          "
        >
          <i
            class="checkmark"
            style="
              color: #ffffff;
              font-size: 100px;
              line-height: 200px;
              margin-left: -15px;
            "
            >✓</i
          >
        </div>
        <h1
          style="
            color: #0862a3;
            font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
            font-weight: 900;
            font-size: 40px;
            margin-bottom: 10px;
          "
        >
          Success
        </h1>
        <p
          style="
            color: #0862a3;
            font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
            font-size: 20px;
            margin: 0;
          "
        >
          We received your purchase request;<br />
          we'll be in touch shortly!
        </p>
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";
import axios from "axios";
export default {
  name: "Success",
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      user_id: null,
      cartitemslist: [],
      count_cartitems: 0,
      total_price: 0,
      count: 0,
      img_url: "https://posh-marketplace.plego.pro/img/product-images/",
    };
  },
  async mounted() {
    this.getCartData();
  },

  methods: {
    async getCartData() {
      this.startLoader();

      if (!localStorage.getItem("login")) {
        if (localStorage.getItem("guest")) {
          const guestdata = JSON.parse(localStorage.getItem("guest"));
          this.cartitemslist = guestdata;
          var tempTotalPrice = 0;
          this.count_cartitems = this.cartitemslist.length;
          this.cartitemslist.forEach(function (items) {
            console.log("Qty: " + items.quantity);
            tempTotalPrice += items.quantity * items.item_price;
          });
          this.total_price = tempTotalPrice;
          $(".cartitems").children("span").html(this.count_cartitems);
        }
      } else {
        this.total_price = 0;
        this.count = 0;
        let result = axios.post(
          axios.defaults.baseURL + "usercartdata",
          {
            user_id: this.user_id,
          },
          {
            useCredentails: true,
          }
        );
        console.log("Cart Check Data2");
        console.log((await result).data);

        this.cartitemslist = (await result).data;
        var tempTotalPrice = 0;
        this.count_cartitems = this.cartitemslist.length;
        this.cartitemslist.forEach(function (items) {
          console.log("Qty: " + items.quantity);
          tempTotalPrice += items.quantity * items.item_price;
        });
        this.total_price = tempTotalPrice;
        //this.itemsincart=totalQty;
        $(".cartitems").children("span").html(this.count_cartitems);

        if (localStorage.getItem("login")) {
          console.log("Login Data");
          const logindata = JSON.parse(localStorage.getItem("login"));
          this.user_id = logindata.id;
          logindata.cartitems = this.cartitemslist;
          localStorage.setItem("login", JSON.stringify(logindata));
        }
      }
      //this.count_cartitems = this.cartitemslist.length
      this.HeaderKey += 1;
      this.EndLoader();
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
  },
};
</script>