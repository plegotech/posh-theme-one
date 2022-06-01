<template>
  <div>
    <header-comp></header-comp>
    <div class="container">
      <h1 class="my-5">Contact Us</h1>
      <form @submit.prevent="postContactData" method="post">
        <div class="row">
          <div class="col-sm-6 mb-4">
            <div class="form-group">
              <label class="top-position">Full Name*</label>
              <input type="text" required v-model="contact.name" />
            </div>
          </div>
          <div class="col-sm-6 mb-4">
            <div class="form-group">
              <label class="top-position">Phone Number*</label>
              <input type="text" required v-model="contact.phone" />
            </div>
          </div>
          <div class="col-sm-6 mb-4">
            <div class="form-group">
              <label class="top-position">Email Address*</label>
              <input type="text" required v-model="contact.email" />
            </div>
          </div>
          <div class="col-sm-6 mb-4">
            <div class="selection-re-opt">
              <label class="top-position">Select Option*</label>
              <select class="select-custom-point" required v-model="contact.purpose">
                <option>Shipping</option>
                <option>Order</option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 mb-4">
            <div class="form-group">
              <label class="top-position">Message*</label>
              <textarea
                rows="6" required 
                style="width: 100%"
                v-model="contact.message"
              ></textarea>
            </div>
          </div>
          <div class="col-sm-12 mb-4 align-center">
            <button type="submit" class="primary">Submit</button>
          </div>
        </div>
      </form>
    </div>

    <footer-comp></footer-comp>
  </div>
</template>
<script>
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";
import axios from "axios";
export default {
  name: "Contactus",
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      contact: {
        name: null,
        phone: null,
        email: null,
        message: null,
        purpose: null,
        seller_id: 977,
      },
    };
  },
  methods: {
    async postContactData(e) {
      axios
        .post(axios.defaults.baseURL + "contact-us", this.contact)
        .then((result) => {
          console.log(result.data);
          const obj = result.data;
          console.log(obj);
          if (obj.success == true) {
            alert("Contact Form submitted successfully");
            this.contact.name = "";
            this.contact.phone = "";
            this.contact.email = "";
            this.contact.message = "";
            this.contact.purpose = 0;
          } else {
            alert("Some error occured in saving data");
          }
          console.log(result);
        });
        e.preventDefault();
    },
  },
};
</script>