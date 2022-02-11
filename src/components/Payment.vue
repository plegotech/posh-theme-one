<template>
<div>
    <header-comp></header-comp>
    <div class="container-fluid">
				<div class="checkout-itesm-bx">
                    
					<div class="row mt-4">
						<div class="col-12">
							<h4><strong>Checkout</strong> <span>(2 Items)</span></h4>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-8">
							<div class="cartIBilling-shipping">
								<div class="row">
									<div class="col-sm-12">
									<div class="checkout-process">
										<ul class="checkout-method">
										<li class="shipping-pay active"><div class="step-counter-point"></div><div class="step-name">Shipping</div></li>
										<li class="shipping-pay active"><div class="step-counter-point"></div><div class="step-name">Payment</div></li>
										</ul>
									</div>
										<div class="ba-title"><h4>Payment</h4></div>
										
									</div>
									
								</div>
								<div class="row">
									<div class="col-sm-12">
										<div class="checkout-payment-bx">
											
											<div class="checkout-payment-info">
											<ul class="products-cat-opt ">
												<li><label class="form-check-label"><input type="radio" class="form-check-input" name="" checked>Credit Card<span class="checkmark_radio"></span></label></li>
											</ul>
											<div class="carInput-fileds">
											<div class="form-group mb-4 creditcardNo">
												<input type="text" placeholder="0000 0000 0000 0000*">
												<img src="../assets/img/credit-card-icon.png" class="credit-card-icon">
											</div>
											<div class="form-group select-month">
													<select class="select-custom-point">
															<option>MM</option>
															<option>Jan</option>
															<option>Feb</option>
															<option>Mar</option>
															<option>Apr</option>
													</select>
											</div>
											<div class="form-group select-year">
													<select class="select-custom-point">
															<option>YYYY</option>
															<option>2020</option>
															<option>2021</option>
															<option>2022</option>
													</select>
											</div>
											<div class="form-group mb-4 select-cvv">
												<input type="text" placeholder="CVV">
												<i class="credit-card-icon"></i>
											</div>
											<div class="form-group mb-4 ">
												<input type="text" placeholder="Card Holder Name">
												<i class="credit-card-icon"></i>
											</div>
											</div>
											<p class="check-txt-pra">Your card details except CVV would be securely saved for faster payments.</p>
										</div>
										<div class="paypal-box">
										<ul class="products-cat-opt">
												<li><label class="form-check-label"><input type="radio" class="form-check-input">PayPal<span class="checkmark_radio"></span></label></li>
											</ul>
											<img src="../assets/img/paypal-icon.png" class="img-paypal">
										</div>
										<div class="col-12"><button class="primary nxtbtn">PLACE ORDER</button></div>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                    
				
						<div class="col-sm-4">
							<div class="cartSummary-bx shipping-right">
								<div class="cartsum-title">Your Order</div>
								<div class="youorder-opt-bx">
									<img src="../assets/img/cart-item-1.png" alt="">
									<div class="youorder-item">
										<h5>ASUS VivoBook 15 S513</h5>
										<div class="yr-disc">
											<div class="yr-disc-bx">Color <strong>Black</strong></div>
											<div class="yr-disc-bx2">Screen Size <strong>15.6</strong></div>
										</div>
										<div class="">$<strong>1,569.99</strong> X 01</div>
									</div>
								</div>
								<div class="youorder-opt-bx">
									<img src="../assets/img/cart-item-2.png" alt="">
									<div class="youorder-item">
										<h5>ASUS UltraPad Pro</h5>
										<div class="yr-disc">
											<div class="yr-disc-bx">Color <strong>Silver</strong></div>
											<div class="yr-disc-bx2">Screen Size <strong>15.6</strong></div>
										</div>
										<div class="">$<strong>1,500</strong> X 01</div>
									</div>
								</div>
								 <div class="cartSum-list">
              <div class="cartSummary-items">
                <div class="csi-title">Item(s)</div>
                <div class="csi-title-amount">$<strong>3069.99</strong></div>
              </div>
              <div class="cartSummary-items">
                <div class="csi-title">Est. Delivery</div>
                <div class="csi-title-amount">$<strong>28.56</strong></div>
              </div>
              <div class="cartSummary-items bt-0">
                <div class="csi-title">Discount</div>
                <div class="csi-title-amount">$<strong>-$10.00</strong></div>
              </div>
              <div class="cartSummary-items pt-4">
                <div class="csi-title-t">Total</div>
                <div class="csi-total-amount">$<strong>3,088.55</strong></div>
              </div>
             
            </div>					
							</div>
						</div>
                    </div>
                </div>

   
    </div>
    <footer-comp></footer-comp>
</div>     
</template>

<script>


import HeaderComp from './Header.vue'
import FooterComp from "./Footer.vue";
export default {
  name: "Payment",
  components: {
      HeaderComp, FooterComp
  }
};
</script>