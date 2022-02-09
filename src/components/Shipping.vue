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
                    <li class="shipping-pay active">
                      <div class="step-counter-point"></div>
                      <div class="step-name">Shipping</div>
                    </li>
                    <li class="shipping-pay">
                      <div class="step-counter-point"></div>
                      <div class="step-name">Payment</div>
                    </li>
                  </ul>
                </div>
                <div class="ba-title"><h4>Billing Address</h4></div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group mb-4">
                  <label class="top-position">First Name*</label>
                  <input type="text" value="William" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Last Name*</label>
                  <input type="text" value="Smith" />
                </div>
              </div>
              <div class="col-sm-12 mb-4">
                <div class="form-group">
                  <label class="top-position">Address*</label>
                  <input type="text" value="1266 Yolanda Plains, Uptonview" />
                </div>
              </div>

              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Country*</label>
                  <select class="select-custom-point">
                    <option>United States</option>
                    <option>Chile</option>
                    <option>Czechia</option>
                    <option>Denmark</option>
                    <option>Fiji</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">State/Province*</label>
                  <input type="text" value="California" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">State/Province*</label>
                  <input type="text" value="California" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">City*</label>
                  <input type="text" value="190001" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Email Address*</label>
                  <input type="text" value="1William.smith@xyz.com" />
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="form-group">
                  <label class="top-position">Phone Number*</label>
                  <input type="text" value="213-555-0143" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="check-shipping-m">
                  <ul class="products-cat-opt">
                    <li>
                      <label class="form-check-label"
                        ><input
                          type="checkbox"
                          class="form-check-input"
                          value="" />Shipping address same as billing
                        <span class="checkmark"></span
                      ></label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h5 class="mt-4 mb-4">Shipping Method</h5>
                <ul class="products-cat-opt shipping-meth">
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="radio"
                        class="form-check-input"
                        name="radio" />1 Day <strong>$30</strong>
                      <span class="checkmark_radio"></span
                    ></label>
                  </li>
                  <li>
                    <label class="form-check-label"
                      ><input
                        type="radio"
                        class="form-check-input"
                        name="radio" />2-3 Days <strong>$20</strong>
                      <span class="checkmark_radio"></span
                    ></label>
                  </li>
                </ul>
              </div>
              <div class="col-12">
                <a class="primary nxtbtn" href="/cart">NEXT</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="cartSummary-bx shipping-right">
            <div class="cartsum-title">Your Order</div>
            <div class="youorder-opt-bx">
              <img src="img/cart-item-1.png" alt="" />
              <div class="youorder-item">
                <h5>ASUS VivoBook 15 S513</h5>
                <div class="yr-disc">
                  <div class="yr-disc-bx">Color <strong>Black</strong></div>
                  <div class="yr-disc-bx2">
                    Screen Size <strong>15.6</strong>
                  </div>
                </div>
                <div class="">$<strong>1,569.99</strong> X 01</div>
              </div>
            </div>
            <div class="youorder-opt-bx">
              <img src="img/cart-item-2.png" alt="" />
              <div class="youorder-item">
                <h5>ASUS UltraPad Pro</h5>
                <div class="yr-disc">
                  <div class="yr-disc-bx">Color <strong>Silver</strong></div>
                  <div class="yr-disc-bx2">
                    Screen Size <strong>15.6</strong>
                  </div>
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
              <div class="cartSummary-items">
                <div class="csi-title">Discount Code:</div>
                <div class="csi-title-dc">Posh200</div>
              </div>
              <div class="cartSummary-items">
                <div class="csi-title-t">Total</div>
                <div class="csi-total-amount">$<strong>3,088.55</strong></div>
              </div>
              <a class="primary" href="/cart"
                >PROCEED TO CHECKOUT <img src="img/checkout-icon.png"
              /></a>
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
  name: "Shipping",
  components: {
      HeaderComp, FooterComp
  }
};
</script>