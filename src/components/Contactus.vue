<template>
  <div>
    <header-comp></header-comp>
    <div class="container">
       <h1 class="my-5">Contact US</h1>
                  <div class="row">
				<div class="col-sm-6 mb-4">
					<div class="form-group">
						<label class="top-position">Full Name*</label>
						<input type="text" />
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<div class="form-group">
						<label class="top-position">Phone Number*</label>
						<input type="text" />
					</div>
				</div>
				<div class="col-sm-6 mb-4">
					<div class="form-group">
						<label class="top-position">Email Address*</label>
						<input type="text" />
					</div>
				</div>
				<div class="col-sm-6 mb-4">
				<div class="selection-re-opt">
                    <label class="top-position">Select Option </label>
                    <select class="select-custom-point">
                      <option>Shipping</option>
                      <option>Order</option>
                    </select>
                  </div>
				  </div>
				<div class="col-sm-12 mb-4">
					<div class="form-group">
						<label class="top-position">Message</label>
						<textarea rows="6" style="width:100%"></textarea>
					</div>
				</div>
				<div class="col-sm-12 mb-4 align-center">
					<button class="primary">Submit </button>
				</div>
			</div>
    </div>
   
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";

export default {
  name: "Contactus",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>