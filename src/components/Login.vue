<template>
<div class="login-area">
  <div class="container top-log">
    <div class="row">
      <div class="col-sm-12">
        <div class="logo">
          <h1>Posh Marketplace</h1>
        </div>

        <div class="login-box mb-5">
          <h1>Sign-In</h1>
          <form>
            <input type="email" placeholder="Email Address*" />
            <span class="eye-icon-pass"
              ><input type="password" placeholder="Password*" /><i
                class="fas fa-eye"
              ></i
            ></span>
            <span class="invalidLogin alert alert-danger"></span>
            <label class="group">
              <input type="checkbox" />
              Stay Signed In
            </label>

            <a href="#">Forgot Password?</a>
            <button class="primary btn-block">Login</button>
          </form>
        </div>
        <div class="info-login">
          <h2>Don't have account yet?</h2>
          <ul>
            <li><a href="#" class="">User Signup</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "Login",
};
</script>