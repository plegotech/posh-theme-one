<template>
    <div>
        <header-comp></header-comp>
        <div class="container-fluid">
				<div class="cart-itesm-bx">
					<div class="row mt-4">
						<div class="col-12">
							<h4>Cart <span>(2 Items)</span></h4>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-9 col-12">
							<div class="cartItems">
								<div class="cartItems-box">
									<div class="cartI-1">
										<h5 class="ci-tile">Item</h5>
									</div>
									<div class="cartI-2">
										<h5 class="ci-tile">Quantity</h5>
									</div>
									<div class="cartI-3">
										<h5 class="ci-tile">Price</h5>
									</div>
									<div class="cartI-4">
									</div>
								</div>
								<div class="cartItems-box">
									<div class="cartI-1">
										<div class="cart-item-img"><img src="../assets/img/cart-item-1.png" alt=""
												class="img-fluid"></div>
										<p>ASUS VivoBook 15 S513 Thin and Light Laptop, 15.6" FHD Display, AMD Ryzen 7
											5700U Processor, Radeon Graphics, 16GB DDR4 RAM, 1TB PCIe SSD, Fingerprint,
											Windows 10 Home, Indie Black, S513UA-NS77</p>
									</div>
									<div class="cartI-2">
										<div class="ci-push-bx">
											<input value="1" placeholder="1" class="qty-number" min=1 max=110>
											<div class="cart-add-item">
												<button class="btnplus-item" onclick="increment()">+</button>
												<button class="btnminus-item" onclick="decrement()">-</button>
											</div>
										</div>
									</div>
									<div class="cartI-3">
										<h5 class="ci-price">$1,569.99</h5>
									</div>
									<div class="cartI-4">
										<div class="carti-remove"><img src="../assets/img/remove-icon.png" alt=""
												class="img-fluid"></div>
									</div>
								</div>
								<div class="cartItems-box">
									<div class="cartI-1">
										<div class="cart-item-img"><img src="../assets/img/cart-item-2.png" alt=""
												class="img-fluid"></div>
										<p>ASUS Ultrapad Pro Thin and Light Laptop, 15.6" FHD Display, AMD Ryzen 7 5700U
											Processor, Radeon Graphics, 16GB DDR4 RAM, 1TB PCIe SSD, Fingerprint,
											Windows 10 Home, Indie Black, S513UA-NS77</p>
									</div>
									<div class="cartI-2">
										<div class="ci-push-bx">
											<input value="1" placeholder="1" class="qty-number" min=1 max=110>
											<div class="cart-add-item">
												<button class="btnplus-item" onclick="increment()">+</button>
												<button class="btnminus-item" onclick="decrement()">-</button>
											</div>
										</div>
									</div>
									<div class="cartI-3">
										<h5 class="ci-price">$1,500</h5>
									</div>
									<div class="cartI-4">
										<div class="carti-remove"><img src="../assets/img/remove-icon.png" alt=""
												class="img-fluid"></div>
									</div>
								</div>
								<div class="cart-item-updates">
									<button class="primary"><img src="../assets/img/edit-icon.png" alt="">Update cart</button>
									<button class="secndary"><img src="../assets/img/remove-icon.png" alt="">REMOVE ALL</button>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-12">
							<div class="cartSummary-bx">
								<div class="cartsum-title">Cart Summary</div>
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
									<a class="primary" href="/shipping">PROCEED TO CHECKOUT <img src="../assets/img/checkout-icon.png"></a>
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
  name: "Cart",
  components: {
      HeaderComp, FooterComp
  }
};
</script>